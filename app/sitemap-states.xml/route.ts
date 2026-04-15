import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { STATES, stateSlug } from '@/data/states'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths: string[] = []
  for (const s of STATES) {
    const sl = stateSlug(s)
    paths.push(`/medicare/${sl}/`, `/nursing-homes/${sl}/`, `/senior-care/${sl}/assisted-living/`)
  }
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
