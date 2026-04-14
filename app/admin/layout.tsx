import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'

const ADMIN_NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/pages', label: 'Pages' },
  { href: '/admin/ads', label: 'Ad Manager' },
  { href: '/admin/keywords', label: 'Keyword Research' },
  { href: '/admin/seo', label: 'SEO Tools' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/settings', label: 'Settings' },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-60 bg-brand-navy text-white p-4 flex flex-col">
        <div className="font-bold text-lg mb-6">NHQC Admin</div>
        <nav className="flex-1 space-y-1 text-sm">
          {ADMIN_NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block px-3 py-2 rounded hover:bg-white/10">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="text-xs text-white/60 mt-4">
          Signed in as<br />
          <span className="text-white">{session.user?.email}</span>
        </div>
        <Link href="/api/auth/signout" className="mt-3 text-xs text-white/70 hover:text-white">
          Sign out
        </Link>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  )
}

export const metadata = {
  robots: { index: false, follow: false },
}
