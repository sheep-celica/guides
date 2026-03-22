# Crop Snipping Tool Borders

Use this instruction when a user asks to clean up a folder of screenshots taken with Windows Snipping Tool.

## Why

Snipping Tool captures often include an unwanted 1-pixel border around the outside of the selected window. For guide images in this repository, that border should be removed so screenshots look intentional and consistent.

## What To Do

1. Work on the image files in the requested folder.
2. Unless the user says otherwise, process common web image formats only: `.png`, `.jpg`, `.jpeg`, and `.webp`.
3. Crop exactly 1 pixel from every edge of each image.
4. Preserve the original filename and format.
5. Do not resize, annotate, recolor, or otherwise edit the image.
6. Treat this as a one-time cleanup step. If images may already have been cropped, stop and confirm before cropping again.
7. Verify the result by checking that each image is 2 pixels smaller in both width and height than before.

## Repo Notes

- Keep shared published assets under `images/<product-name>/...`.
- Prefer grouping screenshots by subject so they can be reused across multiple guides.
- If a guide page references the images, update the HTML to use the shared relative path.
