import { SITE_URL } from './utils'

export type Entry = { path: string; priority?: number; changefreq?: string; lastmod?: string }

export function xmlUrlset(entries: Entry[]): string {
  const now = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.path}</loc>
    <lastmod>${e.lastmod ?? now}</lastmod>
    <changefreq>${e.changefreq ?? 'monthly'}</changefreq>
    <priority>${e.priority ?? 0.7}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`
}

export function xmlResponse(body: string) {
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
