import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import sharp from 'sharp';
import { importImage } from '../scripts/import-image.mjs';

async function workspace(t) {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-image-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return { source: join(directory, 'source'), root: join(directory, 'assets') };
}

test('imports an uppercase PNG without changing its pixels, alpha, dimensions, or original file', async (t) => {
  const { source, root } = await workspace(t);
  const input = `${source}.PNG`;
  const pixels = Buffer.from([255, 0, 0, 255, 0, 255, 0, 128, 0, 0, 255, 0]);
  await sharp(pixels, { raw: { width: 3, height: 1, channels: 4 } }).png().toFile(input);
  const original = await readFile(input);
  await importImage(input, 'members/Test/photo.png', { root });
  const output = sharp(join(root, 'members/Test/photo.png'));
  const metadata = await output.metadata();
  assert.deepEqual([metadata.format, metadata.width, metadata.height, metadata.hasAlpha], ['png', 3, 1, true]);
  assert.deepEqual(await output.raw().toBuffer(), pixels);
  assert.deepEqual(await readFile(input), original);
});

test('applies TIFF orientation and removes source metadata', async (t) => {
  const { source, root } = await workspace(t);
  const input = `${source}.tif`;
  const pixels = Buffer.from([255, 0, 0, 0, 255, 0]);
  await sharp(pixels, { raw: { width: 2, height: 1, channels: 3 } })
    .withMetadata({ orientation: 6 }).tiff({ compression: 'lzw' }).toFile(input);
  await importImage(input, 'research.png', { root });
  const output = sharp(join(root, 'research.png'));
  const metadata = await output.metadata();
  assert.deepEqual([metadata.width, metadata.height, metadata.space], [1, 2, 'srgb']);
  assert.equal(metadata.orientation, undefined);
  assert.equal(metadata.exif, undefined);
  assert.deepEqual(await output.raw().toBuffer(), pixels);
});

test('requires an explicit page for multipage TIFFs and imports the selected page', async (t) => {
  const { source, root } = await workspace(t);
  const input = `${source}.TIFF`;
  await sharp(Buffer.from([255, 0, 0, 0, 255, 0]), {
    raw: { width: 1, height: 2, channels: 3, pageHeight: 1 }
  }).tiff({ compression: 'lzw' }).toFile(input);
  assert.equal((await sharp(input).metadata()).pages, 2);
  await assert.rejects(importImage(input, 'page.png', { root }), /Select one with --page/);
  await assert.rejects(importImage(input, 'page.png', { root, page: 3 }), /does not exist/);
  await importImage(input, 'page.png', { root, page: 2 });
  const output = sharp(join(root, 'page.png'));
  assert.equal((await output.metadata()).height, 1);
  assert.deepEqual(await output.raw().toBuffer(), Buffer.from([0, 255, 0]));
});

test('protects existing assets and leaves them intact when replacement input is invalid', async (t) => {
  const { source, root } = await workspace(t);
  await sharp({ create: { width: 2, height: 2, channels: 3, background: 'red' } }).png().toFile(source);
  await importImage(source, 'photo.png', { root });
  await sharp({ create: { width: 3, height: 3, channels: 3, background: 'blue' } }).png().toFile(source);
  const previous = await readFile(join(root, 'photo.png'));
  await assert.rejects(importImage(source, 'photo.png', { root }), /already exists/);
  assert.deepEqual(await readFile(join(root, 'photo.png')), previous);
  await importImage(source, 'photo.png', { root, force: true });
  assert.equal((await sharp(join(root, 'photo.png')).metadata()).width, 3);
  const replacement = await readFile(join(root, 'photo.png'));
  await writeFile(source, 'not an image');
  await assert.rejects(importImage(source, 'photo.png', { root, force: true }));
  assert.deepEqual(await readFile(join(root, 'photo.png')), replacement);
});

test('rejects unsupported formats, invalid destinations, and invalid page numbers', async (t) => {
  const { source, root } = await workspace(t);
  await writeFile(source, '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>');
  await assert.rejects(importImage(source, 'vector.png', { root }), /Supported source formats/);
  for (const destination of ['../outside.png', '/absolute.png', 'photo.webp', 'photo.PNG', 'folder\\photo.png', './photo.png', 'folder/../photo.png']) {
    await assert.rejects(importImage(source, destination, { root }), /destination/);
  }
  for (const page of [0, -1, 1.5, NaN]) {
    await assert.rejects(importImage(source, 'photo.png', { root, page }), /positive integer/);
  }
});
