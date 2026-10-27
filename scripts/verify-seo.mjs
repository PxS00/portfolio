import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const origin = 'https://lucas-rossoni.vercel.app'
const paths = [
  '/',
  '/projects',
  '/contact',
  '/projects/lavanda-flow',
  '/projects/energi-ai-g9-br-team-09',
  '/projects/ceu-de-lavanda-catalog',
  '/projects/Luma',
  '/projects/alura-corporate-agent',
]
const outputFile = (path) => `dist/${path === '/' ? '' : `${path.slice(1)}/`}index.html`

test('every indexed page has unique HTML metadata before JavaScript executes', async () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const path of paths) {
    const html = await readFile(outputFile(path), 'utf8')
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    const description = html.match(/name="description" content="([^"]+)"/)?.[1]
    assert.ok(title && description, path)
    titles.add(title)
    descriptions.add(description)
    assert.equal((html.match(/<title>/g) ?? []).length, 1, path)
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, path)
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`), path)
    assert.ok(html.includes(`property="og:url" content="${origin}${path}"`), path)
    assert.ok(html.includes('name="robots" content="index, follow"'), path)
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), path)
  }
  assert.equal(titles.size, paths.length)
  assert.equal(descriptions.size, paths.length)
})

test('sitemap lists exactly the published canonical pages', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8')
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(new Set(locations), new Set(paths.map((path) => `${origin}${path}`)))
  assert.equal(locations.length, paths.length)
})

test('not-found and non-curated repository shells are not indexed', async () => {
  for (const file of ['404.html', 'spa.html']) {
    assert.ok(
      (await readFile(`dist/${file}`, 'utf8')).includes('name="robots" content="noindex, follow"'),
    )
  }
})

test('sharing cover exists at its advertised 1200 by 630 resolution', async () => {
  const image = await readFile('dist/images/social-cover.png')
  assert.equal(image.subarray(1, 4).toString(), 'PNG')
  assert.equal(image.readUInt32BE(16), 1200)
  assert.equal(image.readUInt32BE(20), 630)
})

test('Vercel rewrites preserve static metadata for every deep link', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'))
  for (const path of paths.filter((value) => value !== '/')) {
    const rewrite = config.rewrites.find((rule) => rule.source === path)
    assert.equal(rewrite?.destination, `/${outputFile(path).slice(5)}`)
    await readFile(`dist${rewrite.destination}`)
  }
})

test('project screenshot files are included in the production output', async () => {
  for (const name of [
    'ceu-de-lavanda',
    'energiai',
    'energiai-result',
    'energiai-analysis',
    'energiai-dashboard',
    'energiai-history',
    'lavanda-flow-inventory',
    'lavanda-flow-item',
    'ceu-de-lavanda-collection',
    'ceu-de-lavanda-product',
    'lavanda-flow-dashboard',
    'lavanda-flow-batches',
    'lavanda-flow-formulas',
    'energiai-architecture',
    'rag-oci-1',
    'rag-oci-2',
  ]) {
    const image = await readFile(`dist/images/projects/${name}.jpg`)
    assert.equal(image.readUInt16BE(0), 0xffd8, name)
    assert.ok(image.length > 1000, name)
  }
})
