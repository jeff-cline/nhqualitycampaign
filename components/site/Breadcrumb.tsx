import Link from 'next/link'
import { breadcrumbSchema, jsonLd } from '@/lib/schema'
import { SITE_URL } from '@/lib/utils'

export function Breadcrumb({ trail }: { trail: { name: string; href: string }[] }) {
  if (!trail?.length) return null
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="flex flex-wrap gap-1 items-center">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {i < trail.length - 1 ? (
              <Link href={t.href} className="hover:text-brand-teal">{t.name}</Link>
            ) : (
              <span className="text-brand-ink">{t.name}</span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(trail.map((t) => ({ name: t.name, url: `${SITE_URL}${t.href}` })))),
        }}
      />
    </nav>
  )
}
