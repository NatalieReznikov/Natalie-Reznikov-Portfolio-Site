# Natalie Reznikov’s portfolio

A static SvelteKit site with an animated, swipeable carousel. Each section has its
own URL: `/`, `/bio/`, `/publications/`, `/cover-art/`, `/lab/`, and `/contact/`.
The existing dark background, green accents, typography, and content are retained.

## Run locally

Use **Node.js 24** (also recorded in `.node-version`, `.nvmrc`, and CI).

```sh
npm ci
npm run dev -- --open
```

With Nix, run `nix develop` first, then the same commands. To access the dev server
from a phone on the same network, run `npm run dev -- --host 0.0.0.0` and open the
network address Vite prints.

The first run processes the source images and can take a few minutes. Later runs
reuse `node_modules/.cache/imagetools`. Image processing happens locally at build
time; the published site does not need an image service or application server.

To review the exact static production build:

```sh
npm run build
npm run preview -- --open
```

`build/` contains the deployable files. Opening its HTML with `file://` will not
work; use the preview server or a static HTTP server.

## Content maintenance

Editable content is in `src/lib/content/`. Components and CSS live separately in
`src/lib/components/` and `src/lib/styles.css`. JSON uses double quotes and does
not permit trailing commas. Run `npm run validate:content` after editing.

| Task | File | Change |
| --- | --- | --- |
| Add or revise a publication | `publications.json` | Add/edit a record; array order is display order, newest first. |
| Mark a paper as published | `publications.json` | Change `status` from `in-press` to `published`; update the citation. |
| Add a lab member | `people.json` | Add one record and their portrait/research image. |
| Move a member to alumni | `people.json` | Change `status` to `alumni`; revise their biography and `order` if needed. |
| Add a journal cover | `covers.json` | Add an image and record; larger `order` values appear first. |
| Update the career timeline | `biography.json` | Add/edit a position; use `to: null` for the current position. |
| Update contact details or the home page | `site.json` | Edit the relevant text, portrait, or address. |

Every content record has a stable, unique `id`. People sort by `order` within their
current/alumni group. Display numbering for publications is automatic. Publication
`year` can be `null` when unknown; `citation` preserves journal, volume, pages,
book/chapter information, and any special formatting in plain text. Use a bare
`doi` such as `10.1016/j.bone.2025.117767`, or a `url`, or neither for a citation
without a link. Do not include sentence punctuation in the link. `notes` holds
text such as `(Cover article)`; publication status has its own field.

For optional DOI metadata lookup:

```sh
npm run import:publication -- 10.1016/j.bone.2025.117767
```

This prints a proposed record from Crossref without changing files. Review the
metadata, citation formatting, and status before copying it into the JSON array.
The regular build uses only committed content and never depends on Crossref.

Fields ending in `Html` preserve the existing career and cover formatting (links,
emphasis, and line breaks). These are trusted, repository-authored HTML; they are
not intended for unreviewed public input. Do not embed scripts or event handlers.

## Replacing images

1. Place one PNG or JPEG in `src/lib/assets/`, or import a supplied image with the
   command below.
2. Reference its path relative to that folder in the content record, for example
   `members/Vinay/Vinay_photo.png`.
3. Include a useful image description in `researchAlt`, `alt`, or `imageAlt`.
4. Preview the result, then commit the source image and content changes.

The build generates AVIF, WebP, and fallback images with responsive widths and
intrinsic dimensions. No manual `_mac` version, WebP export, or import statement
is needed. Small career logos get their own smaller output sizes. Keep a source
large enough for its intended display; generated images are never upscaled.

### Importing PNGs, TIFFs, and photographs

```sh
npm run import:image -- "tmp/Emma Warner headshot.png" members/Emma/emma_photo.png
npm run import:image -- "tmp/polarized2.tif" members/Patrick/patrick_image.png
```

