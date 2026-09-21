# Artwork archive

`legacy/` preserves the layered GIMP files, original photographs, backups, and older
exports that previously lived in `src/lib/images`. These files are not imported
by the app and are not published.

The canonical website images now live in `src/lib/assets`. Edit a layered source
here if needed, then export **one PNG or JPEG** over its canonical image there.
The build generates the responsive sizes, AVIF/WebP versions, and fallback images.
Changing an XCF alone does not change the website.

Keep new editable artwork here, and use Git history for previous versions of the
canonical website images instead of making additional `_backup` exports.

## September 2026 image sources

Original supplied files are retained in `tmp/`. Website PNGs were prepared with
`npm run import:image`; see the main README for conversion and document extraction.

| Supplied source | Website asset under `src/lib/assets/` |
| --- | --- |
| `tmp/Emma Warner headshot.png` | `members/Emma/emma_photo.png` |
| `tmp/Emma Warner thumbnail.png` | `members/Emma/emma_image.png` |
| `tmp/20260831 - Website Blurb with Photo - PBBielawski.docx`, `word/media/image1.jpeg` | `members/Patrick/patrick_photo.png` |
| Same Word document, `word/media/image2.jpeg` | `members/Patrick/patrick_photo_alternate.png` |
| `tmp/polarized2.tif` | `members/Patrick/patrick_image.png` |

The Word document contains two portraits. The first is used on Patrick's card;
the second is available as an alternate. Both were extracted directly from the
document archive. The separate polarized micrograph is used as Patrick's research
image.

Emma and Patrick's website portraits use close-ups prepared with
`import:image --portrait --crop`. Coordinates below are `left,top,width,height` in the oriented
original, before the importer adds any padding to reach the 606:933 ratio:

- Emma: `140,0,688,1059` from the supplied headshot.
- Patrick: `155,20,880,1355` from the Word document's `word/media/image1.jpeg`.

The supplied originals and Patrick's alternate retain their original dimensions.
