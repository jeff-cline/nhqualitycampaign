import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export default async function PagesList() {
  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: 'desc' },
    select: { id: true, path: true, title: true, status: true, pageType: true, cluster: true, updatedAt: true },
  })
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-brand-navy">Pages</h1>
        <Link className="btn-primary" href="/admin/pages/new">+ New Page</Link>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Path</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Cluster</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <Link href={`/admin/pages/edit?path=${encodeURIComponent(p.path)}`} className="text-brand-teal hover:underline">
                    {p.title}
                  </Link>
                </td>
                <td className="p-3 text-gray-600">{p.path}</td>
                <td className="p-3 text-gray-600">{p.pageType}</td>
                <td className="p-3 text-gray-600">{p.cluster}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${p.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="p-3 text-gray-600">{formatDate(p.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
