# AGENTS.md

This repository hosts customer-facing documentation for Sheep Celica projects.

## Purpose

- Publish end-user documentation as HTML pages through GitHub Pages.
- Keep Markdown files as the editable source of truth.
- Preserve a simple static-site structure with no build step.

## Source Of Truth

- Editable content lives under `source/<product-name>/`.
- Published pages live under `products/<product-name>/`.
- Images live under `images/<product-name>/`.

When converting a guide, treat the Markdown file as the source of truth and update the matching HTML page instead of asking the user to maintain raw HTML manually.

## Current Product Structure

For `pop-up-controller-v10`:

- Product landing page: `products/pop-up-controller-v10/index.html`
- Installation guide source: `source/pop-up-controller-v10/installation.md`
- Installation guide page: `products/pop-up-controller-v10/installation/index.html`
- User guide source: `source/pop-up-controller-v10/user-guide.md`
- User guide page: `products/pop-up-controller-v10/user-guide/index.html`
- App flashing source: `source/pop-up-controller-v10/app-flashing.md`
- App flashing page: `products/pop-up-controller-v10/app-flashing/index.html`
- Purchase source: `source/pop-up-controller-v10/purchase.md`
- Purchase page: `products/pop-up-controller-v10/purchase/index.html`
- Parts overview source: `source/pop-up-controller-v10/parts/overview.md`
- Parts overview page: `products/pop-up-controller-v10/parts/index.html`

## Parts Page Structure

For `pop-up-controller-v10`, the parts section is not a collection of customer-facing subpages.

- The published parts experience is a single expandable catalogue page at
  `products/pop-up-controller-v10/parts/index.html`.
- Each base part still has its own Markdown source file under
  `source/pop-up-controller-v10/parts/<part-name>.md`.
- The parts overview and the individual part Markdown files should be treated as the source of
  truth for regenerating the single published catalogue page.
- Legacy placeholder part subpages may still exist in the repository, but the current customer-
  facing pattern for this product is the single catalogue page unless the user asks otherwise.

## Guide Conversion Rules

When asked to turn Markdown into HTML:

1. Read the Markdown file from `source/...`.
2. Update or create the matching published page under `products/...`.
3. Reuse the shared components and typography in `assets/styles/site.css` according to the style rules below.
4. Keep the content customer-facing and easy to scan on mobile.
5. Prefer short sections, clear headings, numbered steps where appropriate, and simple warning/notes wording.
6. Add or update breadcrumbs and product-page links when needed.
7. If a new guide or major page is introduced, update the relevant product landing page so it links to it.
8. If images are referenced, place them under the matching `images/<product-name>/...` folder and use relative links from the page.

## Parts Catalogue Rules

When asked to update the `pop-up-controller-v10` parts section:

1. Read `source/pop-up-controller-v10/parts/overview.md`.
2. Read the relevant per-part Markdown files under `source/pop-up-controller-v10/parts/`.
3. Update the single published catalogue page at `products/pop-up-controller-v10/parts/index.html`.
4. Keep each part as an expandable card rather than creating a separate customer-facing page unless the user explicitly asks for that.
5. Use regular badge tags in the card header. Do not rely on a separate leading icon chip unless the user asks for it.
6. Use `PN` for visible customer-facing part-number labels.
   For the `pop-up-controller-v10` parts catalogue, prefer carrying the part number in the card heading instead of using a dedicated PN fact card.
