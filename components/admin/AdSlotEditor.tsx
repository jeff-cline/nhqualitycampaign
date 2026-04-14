'use client'
import { useState } from 'react'

type Slot = {
  id: string
  slotKey: string
  name: string
  position: string
  code: string
  isActive: boolean
  notes: string
}

export function AdSlotEditor({ slot }: { slot: Slot }) {
  const [data, setData] = useState(slot)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  async function save() {
    setSaving(true)
    setMsg('')
    const res = await fetch('/api/admin/ads', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSaving(false)
    setMsg(res.ok ? 'Saved.' : `Error: ${await res.text()}`)
  }

  return (
    <details className="bg-white border border-gray-200 rounded-lg" open={data.isActive}>
      <summary className="flex justify-between p-3 cursor-pointer">
        <div>
          <div className="font-semibold text-brand-navy">{data.name}</div>
          <div className="text-xs text-gray-500">{data.slotKey} · {data.position}</div>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded ${data.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
          {data.isActive ? 'Active' : 'Inactive'}
        </span>
      </summary>
      <div className="border-t border-gray-200 p-4 space-y-3">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={data.isActive}
            onChange={(e) => setData({ ...data, isActive: e.target.checked })} />
          Active
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ad Code (HTML/JS)</label>
          <textarea className="w-full border rounded px-3 py-2 font-mono text-xs" rows={6}
            value={data.code} onChange={(e) => setData({ ...data, code: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes (CPM, partner, contract)</label>
          <input className="w-full border rounded px-3 py-2 text-sm"
            value={data.notes} onChange={(e) => setData({ ...data, notes: e.target.value })} />
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary" disabled={saving} onClick={save}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          {msg && <span className="text-sm text-gray-600">{msg}</span>}
        </div>
      </div>
    </details>
  )
}
