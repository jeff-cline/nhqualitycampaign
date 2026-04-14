import { prisma } from '@/lib/prisma'
import { PageForm } from '@/components/admin/PageForm'
import { notFound } from 'next/navigation'

type Search = Promise<{ path?: string }>

export default async function EditPage({ searchParams }: { searchParams: Search }) {
  const { path } = await searchParams
  if (!path) notFound()
  const page = await prisma.page.findUnique({
    where: { path },
    include: { faq: { orderBy: { sortOrder: 'asc' } } },
  })
  if (!page) notFound()
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">Edit: {page.title}</h1>
      <PageForm
        initial={{
          id: page.id,
          slug: page.slug,
          path: page.path,
          title: page.title,
          metaTitle: page.metaTitle ?? '',
          metaDesc: page.metaDesc ?? '',
          quickAnswer: page.quickAnswer ?? '',
          content: page.content,
          pageType: page.pageType,
          cluster: page.cluster,
          status: page.status,
          faq: page.faq.map((f) => ({ question: f.question, answer: f.answer })),
        }}
      />
    </div>
  )
}
