export function QuickAnswer({ text }: { text?: string | null }) {
  if (!text) return null
  return (
    <aside className="my-6 rounded-lg border-l-4 border-brand-navy bg-brand-sky p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy mb-1">
        Quick Answer
      </div>
      <p className="text-brand-ink leading-relaxed">{text}</p>
    </aside>
  )
}
