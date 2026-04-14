import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const [pageCount, draftCount, adActiveCount, adTotal, recent] = await Promise.all([
    prisma.page.count({ where: { status: 'PUBLISHED' } }),
    prisma.page.count({ where: { status: 'DRAFT' } }),
    prisma.adSlot.count({ where: { isActive: true } }),
    prisma.adSlot.count(),
    prisma.page.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      select: { path: true, title: true, status: true, updatedAt: true },
    }),
  ])

  const stat = (n: number | string, l: string) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="text-3xl font-bold text-brand-navy">{n}</div>
      <div className="text-sm text-gray-600">{l}</div>
    </div>
  )

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {stat(pageCount, 'Published pages')}
        {stat(draftCount, 'Drafts')}
        {stat(`${adActiveCount}/${adTotal}`, 'Active ad slots')}
        {stat(pageCount + draftCount, 'Total pages')}
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-brand-navy mb-3">Recent pages</h2>
        <ul className="bg-white border border-gray-200 rounded-lg divide-y">
          {recent.map((p) => (
            <li key={p.path} className="p-3 flex justify-between">
              <Link className="text-brand-teal hover:underline" href={`/admin/pages/edit?path=${encodeURIComponent(p.path)}`}>
                {p.title}
              </Link>
              <span className="text-xs text-gray-500">{p.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-3">
        <Link className="btn-primary" href="/admin/pages/new">+ New Page</Link>
        <Link className="btn-primary" href="/admin/ads">Manage Ads</Link>
      </div>
    </div>
  )
}
