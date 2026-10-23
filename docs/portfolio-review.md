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

## EnergiAI local workflow — 2026-10-22

- After the owner confirmed that the OCI database had been deleted, a local checkout of `develop` at `1a5b92f80a2ab6172687b99d13880ee501b5e7fe` was started without changing EnergiAI source files.
- The isolated `portfolio-energi-demo` Compose project runs React/Vite, Spring Boot's `local` H2 profile and FastAPI with the repository's `modelo_energetico_v2.joblib` artifact (`energy-classifier-v2`). Frontend and backend ports are bound only to loopback; inference has no published host port. H2 data is temporary and disappears when the backend process stops.
- A fictional local account and three analyses were created through the browser. Inputs (kWh / equipment / property / peak use / hours): `420 / 10 / CASA / true / 8`, `160 / 4 / APARTAMENTO / false / 2`, `280 / 8 / CASA / false / 4`.
- The first result displayed “Modelo preditivo”, inefficient classification, index 83/100, probability 66% and reference cost R$315.00. The other two were classified efficient. Dashboard aggregates showed three analyses, R$215.00 mean cost and 286.67 kWh mean consumption.
- Added questionnaire, result, history and dashboard captures (six EnergiAI images total). Captions identify local execution and fictional inputs. The case study now explains the deactivated public database and links to the public introduction, with local instructions for the full demonstration.
- These are actual application/model outputs for fictional examples, not evidence of real customer savings or model performance on real-world data.

## Publication follow-up

Production deployment, platform routing, externally cached link previews, real-device testing and Google Search Console indexation still need to be checked after release. Follow `search-console-checklist.md`. Local build checks do not prove that Google has indexed a page.
