'use client'
import { useState } from 'react'
import { STATES, stateSlug } from '@/data/states'

export function MedigapPremiumEstimator() {
  const [stateCode, setStateCode] = useState('CA')
  const [age, setAge] = useState(65)
  const [plan, setPlan] = useState<'G' | 'N' | 'HD-G'>('G')
  const [tobacco, setTobacco] = useState(false)

  const s = STATES.find((x) => x.code === stateCode)!
  const base = s.planGMedianMo
  const planFactor = plan === 'G' ? 1.0 : plan === 'N' ? 0.78 : 0.35
  const ageFactor = age <= 65 ? 1.0 : age <= 70 ? 1.12 : age <= 75 ? 1.28 : age <= 80 ? 1.45 : 1.6
  const tobaccoFactor = tobacco ? 1.15 : 1.0
  const estimate = Math.round(base * planFactor * ageFactor * tobaccoFactor)
  const low = Math.round(estimate * 0.82)
  const high = Math.round(estimate * 1.22)

  return (
    <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Medigap Premium Estimator</h3>
      <p className="text-sm text-gray-600 mb-4">Estimate typical Medigap Plan G, Plan N, or High-Deductible Plan G premium by state and age (2026 benchmarks).</p>
      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <label className="block">
          <span className="block text-xs font-medium text-gray-700 mb-1">State</span>
          <select className="w-full border rounded px-3 py-2" value={stateCode} onChange={(e) => setStateCode(e.target.value)}>
            {STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs font-medium text-gray-700 mb-1">Age</span>
          <input type="number" min={65} max={95} className="w-full border rounded px-3 py-2" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </label>
        <label className="block">
          <span className="block text-xs font-medium text-gray-700 mb-1">Plan</span>
          <select className="w-full border rounded px-3 py-2" value={plan} onChange={(e) => setPlan(e.target.value as any)}>
            <option value="G">Plan G</option>
            <option value="N">Plan N</option>
            <option value="HD-G">High-Deductible Plan G</option>
          </select>
        </label>
        <label className="flex items-end gap-2 text-sm">
          <input type="checkbox" checked={tobacco} onChange={(e) => setTobacco(e.target.checked)} />
          Tobacco user
        </label>
      </div>
      <div className="mt-5 grid md:grid-cols-3 gap-3">
        <Card label="Low end ($/mo)" value={low} />
        <Card label="Typical ($/mo)" value={estimate} highlight />
        <Card label="High end ($/mo)" value={high} />
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Estimate only. Actual quotes vary by carrier, ZIP, underwriting outside OEP, and annual rate filings. Get real quotes from 3+ carriers in your state before buying.
      </p>
      <p className="mt-2 text-xs text-gray-500">
        See <a className="text-brand-teal underline" href={`/medicare/${stateSlug(s)}/`}>{s.name} Medicare guide</a> for state-specific rules.
      </p>
    </div>
  )
}

function Card({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`bg-white border-2 rounded p-3 ${highlight ? 'border-brand-teal' : 'border-gray-200'}`}>
      <div className="text-xs text-gray-600">{label}</div>
      <div className={`text-2xl font-bold ${highlight ? 'text-brand-teal' : 'text-brand-navy'}`}>${value.toLocaleString()}</div>
    </div>
  )
}
