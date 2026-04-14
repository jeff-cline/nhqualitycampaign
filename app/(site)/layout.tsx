import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { AdSlot } from '@/components/site/AdSlot'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <AdSlot slotKey="SLOT_HEADER_BANNER" className="bg-brand-mist border-b border-gray-200 py-2 text-center" />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <AdSlot slotKey="SLOT_FOOTER_BANNER" className="bg-brand-mist border-t border-gray-200 py-2 text-center" />
      <Footer />
      <AdSlot slotKey="SLOT_MOBILE_STICKY" className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden text-center py-1" />
    </>
  )
}
