import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = [
    '/tools/',
    '/tools/medicare-cost-calculator/',
    '/tools/medigap-premium-estimator/',
    '/tools/irmaa-calculator/',
    '/tools/enrollment-period-finder/',
    '/tools/nursing-home-cost-calculator/',
    '/data/',
  ]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7, changefreq: 'yearly' }))))
}
