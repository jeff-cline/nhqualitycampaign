'use client'
import { useState } from 'react'

export function MedicareCostCalc() {
  const [partBPrem, setPartBPrem] = useState(174.70)
  const [medigapPrem, setMedigapPrem] = useState(140)
  const [partDPrem, setPartDPrem] = useState(40)
  const [maPrem, setMaPrem] = useState(0)
  const [expectedOutOfPocket, setExp] = useState(1500)

  const origAnnual = (partBPrem + medigapPrem + partDPrem) * 12 + 240
  const maAnnual = (partBPrem + maPrem) * 12 + expectedOutOfPocket
  const diff = origAnnual - maAnnual

  return (
    <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Medicare Cost Calculator</h3>
      <p className="text-sm text-gray-600 mb-4">Estimate your total annual Medicare cost comparing Original Medicare + Medigap + Part D vs Medicare Advantage.</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <Input label="Part B premium (monthly)" value={partBPrem} onChange={setPartBPrem} />
        <Input label="Medigap premium (monthly)" value={medigapPrem} onChange={setMedigapPrem} />
        <Input label="Part D premium (monthly)" value={partDPrem} onChange={setPartDPrem} />
        <Input label="MA premium (monthly, often $0)" value={maPrem} onChange={setMaPrem} />
        <Input label="Expected MA out-of-pocket / year" value={expectedOutOfPocket} onChange={setExp} />
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-3">
        <Card label="Original + Medigap + D (annual)" value={origAnnual} color="brand-navy" />
        <Card label="Medicare Advantage (annual)" value={maAnnual} color="brand-teal" />
      </div>
      <p className="mt-3 text-sm text-gray-700">
        Difference: <strong>${Math.abs(diff).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> — {diff > 0 ? 'Medicare Advantage is lower' : 'Original Medicare + Medigap is lower'}.
      </p>
      <p className="mt-2 text-xs text-gray-500">Estimate only. Actual cost depends on utilization, specific plan, and drug list.</p>
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

function Card({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className={`bg-white border-2 border-${color} rounded p-3`}>
      <div className="text-xs text-gray-600">{label}</div>
      <div className={`text-2xl font-bold text-${color}`}>${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
    </div>
  )
}
