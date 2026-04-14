import { prisma } from '@/lib/prisma'
import { AdSlotEditor } from '@/components/admin/AdSlotEditor'

export default async function AdManager() {
  const slots = await prisma.adSlot.findMany({ orderBy: { position: 'asc' } })
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">Ad Manager</h1>
      <p className="text-sm text-gray-600 mb-6">
        Paste any HTML/JS ad code (Google AdSense, Ad Manager, direct, affiliate) into a slot and toggle active. Slots that are inactive or empty render nothing.
      </p>
      <div className="space-y-4">
        {slots.map((s) => (
          <AdSlotEditor
            key={s.id}
            slot={{
              id: s.id,
              slotKey: s.slotKey,
              name: s.name,
              position: s.position,
              code: s.code,
              isActive: s.isActive,
              notes: s.notes ?? '',
            }}
          />
        ))}
      </div>
    </div>
  )
}
