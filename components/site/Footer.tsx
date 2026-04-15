import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-5 text-sm">
        <div className="md:col-span-2">
          <div className="font-semibold text-base mb-2">NHQualityCampaign</div>
          <p className="text-white/80">
            Independent, evidence-based guides on Medicare, nursing home quality, and senior care.
          </p>
          <div className="mt-4 text-xs">
            <div className="text-white/60 uppercase tracking-wide font-semibold mb-1">SEO</div>
            <ul className="space-y-1 text-white/80">
              <li><Link href="/sitemap-index.xml">Sitemap Index (XML)</Link></li>
              <li><Link href="/sitemap/">Site Directory (HTML)</Link></li>
              <li><Link href="/robots.txt">robots.txt</Link></li>
            </ul>
            <div className="text-white/60 uppercase tracking-wide font-semibold mt-3 mb-1">AEO (AI Engines)</div>
            <ul className="space-y-1 text-white/80">
              <li><Link href="/llms.txt">llms.txt</Link></li>
              <li><Link href="/llms-full.txt">llms-full.txt</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Topics</div>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/medicare/">Medicare</Link></li>
            <li><Link href="/medicare/carriers/">Carriers</Link></li>
            <li><Link href="/medicare/coverage/">What Medicare Covers</Link></li>
            <li><Link href="/nursing-homes/">Nursing Homes</Link></li>
            <li><Link href="/senior-care/aging-in-place/">Senior Care</Link></li>
            <li><Link href="/healthcare-quality/">Healthcare Quality</Link></li>
            <li><Link href="/telehealth/medicare-telehealth-guide/">Telehealth</Link></li>
            <li><Link href="/medicare/part-d/">Part D</Link></li>
            <li><Link href="/medicaid/">Medicaid LTC</Link></li>
            <li><Link href="/life-events/">Life Events</Link></li>
            <li><Link href="/best/">Best Of Rankings</Link></li>
            <li><Link href="/senior-finance/medicare-costs/">Senior Finance</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 text-white/80">
            <li><Link href="/tools/">Calculators</Link></li>
            <li><Link href="/data/">Data Hub</Link></li>
            <li><Link href="/glossary/">Glossary</Link></li>
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
