import type { Picture } from '@sveltejs/enhanced-img';

// One source image per asset. The build generates formats and responsive widths.
const images = {
  ...import.meta.glob<Picture>([
    '/src/lib/assets/**/*.{png,jpg,jpeg,webp}',
    '!/src/lib/assets/background_tile.png',
    '!/src/lib/assets/occupations/**'
  ], {
    eager: true,
    import: 'default',
    query: { enhanced: true, w: '320;640;960;1440', quality: '80' }
  }),
  ...import.meta.glob<Picture>('/src/lib/assets/occupations/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
    query: { enhanced: true, w: '45;90;180', quality: '80' }
  })
};

export function imageFor(path: string): Picture {
  const image = images[`/src/lib/assets/${path}`];
  if (!image) throw new Error(`Missing image: src/lib/assets/${path}`);
  return image;
}
