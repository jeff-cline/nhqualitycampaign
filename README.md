# NHQualityCampaign.org

Next.js 15 (App Router) + Tailwind + Prisma/PostgreSQL + NextAuth + TipTap admin.

Implements the full build brief: GEO-optimized public site, custom CMS, ad management, DataForSEO integration, and 25+ seeded launch pages across six topic clusters.

## Quick start

```bash
# 1. Install
npm install

# 2. Copy env
cp .env.example .env.local
# Then fill in DATABASE_URL, NEXTAUTH_SECRET (openssl rand -base64 32),
# NEXTAUTH_URL (http://localhost:3000 for local), SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD.

# 3. DB
npm run db:push
npm run db:seed

# 4. Dev
npm run dev
# Public site: http://localhost:3000
# Admin:       http://localhost:3000/admin (sign in via /login)
```

## Deploy to Vercel

1. Push to GitHub (`git@github.com:jeff-cline/nhqualitycampaign.git`).
2. Import the repo in Vercel.
3. Add a Neon Postgres integration from the Vercel Marketplace (it auto-provisions `DATABASE_URL`).
4. Set env vars in Vercel: `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (`https://nhqualitycampaign.org`), `DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `SEED_ADMIN_EMAIL`, `SEED_ADMIN_PASSWORD`.
5. Build command: `npm run build`. Install command: `npm install`.
6. After first deploy, run `npm run db:push && npm run db:seed` from a local shell with the remote `DATABASE_URL`.

## DNS — point nhqualitycampaign.org at Vercel

In Vercel → Project → Settings → Domains, add `nhqualitycampaign.org` and `www.nhqualitycampaign.org`. Vercel will display exact records. Typical GoDaddy DNS entries:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

Remove any conflicting legacy A/CNAME records at GoDaddy. SSL will provision automatically within a few minutes.

## Content architecture

- 6 topic clusters (Medicare, Nursing Homes, Senior Care, Telehealth, Healthcare Quality, Senior Finance) enforced via `Cluster` enum.
- 25+ pages seeded at `prisma/content.ts`; editable in `/admin/pages`.
- Quick Answer box, FAQ with `FAQPage` JSON-LD, comparison tables, breadcrumbs, and related articles on every article/guide/comparison page.

## GEO / AI crawlability

- SSG via Prisma-backed catch-all route; content is in the initial HTML.
- `/robots.txt` allows OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Googlebot, Bingbot.
- `/sitemap.xml` auto-generated from published pages.
- `/llms.txt` auto-generated listing all published pages with descriptions.
- JSON-LD per page: Organization, WebSite, Article/MedicalWebPage, FAQPage, BreadcrumbList.

## Ad system

10 named slots (`SLOT_HEADER_BANNER` → `SLOT_MOBILE_STICKY`) managed at `/admin/ads`. Paste any HTML/JS code (AdSense, Ad Manager, affiliate). Toggle active per slot. Inactive or empty slots render nothing.

## DataForSEO

`/admin/keywords` runs live queries when `DATAFORSEO_LOGIN` + `DATAFORSEO_PASSWORD` are set; otherwise returns mocked sample data so the UI is usable pre-credentials.

## Post-launch checklist

- [ ] Submit sitemap in Google Search Console
- [ ] Submit sitemap in Bing Webmaster Tools (critical — feeds ChatGPT retrieval)
- [ ] Verify GA4 measurement ID is live
- [ ] Turn on 2–3 ad slots with real code
- [ ] Replace seeded admin password on first login (edit via direct DB update or a future /admin/users flow)

See `source_files/NHQC_ClaudeCode_Brief.md` (not committed) for the full spec.
