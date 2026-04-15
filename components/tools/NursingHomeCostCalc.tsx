'use client'
import { useState } from 'react'

export function NursingHomeCostCalc() {
  const [monthly, setMonthly] = useState(9000)
  const [years, setYears] = useState(3)
  const [savings, setSavings] = useState(200000)
  const [ssiMonthly, setSsiMonthly] = useState(2200)
  const [inflation, setInflation] = useState(4)

  let bal = savings
  const rows: { year: number; cost: number; balance: number }[] = []
  let costMonthly = monthly
  for (let y = 1; y <= years; y++) {
    const annualCost = costMonthly * 12
    const ssiAnnual = ssiMonthly * 12
    const netCost = annualCost - ssiAnnual
    bal -= netCost
    rows.push({ year: y, cost: annualCost, balance: bal })
    costMonthly *= 1 + inflation / 100
  }
  const depleted = rows.findIndex((r) => r.balance < 0)
  const depleteYear = depleted >= 0 ? rows[depleted].year : null

  return (
    <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Nursing Home Cost &amp; Medicaid Burn-Down</h3>
      <p className="text-sm text-gray-600 mb-4">Project how long your savings last paying for long-term care, and when Medicaid planning becomes urgent.</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <Input label="Nursing home monthly cost" value={monthly} onChange={setMonthly} />
        <Input label="Years to project" value={years} onChange={setYears} />
        <Input label="Starting savings" value={savings} onChange={setSavings} />
        <Input label="Social Security / pension (monthly)" value={ssiMonthly} onChange={setSsiMonthly} />
        <Input label="Annual cost inflation (%)" value={inflation} onChange={setInflation} />
      </div>
      <table className="w-full border border-gray-200 text-sm mt-5">
        <thead className="bg-brand-mist"><tr><th className="p-2 text-left">Year</th><th className="p-2 text-right">Annual cost</th><th className="p-2 text-right">Remaining savings</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.year} className="border-t">
              <td className="p-2">{r.year}</td>
              <td className="p-2 text-right">${Math.round(r.cost).toLocaleString()}</td>
              <td className={`p-2 text-right ${r.balance < 0 ? 'text-red-600 font-semibold' : ''}`}>${Math.round(r.balance).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm">
        {depleteYear
          ? <>Savings deplete in <strong>year {depleteYear}</strong>. Start Medicaid planning (asset protection, 5-year look-back) well before this point.</>
          : `Savings last the full ${years}-year projection at current inputs.`}
      </p>
      <p className="mt-2 text-xs text-gray-500">Simplified projection. Real planning should include inflation, spousal impoverishment rules, home equity, and state Medicaid thresholds — consult an elder-law attorney.</p>
    </div>
  )
}

function Input({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-700 mb-1">{label}</span>
      <input type="number" className="w-full border rounded px-3 py-2" value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  )
}
