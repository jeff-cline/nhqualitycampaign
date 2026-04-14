import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold text-base mb-2">NHQualityCampaign</div>
          <p className="text-white/80">
            Independent, evidence-based guides on Medicare, nursing home quality, and senior care.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Topics</div>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/medicare/">Medicare</Link></li>
            <li><Link href="/nursing-homes/">Nursing Homes</Link></li>
            <li><Link href="/senior-care/aging-in-place/">Senior Care</Link></li>
            <li><Link href="/healthcare-quality/">Healthcare Quality</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/faq/">FAQ</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/about/">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/privacy/">Privacy Policy</Link></li>
            <li><Link href="/terms/">Terms of Service</Link></li>
            <li><Link href="/disclaimer/">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} NHQualityCampaign.org. Not affiliated with or endorsed by the U.S. government or the federal Medicare program. Content is educational and not medical, legal, or financial advice.
        </div>
      </div>
    </footer>
  )
}
