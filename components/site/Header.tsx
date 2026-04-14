import Link from 'next/link'

const NAV = [
  { label: 'Medicare', href: '/medicare/' },
  { label: 'Nursing Homes', href: '/nursing-homes/' },
  { label: 'Senior Care', href: '/senior-care/aging-in-place/' },
  { label: 'Telehealth', href: '/telehealth/medicare-telehealth-guide/' },
  { label: 'Quality', href: '/healthcare-quality/' },
  { label: 'Finance', href: '/senior-finance/medicare-costs/' },
  { label: 'FAQ', href: '/faq/' },
]

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-brand-navy text-white font-bold text-sm">
            NH
          </span>
          <span className="font-semibold text-brand-navy text-lg">NHQualityCampaign</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm font-medium text-brand-ink">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-teal">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/medicare/supplement-plans/" className="btn-primary hidden md:inline-block text-sm">
          Compare Medigap
        </Link>
      </div>
    </header>
  )
}