7. Keep unfinished entries clearly marked with a `WIP` or similar status badge until the user asks to remove it.
8. Show a visible catalogue-wide pricing note when the parts page includes prices, making it clear that prices are reference-only and the user should be contacted for the most accurate quote.
9. Show pricing as compact EUR and USD pills in the collapsed summary when prices are present.
10. Do not duplicate the same pricing block inside the expanded card unless the user explicitly asks for it.
11. Support an optional `## Related Parts` section in each per-part Markdown source, placed after `## Fact Cards`.
12. If `## Related Parts` is blank, ignore it when converting the Markdown into the published HTML.
13. If `## Related Parts` contains entries, render them inside the expanded card below the fact cards as links to the matching part cards in the same catalogue page.
14. Keep the expanded card customer-facing: short description, quick facts, optional related-part links, PDF links, and images only.
15. When pricing is shown, support both `EUR` and `USD` values for each part card.
16. For `pop-up-controller-v10`, keep live price values in `products/pop-up-controller-v10/parts/pricing-data.js` and let the HTML load them from there instead of hardcoding prices in each card.
17. Preserve the lightweight JS-enhanced expand/collapse animation implemented in `assets/scripts/part-card-animation.js` unless the user asks to remove or replace it, and keep reduced-motion users on the native no-animation behavior.
18. Store part images under `images/<product-name>/parts/<part-number>-<slug>/`.
19. Store technical drawing PDFs under `downloads/<product-name>/parts/<part-number>-<slug>/`.

## Style Notes

- This website is primarily technical documentation. Favor precise, information-dense content over promotional or decorative copy.
- Keep pages simple. Avoid extra filler sections unless they help the customer.
- Avoid needless fluff. If a sentence or section does not add technical clarity, guidance, or customer value, leave it out.
- Favor HTML pages over PDFs unless the user explicitly asks for a PDF.
- Keep filenames and URLs stable once a page is published.

## Shared HTML Styling

- Treat `assets/styles/site.css` as the styling source of truth. Before adding a class or page-specific CSS, check its existing components and a comparable published page. Extend a shared component only when the content needs a genuinely new presentation; avoid copied rules, inline styles for ordinary layout, and per-page font, color, or heading overrides.
- Use the site's single `--font-family` stack. Keep body text, headings, cards, and controls on that stack. Use the existing type scale (`--font-size-body`, `--font-size-display`, `--font-size-section`, `--font-size-card-title`, and `--font-size-lede`) rather than introducing near-duplicate sizes for the same role.
- Use one semantic `h1` in the page hero, `h2` for main sections, and `h3` for cards or subsections. Use `.hero` with `.eyebrow` and `.lede` where needed, `.section` with `.section-heading` for main content, and `.breadcrumb` for navigation. Do not choose heading levels for visual size alone.
- Use `.guide-card-grid` with `.guide-mini-card` for information or fact cards. For feature cards with an image, add `.feature-card-grid` to the grid and `.feature-card` to each `.guide-mini-card`; use `.feature-card--wide-image` only when the image needs the wider treatment. Use `.card-link` for linked navigation cards rather than making an informational card look clickable.
- Use `.notice` for notes within guide content, `.note-card` for standalone or grouped notes, and `.page-note` for a compact note directly below a hero. Apply the existing severity modifiers: `--info` (blue) for neutral clarification or troubleshooting hand-off, `--warning` (yellow) for prerequisites and cautions, and `--serious` (red) for safety-critical or high-risk instructions. Use `.notice--subtle` for unaccented supporting text and `.notice--tip` or `.note-card--success` only for a genuine positive tip or status. Keep the visible note title consistent with its severity (`Info`, `Warning`, or `Serious Warning`) when a title is shown.
- Reuse `.button`, `.button-secondary`, `.badge`, `.guide-figure`, and the existing grid classes for their respective roles. Keep spacing, radius, color, and responsive behavior in the shared stylesheet. If a new pattern is necessary, define it there with a clear purpose and use it consistently on comparable pages.

## Supplemental Agent Instructions

- For folder-based screenshot cleanup, read `agent-instructions/crop-snipping-tool-borders.md`.

## If The User Starts A New Chat

If the user asks to generate a guide from a Markdown file:

- Assume they want the Markdown kept and the HTML regenerated from it.
- Do not replace the Markdown workflow with a PDF-first workflow.
- Check whether the corresponding product page should link to the new guide.
