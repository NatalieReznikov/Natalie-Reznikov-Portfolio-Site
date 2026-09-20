import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const assetRoot = fileURLToPath(new URL('../src/lib/assets/', import.meta.url));
const formats = new Set(['png', 'tiff', 'jpeg', 'webp']);

const usage = `Usage: npm run import:image -- <source> <asset-path.png> [--force] [--page N]

Convert a PNG, TIFF (.tif/.tiff), JPEG, or WebP to a website source PNG.
The destination is relative to src/lib/assets; parent folders are created.
Original dimensions and transparency are retained, orientation is applied,
colours are converted to sRGB, and source metadata is removed.
The site build generates responsive AVIF/WebP and fallback images from the PNG.

Existing assets are protected unless --force is supplied.
For a multipage image, select one page explicitly with --page N (starting at 1).
Extract images from Word/PDF documents separately before importing them.

Example:
  npm run import:image -- "tmp/polarized2.tif" members/Patrick/patrick_image.png`;

export async function importImage(source, destination, { force = false, page, root = assetRoot } = {}) {
  if (!destination.endsWith('.png') || isAbsolute(destination) || destination.includes('\\') ||
    destination.split('/').some((part) => part === '' || part === '.' || part === '..')) {
    throw new Error('Use a relative destination ending in lowercase .png inside src/lib/assets.');
  }
  const output = resolve(root, destination);
  const withinRoot = relative(root, output);
  if (withinRoot === '..' || withinRoot.startsWith(`..${sep}`) || isAbsolute(withinRoot)) {
    throw new Error('The destination must stay inside src/lib/assets.');
  }
  if (resolve(source) === output) throw new Error('Source and destination must be different files.');
  if (page !== undefined && (!Number.isSafeInteger(page) || page < 1)) {
    throw new Error('--page must be a positive integer, starting at 1.');
  }

  const input = await readFile(source);
  // Inspect actual file contents, so uppercase extensions and .tif both work.
  const metadata = await sharp(input).metadata();
  if (!formats.has(metadata.format)) {
    throw new Error('Supported source formats: PNG, TIFF, JPEG, WebP. Extract Word/PDF images separately.');
  }
  const pages = metadata.pages ?? 1;
  if (pages > 1 && page === undefined) {
    throw new Error(`Source has ${pages} pages. Select one with --page N (starting at 1).`);
  }
  if (page !== undefined && page > pages) {
    throw new Error(`Page ${page} does not exist; source has ${pages} page(s).`);
  }

  // Decode completely before touching the destination. Never crop or resize the source.
  const { data, info } = await sharp(input, { page: (page ?? 1) - 1, pages: 1 })
    .autoOrient()
    .toColourspace('srgb')
    .png({ compressionLevel: 9, palette: false })
    .toBuffer({ resolveWithObject: true });
  await mkdir(dirname(output), { recursive: true });
  try {
    await writeFile(output, data, { flag: force ? 'w' : 'wx' });
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error(`Asset already exists: ${destination}. Use --force to replace it.`);
    }
    throw error;
  }
  return { path: destination, width: info.width, height: info.height, bytes: info.size };
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      force: { type: 'boolean', default: false },
      page: { type: 'string' },
      help: { type: 'boolean', short: 'h' }
    }
  });
  if (values.help) {
    console.log(usage);
    return;
  }
  if (positionals.length !== 2) throw new Error(usage);
  const result = await importImage(positionals[0], positionals[1], {
    force: values.force,
    page: values.page === undefined ? undefined : Number(values.page)
  });
  console.log(`Imported src/lib/assets/${result.path} (${result.width} × ${result.height}, ${result.bytes} bytes).`);
  console.log(`Use "${result.path}" in the content JSON, then run npm run validate:content.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`Image import failed: ${error.message}`);
    process.exitCode = 1;
  });
}
