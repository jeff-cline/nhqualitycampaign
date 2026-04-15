import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { seedPages, adSlots } from './content'
import { EXPANDED } from './content-expanded'
import { EXPANDED_2 } from './content-expanded-2'

const EXPANSIONS = [...EXPANDED, ...EXPANDED_2]

const prisma = new PrismaClient()

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? 'admin@nhqualitycampaign.org'
  const password = process.env.SEED_ADMIN_PASSWORD ?? 'changeme-please-' + Math.random().toString(36).slice(2, 10)
  const passwordHash = await bcrypt.hash(password, 10)

  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash,
      name: 'NHQC Editorial Team',
      role: 'SUPER_ADMIN',
    },
  })
  console.log(`Admin user: ${email}`)
  if (!process.env.SEED_ADMIN_PASSWORD) console.log(`  generated password: ${password}`)

  for (const s of adSlots) {
    await prisma.adSlot.upsert({
      where: { slotKey: s.slotKey },
      update: {},
      create: {
        slotKey: s.slotKey,
        name: s.name,
        position: s.position as any,
        isActive: false,
        sitewide: true,
      },
    })
  }
  console.log(`Ad slots: ${adSlots.length}`)

  for (const p of seedPages) {
    const overlay = EXPANSIONS.find((e) => e.path === p.path)
    const content = overlay?.content ?? p.content
    const faq = overlay?.faq ?? p.faq
    const page = await prisma.page.upsert({
      where: { path: p.path },
      update: {
        title: p.title,
        metaTitle: p.metaTitle,
        metaDesc: p.metaDesc,
        quickAnswer: p.quickAnswer,
        content,
        pageType: p.pageType as any,
        cluster: p.cluster as any,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: admin.id,
      },
      create: {
        slug: p.slug,
        path: p.path,
        title: p.title,
        metaTitle: p.metaTitle,
        metaDesc: p.metaDesc,
        quickAnswer: p.quickAnswer,
        content,
        pageType: p.pageType as any,
        cluster: p.cluster as any,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: admin.id,
      },
    })
    // Replace FAQ rows so expanded FAQ sets apply
    await prisma.faq.deleteMany({ where: { pageId: page.id } })
    await prisma.faq.createMany({
      data: faq.map((f, i) => ({ pageId: page.id, question: f.question, answer: f.answer, sortOrder: i })),
    })
  }
  console.log(`Pages: ${seedPages.length} (${EXPANSIONS.length} expanded)`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
