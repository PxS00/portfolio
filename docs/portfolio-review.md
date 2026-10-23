# Portfolio review — 2026-10-22

## Browser review

The responsive review used emulated viewport widths, not physical mobile devices.

- 390 px: portrait loading, translated hero actions, project anchor, navigation menu open/close, Escape key and focus return.
- 360 px: home headings and cards, catalogue detail, contact page and menu route changes. No horizontal document overflow or clipped home headings was observed. The contact email originally exceeded its card; wrapping was corrected and rechecked. Contact actions now have a 44 px minimum height.
- 768 px: home layout, headings and horizontal overflow.
- 1280 px: Lavanda Flow detail, two-image gallery, canonical uniqueness and contact action navigation.
- Metadata was checked after client navigation and language changes. Static metadata is verified separately against the built HTML by `pnpm test:seo`.
- Reduced-motion preferences now disable animation and the typewriter delay.

## Project screenshot provenance

- Catalogue: actual public homepage at `https://ceu-de-lavanda.pages.dev/`.
- EnergiAI: actual public introduction page at `https://energiai.vercel.app/`; no private user history was accessed.
- Lavanda Flow: local checkout of `main` at `0a2cf723bfd06b43c1ecb3ba35a7953af8e8eb51` (v0.8.1). GitHub returned no open PRs during the check; the most recent update was merged PR #285. The app and a separate PostgreSQL database were started in the `portfolio-lavanda-demo` Compose project, with the app bound only to `127.0.0.1:8086`.
- Lavanda Flow images show a fictional item and receipt created through the application UI: `Essência de lavanda · demonstração`, batch `DEMO-LAV-001`, 2500 mL. No company database or production environment was used. Captions identify the demonstration data.

## Expanded galleries — 2026-10-22

- Added six screenshots: catalogue collection and fragrance detail; Lavanda Flow dashboard, batch/movement history and production formula list; EnergiAI public architecture explanation. Ten screenshots are now included across these three projects.
- All images were captured from the rendered applications. Catalogue product photographs and commercial details are still pending and remain visibly identified as such.
- The isolated Lavanda Flow demo now also includes a fictional 100 mL FEFO withdrawal and a fictional finished product/formula. The formula demonstrates the interface only and is not a commercial perfume recipe. No production execution was claimed or simulated in the screenshots.
- EnergiAI's analysis route remained on “Carregando sessão” during this capture. The new image shows the public explanation of the architecture, not an authenticated prediction or result.
- Featured cards show up to two additional thumbnails and a screenshot count. Detail galleries use two columns on desktop and one on mobile, with full-size image links and bilingual captions.

## Publication follow-up

Production deployment, platform routing, externally cached link previews, real-device testing and Google Search Console indexation still need to be checked after release. Follow `search-console-checklist.md`. Local build checks do not prove that Google has indexed a page.
