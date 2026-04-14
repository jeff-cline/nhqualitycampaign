import { PageForm } from '@/components/admin/PageForm'

export default function NewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">New Page</h1>
      <PageForm
        initial={{
          slug: '',
          path: '/',
          title: '',
          metaTitle: '',
          metaDesc: '',
          quickAnswer: '',
          content: '<p></p>',
          pageType: 'ARTICLE',
          cluster: 'A_MEDICARE',
          status: 'DRAFT',
          faq: [{ question: '', answer: '' }],
        }}
      />
    </div>
  )
}
