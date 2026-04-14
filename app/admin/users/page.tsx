import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export default async function UsersPage() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'asc' } })
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">Users</h1>
      <table className="w-full bg-white border text-sm">
        <thead className="bg-gray-50">
          <tr><th className="text-left p-3">Email</th><th className="text-left p-3">Name</th><th className="text-left p-3">Role</th><th className="text-left p-3">Created</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">{formatDate(u.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-gray-500">Add additional users via a SUPER_ADMIN seed script or direct DB insert (password hashed with bcrypt).</p>
    </div>
  )
}
