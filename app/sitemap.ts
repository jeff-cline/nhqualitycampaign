import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { SITE_URL } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await prisma.page
    .findMany({
      where: { status: 'PUBLISHED' },
      select: { path: true, updatedAt: true, publishedAt: true, pageType: true },
    })
    .catch(() => [])
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.updatedAt ?? p.publishedAt ?? new Date(),
    changeFrequency: p.pageType === 'BLOG' ? 'weekly' : 'monthly',
    priority: p.path === '/' ? 1.0 : 0.7,
  }))
}
