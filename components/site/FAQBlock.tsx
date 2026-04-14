import { faqSchema, jsonLd } from '@/lib/schema'

type FAQ = { question: string; answer: string }

export function FAQBlock({ items }: { items: FAQ[] }) {
  if (!items?.length) return null
  return (
    <section className="my-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-brand-navy mb-4">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
        {items.map((q, i) => (
          <details key={i} className="p-4 group open:bg-brand-mist">
            <summary className="cursor-pointer font-semibold text-brand-ink list-none flex justify-between items-center">
              <span>{q.question}</span>
              <span className="text-brand-teal ml-2 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="mt-2 text-brand-ink/90 leading-relaxed">{q.answer}</div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(items)) }}
      />
    </section>
  )
}
