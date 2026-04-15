import { SITE_URL } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export async function GET() {
  const now = new Date().toISOString()
  const children = [
    'sitemap-core.xml',
    'sitemap-medicare.xml',
    'sitemap-states.xml',
    'sitemap-carriers.xml',
    'sitemap-conditions.xml',
    'sitemap-glossary.xml',
    'sitemap-tools.xml',
    'sitemap.xml',
  ]
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children.map((c) => `  <sitemap><loc>${SITE_URL}/${c}</loc><lastmod>${now}</lastmod></sitemap>`).join('\n')}
</sitemapindex>`
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
