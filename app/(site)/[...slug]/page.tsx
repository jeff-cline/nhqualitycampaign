import { PageRenderer, generatePageMetadata } from '@/components/site/PageRenderer'
import { prisma } from '@/lib/prisma'

type Params = Promise<{ slug: string[] }>

function toPath(slug: string[]) {
  return `/${slug.join('/')}/`
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  return generatePageMetadata(toPath(slug))
}

export default async function CatchAll({ params }: { params: Params }) {
  const { slug } = await params
  return <PageRenderer path={toPath(slug)} />
}

export const dynamicParams = true
export const dynamic = 'force-dynamic'
