'use client'
import { useState } from 'react'

export function MedicareQuoteWidget() {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="my-8 rounded-lg border-2 border-brand-teal bg-brand-mist p-6"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">
        Sponsored — Licensed Insurance Agent
      </div>
      <h3 className="text-xl font-bold text-brand-navy mt-1 mb-3">
        Compare Medicare Plans in Your Area
      </h3>
      {sent ? (
        <div className="text-brand-ink">Thanks — a licensed agent will be in touch.</div>
      ) : (
        <>
          <div className="grid gap-3 md:grid-cols-3">
            <input required placeholder="ZIP code" className="border rounded px-3 py-2" />
            <input required placeholder="First name" className="border rounded px-3 py-2" />
            <input required placeholder="Phone" className="border rounded px-3 py-2" />
          </div>
          <button type="submit" className="btn-primary mt-4">Get Free Quotes</button>
          <p className="mt-3 text-xs text-gray-500">
            By clicking, you agree a licensed insurance agent may contact you about Medicare plans. Not affiliated with or endorsed by the U.S. government.
          </p>
        </>
      )}
    </form>
  )
}
