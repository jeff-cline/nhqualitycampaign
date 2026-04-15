'use client'
import { useState } from 'react'

export function EnrollmentPeriodFinder() {
  const [dob, setDob] = useState('')
  if (!dob) {
    return (
      <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
        <h3 className="text-xl font-bold text-brand-navy mb-4">Medicare Enrollment Period Finder</h3>
        <p className="text-sm text-gray-600 mb-4">Enter your date of birth to see your Initial Enrollment Period dates, Medigap Open Enrollment, and key deadlines.</p>
        <label className="block max-w-xs">
          <span className="block text-xs font-medium text-gray-700 mb-1">Date of birth</span>
          <input type="date" className="w-full border rounded px-3 py-2" onChange={(e) => setDob(e.target.value)} />
        </label>
      </div>
    )
  }
  const birth = new Date(dob)
  const turn65 = new Date(birth)
  turn65.setFullYear(birth.getFullYear() + 65)
  const iepStart = new Date(turn65)
  iepStart.setMonth(turn65.getMonth() - 3)
  iepStart.setDate(1)
  const iepEnd = new Date(turn65)
  iepEnd.setMonth(turn65.getMonth() + 4)
  iepEnd.setDate(0)
  const medigapStart = new Date(turn65.getFullYear(), turn65.getMonth(), 1)
  const medigapEnd = new Date(medigapStart)
  medigapEnd.setMonth(medigapStart.getMonth() + 6)
  medigapEnd.setDate(0)
  const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="border-2 border-brand-teal rounded-lg p-5 my-8">
      <h3 className="text-xl font-bold text-brand-navy mb-4">Medicare Enrollment Period Finder</h3>
      <label className="block max-w-xs mb-4">
        <span className="block text-xs font-medium text-gray-700 mb-1">Date of birth</span>
        <input type="date" className="w-full border rounded px-3 py-2" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <div className="space-y-3">
        <Row title="You turn 65" value={fmt(turn65)} />
        <Row title="Initial Enrollment Period (IEP)" value={`${fmt(iepStart)} → ${fmt(iepEnd)}`} note="Enroll in Part A and Part B during this 7-month window." />
        <Row title="Medigap Open Enrollment (6 months)" value={`${fmt(medigapStart)} → ${fmt(medigapEnd)}`} note="Assumes Part B enrollment at age 65. No health underwriting during this window." />
        <Row title="Annual Election Period (every year)" value="October 15 – December 7" note="Switch MA / Part D plans or change between Original and Advantage." />
        <Row title="MA Open Enrollment (every year)" value="January 1 – March 31" note="One change from MA to Original Medicare or different MA plan." />
      </div>
      <p className="mt-4 text-xs text-gray-500">Deadlines are general. Working with employer coverage or special circumstances can change your windows. See <a className="text-brand-teal underline" href="/guides/medicare-enrollment-guide/">enrollment guide</a>.</p>
    </div>
  )
}

function Row({ title, value, note }: { title: string; value: string; note?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-3">
      <div className="text-xs text-gray-500 uppercase tracking-wider">{title}</div>
      <div className="text-lg font-semibold text-brand-navy">{value}</div>
      {note && <div className="text-sm text-gray-700 mt-1">{note}</div>}
    </div>
  )
}
