# Parts Overview

Source draft for the published parts catalogue at `/products/pop-up-controller-v10/parts/`.

The published HTML is a single scrolling catalogue with expandable cards instead of one separate
page per part.

## Hero

- Title: `Pop-up Controller V10 Parts`
- Lede: Browse the parts available for the Pop-up Controller V10.

## Catalogue Intro

- Section title: `Catalogue`
- Short intro: Part numbers below match the Sheep Celica catalogue numbering for the Pop-up
  Controller V10 system and its matching accessories.

## Variant Note

- Variant suffixes such as `A` or `B` can stay inside the base part listing when they share the
  same core product and wiring.

## Pricing Note

- Show a visible pricing disclaimer between the hero and the catalogue cards.
- Use customer-facing wording that prices are reference only and the user should be contacted for
  current pricing and the most accurate quote.
- Load the displayed prices from `products/pop-up-controller-v10/parts/pricing-data.js` so price
  edits are kept out of the HTML card markup.
- Show the current EUR and USD prices in the collapsed card summary.

## Page Structure

- Keep page-level catalogue content in this file.
- Keep each base part in its own Markdown file in this folder.
- Rebuild `products/pop-up-controller-v10/parts/index.html` from this overview plus the individual
  part files.
- The published page uses expandable cards with normal badge tags, a `WIP` badge while unfinished,
  a heading that carries the part number, visible EUR and USD pricing in the collapsed summary,
  quick fact cards, an optional related parts section, a technical drawing PDF button, and one or
  more images inside the expanded card.
- The published page also uses a light JS-enhanced expand/collapse animation for the part cards
  while preserving native `details` behavior as the fallback.

## Related Parts

- Each real part source file can include an optional `## Related Parts` section after `## Fact
  Cards`.
- Leave the section blank when there are no curated cross-links ready yet.
- Ignore blank `## Related Parts` sections when converting Markdown into the published HTML.
- When the section has entries, render it inside the expanded part card below the fact cards as
  links to the matching part cards on the same catalogue page.
- Prefer simple bullet items such as ``- `10300` Pop-up Controller V10`` in the source Markdown.

## Current Part Files

- `10300-pop-up-controller-v10.md`
- `10302-wink-button-large-slot.md`
- `10305-sleepy-eye-controls.md`
- `10321-wink-button-cable.md`
- `10322-sleepy-eye-controls-cable.md`
- `10341-remote-receiver-module.md`
- `10342-remote-transmitter-4-buttons.md`
- `10343-expansion-cable.md`
- `10344-antenna.md`

## Image Folder Convention

Store part media under:

`images/pop-up-controller-v10/parts/<part-number>-<slug>/`

Use simple stable filenames inside each part folder, for example:

- `catalog.png`
- `detail-installed.png`
- `detail-connectors.png`
- `variant-10302a-front.png`

Use one main display image by default. Add more images only when a part needs variant views,
comparison images, or extra detail shots.

## PDF Convention

Store downloadable technical drawings under:

`downloads/pop-up-controller-v10/parts/<part-number>-<slug>/`

Use:

- `technical-drawing.pdf`
- optional additional files only when needed

## Pricing Convention

Display prices on the published page from:

- `products/pop-up-controller-v10/parts/pricing-data.js`

Use one entry per part number with:

- `EUR`
- `USD`

If final numbers are not available yet, keep visible placeholders such as `TBD`.
