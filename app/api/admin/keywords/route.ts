import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminGuard'
import { keywordSuggestions } from '@/lib/dataforseo'

export async function GET(req: Request) {
  try {
    await requireAdmin()
    const seed = new URL(req.url).searchParams.get('seed') ?? ''
    const raw = await keywordSuggestions(seed)
    const mocked = !!raw.mocked
    const items = raw.tasks?.[0]?.result ?? []
    return NextResponse.json({ mocked, items })
  } catch (e: any) {
    return new NextResponse(e.message ?? 'Error', { status: e.message === 'UNAUTHORIZED' ? 401 : 400 })
  }
}
