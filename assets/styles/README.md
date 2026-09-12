# Page styling conventions

All published pages load `site.css`. Keep content in `source/` Markdown and update the matching HTML when publishing changes. Prefer the shared classes below over page-specific colors, font sizes, and padding.

## Notes

Use `notice` inside guide content and `note-card` for a standalone page note. Both use the same severity colors:

| Meaning | Guide class | Page class | Source label |
| --- | --- | --- | --- |
| Neutral clarification | `notice--info` | `note-card--info` | `Info` |
| Prerequisite or caution | `notice--warning` | `note-card--warning` | `Warning` |
| Safety-critical or high-risk instruction | `notice--serious` | `note-card--serious` | `Serious Warning` |

Keep `notice--subtle` for supporting detail without a severity. `notice--tip` and `note-card--success` use green for tips or positive status. Do not choose a severity just to change a card's color.

```html
<div class="notice notice--warning">
  <h3>Warning</h3>
  <p>Complete the setup guide before connecting the controller.</p>
</div>
```

## Cards and type

- Use `guide-mini-card` for compact facts and `feature-card` with it for illustrated feature cards. `feature-card-grid` supplies the responsive feature layout.
- Use `part-fact-card` with `guide-mini-card` for facts inside expandable parts. Its neutral surface remains distinct from remote and obsolete part backgrounds.
- Feature-card images keep their transparent PNG backgrounds. Use `feature-card--wide-image` when an unusually wide image needs more room.
- Use `card-link` for a card that navigates. Use `safety-feature-card` for the existing safety-feature lists.
- Body size and line height, card-title size, and card padding come from the tokens at the top of `site.css`. Change those tokens before adding new page-specific values.
- Use semantic heading levels and the existing `hero`, `section-heading`, and `lede` patterns. Do not use a heading level solely to get a particular size.
- Keep hardware indicator colors, WIP badges, and optional-part styling distinct from note severity.
- Give a component an explicit modifier when it needs a different appearance. Avoid styling a shared component through a page class or page ID.
