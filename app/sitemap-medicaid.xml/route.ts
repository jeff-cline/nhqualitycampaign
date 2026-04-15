import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { MEDICAID_LTC } from '@/data/medicaidLtc'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = ['/medicaid/', ...MEDICAID_LTC.map((t) => `/medicaid/${t.slug}/`)]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
