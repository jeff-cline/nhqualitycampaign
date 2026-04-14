import { prisma } from '@/lib/prisma'

type Props = { slotKey: string; className?: string }

export async function AdSlot({ slotKey, className }: Props) {
  const slot = await prisma.adSlot.findUnique({ where: { slotKey } }).catch(() => null)
  if (!slot || !slot.isActive || !slot.code?.trim()) return null
  return (
    <div className={className} data-ad-slot={slotKey}>
      <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Advertisement</div>
      <div dangerouslySetInnerHTML={{ __html: slot.code }} />
    </div>
  )
}
