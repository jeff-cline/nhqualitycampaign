export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-4">Settings</h1>
      <p className="text-sm text-gray-600">
        Configure API keys and site settings via environment variables (.env.local / Vercel env). See README for the full list.
      </p>
      <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
        <li><code>DATABASE_URL</code></li>
        <li><code>NEXTAUTH_SECRET</code>, <code>NEXTAUTH_URL</code></li>
        <li><code>DATAFORSEO_LOGIN</code>, <code>DATAFORSEO_PASSWORD</code></li>
        <li><code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code></li>
        <li><code>NEXT_PUBLIC_SITE_URL</code></li>
      </ul>
    </div>
  )
}
