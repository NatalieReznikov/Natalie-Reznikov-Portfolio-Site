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
