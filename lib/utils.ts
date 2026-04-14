import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function formatDate(d: Date | string | null | undefined): string {
  if (!d) return ''
  const date = typeof d === 'string' ? new Date(d) : d
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://nhqualitycampaign.org'

export const SITE_NAME = 'NHQualityCampaign.org'

export const CLUSTER_LABELS: Record<string, string> = {
  A_MEDICARE: 'Medicare & Medigap',
  B_NURSING_HOMES: 'Nursing Homes & Long-Term Care',
  C_SENIOR_CARE: 'Senior Care & Aging in Place',
  D_TELEHEALTH: 'Telehealth for Seniors',
  E_HEALTHCARE_QUALITY: 'Healthcare Quality & Patient Safety',
  F_SENIOR_FINANCE: 'Senior Financial & Benefits Planning',
  NONE: 'General',
}
