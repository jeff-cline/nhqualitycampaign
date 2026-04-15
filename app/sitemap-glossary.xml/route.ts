import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { GLOSSARY } from '@/data/glossary'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = GLOSSARY.map((t) => `/glossary/${t.slug}/`)
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.5, changefreq: 'yearly' }))))
}
