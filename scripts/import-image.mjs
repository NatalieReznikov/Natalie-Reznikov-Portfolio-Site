import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const assetRoot = fileURLToPath(new URL('../src/lib/assets/', import.meta.url));
const formats = new Set(['png', 'tiff', 'jpeg', 'webp']);
const portraitRatio = 606 / 933;
const portraitBackground = '#222526';

const usage = `Usage: npm run import:image -- <source> <asset-path.png> [--force] [--page N]
                        [--portrait [--crop left,top,width,height]]

Convert a PNG, TIFF (.tif/.tiff), JPEG, or WebP to a website source PNG.
The destination is relative to src/lib/assets; parent folders are created.
By default, dimensions and transparency are retained, orientation is applied,
colours are converted to sRGB, and source metadata is removed.
The site build generates responsive AVIF/WebP and fallback images from the PNG.

For lab portraits, use --portrait to frame the image at the original 606:933 ratio.
Use --crop left,top,width,height to select a close-up in oriented source pixels.
Aim for the face to occupy about one-third of the picture. Short crops get solid bars
above and below; tall crops are trimmed equally at the top and bottom.
Portrait pixels are never stretched or upscaled. Original files are unchanged.

Existing assets are protected unless --force is supplied.
For a multipage image, select one page explicitly with --page N (starting at 1).
Extract images from Word/PDF documents separately before importing them.

Example:
  npm run import:image -- "tmp/polarized2.tif" members/Patrick/patrick_image.png`;

export async function importImage(source, destination, { force = false, page, portrait = false, crop, root = assetRoot } = {}) {
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
  if (crop !== undefined) {
    if (!portrait) throw new Error('--crop requires --portrait.');
    if (!crop || !['left', 'top', 'width', 'height'].every((key) => Number.isSafeInteger(crop[key])) ||
      crop.left < 0 || crop.top < 0 || crop.width < 1 || crop.height < 1) {
      throw new Error('--crop must contain non-negative left/top and positive width/height integers.');
    }
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

  // Decode and orient before applying crop coordinates or touching the destination.
  const normalized = await sharp(input, { page: (page ?? 1) - 1, pages: 1 })
    .autoOrient()
    .toColourspace('srgb')
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = normalized.info;
  let prepared = sharp(normalized.data, { raw: { width, height, channels } });
  if (portrait) {
    const region = crop ? { ...crop } : { left: 0, top: 0, width, height };
    if (region.left + region.width > width || region.top + region.height > height) {
      throw new Error('--crop must fit inside the oriented source image.');
    }
    const frameHeight = Math.round(region.width / portraitRatio);
    if (region.height > frameHeight) {
      region.top += Math.floor((region.height - frameHeight) / 2);
      region.height = frameHeight;
    }
    prepared = prepared.extract(region);
    const padding = frameHeight - region.height;
    if (padding > 0) {
      prepared = prepared.extend({
        top: Math.floor(padding / 2), bottom: Math.ceil(padding / 2),
        left: 0, right: 0, background: portraitBackground
      });
    }
  }
  const { data, info } = await prepared
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
      portrait: { type: 'boolean', default: false },
      crop: { type: 'string' },
      help: { type: 'boolean', short: 'h' }
    }
  });
  if (values.help) {
    console.log(usage);
    return;
  }
  if (positionals.length !== 2) throw new Error(usage);
  let crop;
  if (values.crop !== undefined) {
    if (!/^\d+,\d+,\d+,\d+$/.test(values.crop)) throw new Error('Use --crop left,top,width,height with integer pixel coordinates.');
    const [left, top, width, height] = values.crop.split(',').map(Number);
    crop = { left, top, width, height };
  }
  const result = await importImage(positionals[0], positionals[1], {
    force: values.force,
    page: values.page === undefined ? undefined : Number(values.page),
    portrait: values.portrait,
    crop
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
