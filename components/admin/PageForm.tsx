'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TipTapEditor } from './TipTapEditor'

type FAQ = { question: string; answer: string }

export type PageFormData = {
  id?: string
  slug: string
  path: string
  title: string
  metaTitle: string
  metaDesc: string
  quickAnswer: string
  content: string
  pageType: string
  cluster: string
  status: string
  faq: FAQ[]
}

export function PageForm({ initial }: { initial: PageFormData }) {
  const router = useRouter()
  const [data, setData] = useState<PageFormData>(initial)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  function set<K extends keyof PageFormData>(k: K, v: PageFormData[K]) {
    setData((d) => ({ ...d, [k]: v }))
  }

  async function save(status?: string) {
    setSaving(true)
    setMsg('')
    const res = await fetch('/api/admin/pages', {
      method: data.id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, ...(status && { status }) }),
    })
    setSaving(false)
    if (!res.ok) {
      setMsg(`Error: ${await res.text()}`)
      return
    }
    const saved = await res.json()
    setMsg('Saved.')
    if (!data.id) router.push(`/admin/pages/edit?path=${encodeURIComponent(saved.path)}`)
    router.refresh()
  }

  const input = 'w-full border border-gray-300 rounded px-3 py-2'
  const label = 'block text-sm font-medium text-gray-700 mb-1 mt-3'

  return (
    <div className="max-w-4xl">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className={label}>Title (H1)</label>
          <input className={input} value={data.title} onChange={(e) => set('title', e.target.value)} />
        </div>
        <div>
          <label className={label}>URL path</label>
          <input className={input} value={data.path} onChange={(e) => set('path', e.target.value)} />
        </div>
        <div>
          <label className={label}>Meta title</label>
          <input className={input} value={data.metaTitle} onChange={(e) => set('metaTitle', e.target.value)} />
        </div>
        <div>
          <label className={label}>Slug</label>
          <input className={input} value={data.slug} onChange={(e) => set('slug', e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className={label}>Meta description (155–160 chars)</label>
          <textarea className={input} rows={2} value={data.metaDesc} onChange={(e) => set('metaDesc', e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className={label}>Quick Answer (40–60 words, shown at top)</label>
          <textarea className={input} rows={3} value={data.quickAnswer} onChange={(e) => set('quickAnswer', e.target.value)} />
        </div>
        <div>
          <label className={label}>Page type</label>
          <select className={input} value={data.pageType} onChange={(e) => set('pageType', e.target.value)}>
            {['ARTICLE', 'GUIDE', 'COMPARISON', 'FAQ', 'HUB', 'STATE', 'BLOG', 'LEGAL'].map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Cluster</label>
          <select className={input} value={data.cluster} onChange={(e) => set('cluster', e.target.value)}>
            {['A_MEDICARE', 'B_NURSING_HOMES', 'C_SENIOR_CARE', 'D_TELEHEALTH', 'E_HEALTHCARE_QUALITY', 'F_SENIOR_FINANCE', 'NONE'].map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>

      <label className={label}>Content</label>
      <TipTapEditor value={data.content} onChange={(html) => set('content', html)} />

      <label className={label}>FAQ pairs</label>
      <div className="space-y-3">
        {data.faq.map((q, i) => (
          <div key={i} className="grid gap-2 md:grid-cols-2 border border-gray-200 rounded p-3">
            <input className={input} placeholder="Question" value={q.question}
              onChange={(e) => {
                const n = [...data.faq]
                n[i] = { ...n[i], question: e.target.value }
                set('faq', n)
              }} />
            <textarea className={input} placeholder="Answer" rows={2} value={q.answer}
              onChange={(e) => {
                const n = [...data.faq]
                n[i] = { ...n[i], answer: e.target.value }
                set('faq', n)
              }} />
          </div>
        ))}
        <button type="button" className="text-sm text-brand-teal"
          onClick={() => set('faq', [...data.faq, { question: '', answer: '' }])}>
          + Add FAQ
        </button>
      </div>

      <div className="flex gap-3 mt-6 items-center">
        <button className="btn-primary" disabled={saving} onClick={() => save()}>
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button className="btn-primary" disabled={saving} onClick={() => save('PUBLISHED')}>
          Publish
        </button>
        <button className="px-4 py-2 border rounded" disabled={saving} onClick={() => save('DRAFT')}>
          Save as Draft
        </button>
        {data.path && (
          <a href={data.path} target="_blank" className="text-sm text-brand-teal underline ml-auto" rel="noreferrer">
            Preview →
          </a>
        )}
      </div>
      {msg && <div className="mt-3 text-sm text-gray-600">{msg}</div>}
    </div>
  )
}
