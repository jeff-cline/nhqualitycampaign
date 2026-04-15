import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { PART_D } from '@/data/partD'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = ['/medicare/part-d/', ...PART_D.map((t) => `/medicare/part-d/${t.slug}/`)]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
