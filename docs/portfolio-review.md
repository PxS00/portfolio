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

## Publication follow-up

Production deployment, platform routing, externally cached link previews, real-device testing and Google Search Console indexation still need to be checked after release. Follow `search-console-checklist.md`. Local build checks do not prove that Google has indexed a page.
