import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = [
    '/', '/about/', '/faq/', '/blog/', '/privacy/', '/terms/', '/disclaimer/',
    '/medicare/', '/nursing-homes/', '/senior-care/aging-in-place/',
    '/senior-care/home-health-care/', '/telehealth/medicare-telehealth-guide/',
    '/healthcare-quality/', '/senior-finance/medicare-costs/',
    '/glossary/', '/tools/', '/sitemap/',
  ]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: p === '/' ? 1.0 : 0.8 }))))
}
