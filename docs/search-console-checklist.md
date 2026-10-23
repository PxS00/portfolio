# Search Console after publication

Run this check only after the release is merged into `main` and the production deployment has completed. A draft PR or preview deployment is not a production indexation check.

1. Open Google Search Console with the account that owns the site. Use or verify the URL-prefix property `https://lucas-rossoni.vercel.app/`. The account owner must complete any ownership verification that cannot be performed with existing access.
2. Submit `https://lucas-rossoni.vercel.app/sitemap.xml`. It is generated from the curated routes during the build.
3. Inspect the home page, `/projects/lavanda-flow`, `/projects/energi-ai-g9-br-team-09`, and `/projects/ceu-de-lavanda-catalog`. Confirm that the live page can be fetched and that the declared canonical matches that page's production URL.
4. Request indexing where appropriate. A submitted request does not confirm that a page is indexed.
5. Recheck the Pages report after Google has processed the URLs. Record the inspection date and actual status; do not promise indexing or ranking.
6. Check a shared link in LinkedIn Post Inspector. The HTML contains title, description, canonical URL and a 1200 × 630 cover before JavaScript runs. Cached previews may require a refresh.
7. Confirm that the production response has no `X-Robots-Tag: noindex` header. Run a production Lighthouse audit using `.lighthouserc.json`, which includes the indexing audit.

## Lighthouse on pull requests

Vercel deliberately adds `X-Robots-Tag: noindex` to preview deployments. The PR workflow uses `.lighthouserc.preview.cjs`, inheriting all thresholds from the base configuration and excluding only `is-crawlable` from collection. This keeps the preview out of search results while checking the remaining SEO audits. Built HTML robots directives are still checked by `scripts/verify-seo.mjs`.

The failed run `39878738568` reported performance 99, accessibility 100, best practices 100 and SEO 69. Its only failed SEO audit was `is-crawlable`, citing the preview response header. The complete production configuration remains unchanged.

## Scope

- The build produces route-specific HTML metadata; the React application content remains client-rendered.
- English is the initial document language. The language switch updates visible content and metadata to Portuguese in the browser. Separate language URLs and `hreflang` are not implemented.
- Only curated project pages are included in the sitemap. Other public repositories remain browsable with `noindex` metadata.
- No Search Console ownership, production deployment, indexing request or indexing result is implied by local tests.
