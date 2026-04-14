import { PageRenderer, generatePageMetadata } from '@/components/site/PageRenderer'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return generatePageMetadata('/')
}

export default function Home() {
  return <PageRenderer path="/" />
}
