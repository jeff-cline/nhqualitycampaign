import Link from 'next/link'
import { SITE_URL } from '@/lib/utils'

export default function SeoTools() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">SEO Tools</h1>
      <ul className="space-y-2 text-sm">
        <li><a className="text-brand-teal underline" href="/sitemap.xml" target="_blank" rel="noreferrer">View /sitemap.xml</a></li>
        <li><a className="text-brand-teal underline" href="/robots.txt" target="_blank" rel="noreferrer">View /robots.txt</a></li>
        <li><a className="text-brand-teal underline" href="/llms.txt" target="_blank" rel="noreferrer">View /llms.txt</a></li>
        <li>
          Validate schema:{' '}
          <a className="text-brand-teal underline" target="_blank" rel="noreferrer"
             href={`https://search.google.com/test/rich-results?url=${encodeURIComponent(SITE_URL)}`}>
            Google Rich Results Test
          </a>
        </li>
        <li><Link className="text-brand-teal underline" href="/admin/pages">Manage pages</Link></li>
      </ul>
    </div>
  )
}
