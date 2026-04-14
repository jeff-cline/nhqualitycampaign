import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/adminGuard'
import { slugify } from '@/lib/utils'
import { z } from 'zod'

const Body = z.object({
  id: z.string().optional(),
  slug: z.string().min(1),
  path: z.string().min(1),
  title: z.string().min(1),
  metaTitle: z.string().optional().default(''),
  metaDesc: z.string().optional().default(''),
  quickAnswer: z.string().optional().default(''),
  content: z.string().optional().default(''),
  pageType: z.string(),
  cluster: z.string(),
  status: z.string(),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
})

async function upsert(data: z.infer<typeof Body>, session: any) {
  const path = data.path.startsWith('/') ? data.path : `/${data.path}`
  const slug = data.slug || slugify(data.title)
  const payload = {
    slug,
    path,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDesc: data.metaDesc,
    quickAnswer: data.quickAnswer,
    content: data.content,
    pageType: data.pageType as any,
    cluster: data.cluster as any,
    status: data.status as any,
    publishedAt: data.status === 'PUBLISHED' ? new Date() : undefined,
  }
  if (data.id) {
    const page = await prisma.page.update({
      where: { id: data.id },
      data: payload,
    })
    await prisma.faq.deleteMany({ where: { pageId: page.id } })
    await prisma.faq.createMany({
      data: data.faq
        .filter((f) => f.question.trim())
        .map((f, i) => ({ pageId: page.id, question: f.question, answer: f.answer, sortOrder: i })),
    })
    return page
  }
  const page = await prisma.page.create({
    data: {
      ...payload,
      authorId: (session.user as any)?.id,
      faq: {
        create: data.faq
          .filter((f) => f.question.trim())
          .map((f, i) => ({ question: f.question, answer: f.answer, sortOrder: i })),
      },
    },
  })
  return page
}

export async function POST(req: Request) {
  try {
    const session = await requireAdmin()
    const body = Body.parse(await req.json())
    const page = await upsert(body, session)
    return NextResponse.json(page)
  } catch (e: any) {
    return new NextResponse(e.message ?? 'Error', { status: e.message === 'UNAUTHORIZED' ? 401 : 400 })
  }
}

export async function PUT(req: Request) {
  return POST(req)
}

export async function GET() {
  await requireAdmin()
  const pages = await prisma.page.findMany({ orderBy: { updatedAt: 'desc' } })
  return NextResponse.json(pages)
}