The importer accepts PNG, TIFF (`.tif`/`.tiff`), JPEG, and WebP, including uppercase
extensions. It creates the destination folders inside `src/lib/assets/`, applies
camera orientation, converts colours to sRGB, removes embedded metadata, and
writes a compressed PNG without cropping or resizing. Transparency is retained.
The PNG is a website source, not a scientific-data archive: it uses 8-bit sRGB;
keep the original TIFF for its original bit depth and metadata. Supplied originals
are left in place. No system image-conversion tools are needed after `npm ci`.

The destination must end in lowercase `.png` and is relative to `src/lib/assets/`.
Use `--force` to replace an existing asset. Multipage TIFFs require `--page N`
(starting at 1) so pages are never silently discarded. Run
`npm run import:image -- --help` for usage. Update the content path and alternative
text, run `npm run validate:content`, then preview and commit the PNG with the content.
`npm run dev` and `npm run build` automatically generate its responsive formats.

### Images supplied in documents

Extract document images manually, then pass the extracted files to `import:image`.
For a Word `.docx`, open it as a ZIP archive and take the original images from
`word/media/` (for example, `unzip "document.docx" 'word/media/*' -d extracted`).
Inspect the images before assigning them; embedded numbering does not identify
portraits versus research images, and document crops are not applied to originals.

Document extraction is separate from the automated raster importer.

Layered artwork and previous exports are preserved in `artwork/legacy/`, outside
the app's asset pipeline. Editing an XCF there requires exporting a PNG/JPEG to
`src/lib/assets/` before the site changes. Use Git history for previous versions
of website assets. Do not commit generated build outputs.

## Navigation architecture

- `src/lib/sections.ts` defines section URLs, labels, icons, and order once.
- `src/routes/[[section]]/` validates those URLs and prerenders one HTML page for
  each section. The optional parameter allows Home at `/`.
- `SectionCarousel.svelte` remains mounted as the route parameter changes.
  SvelteKit owns history; Swiper owns gestures and animation. Route-driven slide
  changes suppress Swiper callbacks so they cannot add duplicate history entries.
- Each section has one persistent scroll container. Inactive slides are inert and
  excluded from the accessibility tree. Arrow keys work inside the carousel.
- Direct links show their requested section before JavaScript runs. Normal links
  also work without JavaScript. Reduced-motion preferences disable slide motion.

The timeline is implemented with CSS, removing the old timeline package and its
client-only rendering. The home portrait is a square anchored to the bottom right.
A `ResizeObserver` watches its container and text block, including changes from
font loading and text wrapping. The side length is the smaller container dimension,
limited by whichever space is larger: beside the text or below it. The same value
sets both width and height; `object-fit: cover` crops the photo without stretching.
Before JavaScript runs, CSS fits a square below the text.

Lab biographies flow with the card rather than introducing a second scrollbar
inside each biography. Cover captions support mouse hover, keyboard activation,
and tapping on mobile.

## Checks

```sh
npm run validate:content
npm run check
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests cover desktop and mobile direct links, refreshes, Back/Forward,
scroll preservation, rapid navigation, touch gestures, reduced motion, cover
captions, and navigation without JavaScript. On Nix or systems with an existing
Chromium, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable when running
browser tests. Linux CI installs browser system dependencies automatically.
Tests start a fresh preview server on port 4175, separate from the usual local
preview port. Restart a manually running preview server after rebuilding.

The `sharp` and `cookie` overrides select patched versions until their parent
packages update their dependency ranges. Revisit them during dependency updates;
keep the production build and browser checks passing together.

## Publishing

GitHub Actions is the only deployment method. Pull requests run content/type
checks, unit tests, a production build, and browser tests. Pushes to `main` deploy
the checked `build/` artifact to GitHub Pages. The legacy force-push script has
been retired. In the repository Pages settings, the deployment source should be
**GitHub Actions** and the custom domain should remain `nataliereznikov.com`.

The default base path is empty for the custom domain. For a project Pages URL,
build with `BASE_PATH=/repository-name npm run build` and update `site.json`'s
`url` to the site's origin. Keep the same `BASE_PATH` when running `npm run preview`
for that build. Every section emits an `index.html` in its own directory, allowing
direct links and refreshes on static hosting.
