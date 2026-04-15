export function BarChart({
  title,
  data,
  unit = '',
  maxShown = 15,
}: {
  title: string
  data: { label: string; value: number }[]
  unit?: string
  maxShown?: number
}) {
  const sorted = [...data].sort((a, b) => b.value - a.value).slice(0, maxShown)
  const max = Math.max(...sorted.map((d) => d.value))
  return (
    <section className="my-8">
      <h3 className="text-lg font-semibold text-brand-navy mb-3">{title}</h3>
      <div className="bg-white border border-gray-200 rounded p-4">
        {sorted.map((d) => (
          <div key={d.label} className="flex items-center text-sm my-1">
            <div className="w-36 pr-2 text-gray-700">{d.label}</div>
            <div className="flex-1 bg-gray-100 rounded h-5 relative">
              <div className="bg-brand-teal h-5 rounded" style={{ width: `${(d.value / max) * 100}%` }} />
            </div>
            <div className="w-24 pl-2 text-right font-medium text-brand-navy">
              {d.value.toLocaleString()}{unit}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
