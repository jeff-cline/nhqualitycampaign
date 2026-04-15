'use client'
import { useState } from 'react'

type Bracket = { single: number; joint: number; partB: number; partD: number }
const BRACKETS: Bracket[] = [
  { single: 103000, joint: 206000, partB: 0, partD: 0 },
  { single: 129000, joint: 258000, partB: 69.9, partD: 12.9 },
  { single: 161000, joint: 322000, partB: 174.7, partD: 33.3 },
  { single: 193000, joint: 386000, partB: 279.5, partD: 53.8 },
  { single: 500000, joint: 750000, partB: 384.3, partD: 74.2 },
  { single: Infinity, joint: Infinity, partB: 419.3, partD: 81.0 },
]

export function IrmaaCalc() {
  const [magi, setMagi] = useState(120000)
  const [status, setStatus] = useState<'single' | 'joint'>('single')
  const b = BRACKETS.find((br) => magi <= (status === 'single' ? br.single : br.joint)) ?? BRACKETS[BRACKETS.length - 1]
  const monthly = b.partB + b.partD
  const annual = monthly * 12
  return (
    <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">IRMAA Surcharge Estimator</h3>
      <p className="text-sm text-gray-600 mb-4">Estimate your Income-Related Monthly Adjustment Amount on Parts B and D based on your MAGI (from 2 years ago).</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <label className="block">
          <span className="block text-xs font-medium text-gray-700 mb-1">Filing status</span>
          <select className="w-full border rounded px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value as 'single' | 'joint')}>
            <option value="single">Single</option>
            <option value="joint">Married filing jointly</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-xs font-medium text-gray-700 mb-1">MAGI (2-year-lookback)</span>
          <input type="number" className="w-full border rounded px-3 py-2" value={magi} onChange={(e) => setMagi(Number(e.target.value))} />
        </label>
      </div>
      <div className="mt-5 grid md:grid-cols-3 gap-3">
        <Card label="Part B surcharge (monthly)" value={b.partB} />
        <Card label="Part D surcharge (monthly)" value={b.partD} />
        <Card label="Total annual IRMAA" value={annual} highlight />
      </div>
      <p className="mt-3 text-xs text-gray-500">2024 thresholds shown. IRMAA is based on MAGI from your tax return 2 years prior. Appeal with Form SSA-44 for qualifying life-changing events.</p>
    </div>
  )
}

function Card({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`bg-white border-2 rounded p-3 ${highlight ? 'border-brand-teal' : 'border-gray-200'}`}>
      <div className="text-xs text-gray-600">{label}</div>
      <div className={`text-2xl font-bold ${highlight ? 'text-brand-teal' : 'text-brand-navy'}`}>${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
    </div>
  )
}
