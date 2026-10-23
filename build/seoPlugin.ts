import type { Plugin } from 'vite'
import { getPageMetadata, INDEXED_PATHS, renderMetadata, sitemapXml } from '../src/shared/seo/metadata'

const applyMetadata = (html: string, path: string) => html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${renderMetadata(getPageMetadata(path))}\n    <!-- seo:end -->`)

export function seoPlugin(): Plugin {
  return {
    name: 'portfolio-static-metadata',
    enforce: 'post',
    transformIndexHtml(html) { return applyMetadata(html, '/') },
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_request, response) => {
        response.setHeader('Content-Type', 'application/xml')
        response.end(sitemapXml())
      })
    },
    generateBundle(_options, bundle) {
      const page = bundle['index.html']
      if (!page || page.type !== 'asset' || typeof page.source !== 'string') { throw new Error('Missing Vite HTML output for SEO generation') }
      for (const path of INDEXED_PATHS.filter((value) => value !== '/')) {
        this.emitFile({ type: 'asset', fileName: `${path.slice(1)}/index.html`, source: applyMetadata(page.source, path) })
      }
      this.emitFile({ type: 'asset', fileName: 'spa.html', source: applyMetadata(page.source, '/projects/repository') })
      this.emitFile({ type: 'asset', fileName: '404.html', source: applyMetadata(page.source, '/not-found') })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml() })
    },
  }
}
