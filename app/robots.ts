import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/utils'

export default function robots(): MetadataRoute.Robots {
  const allowAll = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'Claude-SearchBot',
    'Claude-User',
    'GPTBot',
    'ClaudeBot',
    'Google-Extended',
    'Applebot-Extended',
    'Googlebot',
    'Bingbot',
  ]
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] },
      ...allowAll.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: [`${SITE_URL}/sitemap-index.xml`, `${SITE_URL}/sitemap.xml`],
  }
}
