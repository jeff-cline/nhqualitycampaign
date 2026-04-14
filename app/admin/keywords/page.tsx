'use client'
import { useState } from 'react'

type Row = { keyword: string; search_volume?: number; cpc?: number; competition?: number }

export default function KeywordResearch() {
  const [seed, setSeed] = useState('')
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)
  const [mocked, setMocked] = useState(false)

  async function run() {
    setLoading(true)
    const res = await fetch(`/api/admin/keywords?seed=${encodeURIComponent(seed)}`)
    const json = await res.json()
    setMocked(!!json.mocked)
    setRows(json.items ?? [])
    setLoading(false)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">Keyword Research</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={seed} onChange={(e) => setSeed(e.target.value)}
          placeholder="Seed keyword (e.g., medicare plan g)"
          className="flex-1 border rounded px-3 py-2"
        />
        <button className="btn-primary" onClick={run} disabled={!seed || loading}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </div>
      {mocked && (
        <div className="mb-3 text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded">
          DataForSEO credentials not configured — showing mock data. Add DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD to .env.
        </div>
      )}
      <table className="w-full bg-white border text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-2">Keyword</th>
            <th className="text-right p-2">Volume</th>
            <th className="text-right p-2">CPC ($)</th>
            <th className="text-right p-2">Competition</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.keyword}</td>
              <td className="p-2 text-right">{r.search_volume?.toLocaleString() ?? '—'}</td>
              <td className="p-2 text-right">{r.cpc?.toFixed(2) ?? '—'}</td>
              <td className="p-2 text-right">{r.competition?.toFixed(2) ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
