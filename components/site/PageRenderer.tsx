import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Breadcrumb } from './Breadcrumb'
import { QuickAnswer } from './QuickAnswer'
import { FAQBlock } from './FAQBlock'
import { RelatedArticles } from './RelatedArticles'
import { AdSlot } from './AdSlot'
import { articleSchema, jsonLd } from '@/lib/schema'
import { formatDate, CLUSTER_LABELS } from '@/lib/utils'
import { MedicareQuoteWidget } from './MedicareQuoteWidget'

function buildTrail(path: string, title: string) {
  if (path === '/') return []
  const segments = path.split('/').filter(Boolean)
  const trail: { name: string; href: string }[] = [{ name: 'Home', href: '/' }]
  let cumulative = ''
  for (let i = 0; i < segments.length; i++) {
    cumulative += `/${segments[i]}`
    const isLast = i === segments.length - 1
    const name = isLast ? title : segments[i].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    trail.push({ name, href: `${cumulative}/` })
  }
  return trail
}

function splitContentForAds(html: string): [string, string, string] {
  const parts = html.split(/<h2[\s>]/i)
  if (parts.length < 4) return [html, '', '']
  const mid = Math.floor(parts.length / 2)
  const first = parts.slice(0, mid).join('<h2 ')
  const second = '<h2 ' + parts.slice(mid, parts.length - 1).join('<h2 ')
  const third = '<h2 ' + parts[parts.length - 1]
  return [first, second, third]
}

export async function PageRenderer({ path }: { path: string }) {
  const page = await prisma.page.findFirst({
    where: { path, status: 'PUBLISHED' },
    include: {
      faq: { orderBy: { sortOrder: 'asc' } },
      author: true,
    },
  })
  if (!page) notFound()

  const trail = buildTrail(page.path, page.title)
  const [c1, c2, c3] = splitContentForAds(page.content)
  const isMedicareCluster = page.cluster === 'A_MEDICARE'
  const showQuote = isMedicareCluster && page.pageType !== 'LEGAL'

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">
          {CLUSTER_LABELS[page.cluster]}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{page.title}</h1>
        <div className="text-sm text-gray-500 mt-2">
          {page.author?.name ?? 'NHQC Editorial Team'} · Last updated {formatDate(page.updatedAt)}
        </div>

        <QuickAnswer text={page.quickAnswer} />

        <div className="prose-article" dangerouslySetInnerHTML={{ __html: c1 }} />
        {c2 && <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />}
        {c2 && <div className="prose-article" dangerouslySetInnerHTML={{ __html: c2 }} />}
        {c3 && <AdSlot slotKey="SLOT_IN_CONTENT_2" className="my-6 text-center" />}
        {c3 && <div className="prose-article" dangerouslySetInnerHTML={{ __html: c3 }} />}

        {showQuote && <MedicareQuoteWidget />}

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={page.faq} />
        <AdSlot slotKey="SLOT_AFTER_ARTICLE" className="my-6 text-center" />
        <RelatedArticles cluster={page.cluster} excludePath={page.path} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              articleSchema({
                path: page.path,
                title: page.title,
                metaDesc: page.metaDesc,
                quickAnswer: page.quickAnswer,
                pageType: page.pageType,
                publishedAt: page.publishedAt,
                updatedAt: page.updatedAt,
                author: page.author,
                ogImage: page.ogImage,
              })
            ),
          }}
        />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
        <div className="sticky top-20">
          <AdSlot slotKey="SLOT_SIDEBAR_STICKY" className="text-center" />
        </div>
      </aside>
    </article>
  )
}

export async function generatePageMetadata(path: string) {
  const page = await prisma.page
    .findFirst({
      where: { path, status: 'PUBLISHED' },
      select: { title: true, metaTitle: true, metaDesc: true, canonicalUrl: true, ogImage: true },
    })
    .catch(() => null)
  if (!page) return {}
  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDesc ?? undefined,
    alternates: { canonical: page.canonicalUrl ?? path },
    openGraph: {
      title: page.metaTitle ?? page.title,
      description: page.metaDesc ?? undefined,
      url: path,
      images: page.ogImage ? [page.ogImage] : undefined,
    },
  }
}
