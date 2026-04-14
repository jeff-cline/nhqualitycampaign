import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export async function RelatedArticles({ cluster, excludePath }: { cluster: string; excludePath: string }) {
  const items = await prisma.page
    .findMany({
      where: {
        status: 'PUBLISHED',
        cluster: cluster as any,
        NOT: { path: excludePath },
      },
      orderBy: { publishedAt: 'desc' },
      take: 4,
      select: { path: true, title: true, metaDesc: true },
    })
    .catch(() => [])
  if (!items.length) return null
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-brand-navy mb-4">Related Articles</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((a) => (
          <Link
            key={a.path}
            href={a.path}
            className="block border border-gray-200 p-4 rounded-lg hover:border-brand-teal hover:shadow-sm"
          >
            <div className="font-semibold text-brand-navy">{a.title}</div>
            {a.metaDesc && <div className="text-sm text-gray-600 mt-1">{a.metaDesc}</div>}
          </Link>
        ))}
      </div>
    </section>
  )
}
