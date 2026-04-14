import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/adminGuard'

export async function PUT(req: Request) {
  try {
    await requireAdmin()
    const body = await req.json()
    const updated = await prisma.adSlot.update({
      where: { id: body.id },
      data: {
        code: body.code ?? '',
        isActive: !!body.isActive,
        notes: body.notes ?? '',
      },
    })
    return NextResponse.json(updated)
  } catch (e: any) {
    return new NextResponse(e.message ?? 'Error', { status: e.message === 'UNAUTHORIZED' ? 401 : 400 })
  }
}
