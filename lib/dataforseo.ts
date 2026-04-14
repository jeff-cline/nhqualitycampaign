const BASE = 'https://api.dataforseo.com/v3'

function authHeader() {
  const login = process.env.DATAFORSEO_LOGIN
  const pass = process.env.DATAFORSEO_PASSWORD
  if (!login || !pass) return null
  return 'Basic ' + Buffer.from(`${login}:${pass}`).toString('base64')
}

async function post(path: string, body: unknown) {
  const auth = authHeader()
  if (!auth) {
    return { mocked: true, tasks: [{ result: mockKeywords() }] }
  }
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: auth },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`DataForSEO ${res.status}`)
  return res.json()
}

export function keywordSuggestions(seed: string, locationCode = 2840) {
  return post('/keywords_data/google_ads/keywords_for_keywords/live', [
    { keywords: [seed], location_code: locationCode, language_code: 'en' },
  ])
}

export function serpOrganic(keyword: string, locationCode = 2840) {
  return post('/serp/google/organic/live/regular', [
    { keyword, location_code: locationCode, language_code: 'en', depth: 20 },
  ])
}

function mockKeywords() {
  return [
    { keyword: 'medicare supplement plan g', search_volume: 49500, cpc: 32.4, competition: 0.7 },
    { keyword: 'medicare plan n vs plan g', search_volume: 8100, cpc: 28.9, competition: 0.6 },
    { keyword: 'how to choose a nursing home', search_volume: 6600, cpc: 4.2, competition: 0.4 },
    { keyword: 'medicare advantage vs medigap', search_volume: 14800, cpc: 41.1, competition: 0.8 },
    { keyword: 'cms five star nursing home ratings', search_volume: 2900, cpc: 2.1, competition: 0.3 },
  ]
}
