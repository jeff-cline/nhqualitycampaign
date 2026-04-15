import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = [
    '/medicare/', '/medicare/supplement-plans/', '/medicare/advantage/',
    '/medicare/carriers/', '/medicare/coverage/',
    '/compare/medicare-plan-g-vs-plan-n/', '/compare/medicare-plan-g-vs-plan-f/',
    '/compare/medicare-advantage-vs-medigap/', '/compare/original-medicare-vs-medicare-advantage/',
    '/compare/nursing-home-vs-assisted-living/', '/compare/home-health-vs-nursing-home/',
    '/guides/medicare-enrollment-guide/', '/guides/nursing-home-checklist/',
    '/guides/dementia-care-guide/', '/guides/long-term-care-planning/',
    '/blog/medicare-changes-2026/',
  ]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.8 }))))
}
