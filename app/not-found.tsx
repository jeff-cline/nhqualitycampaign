import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-brand-navy">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="btn-primary mt-6 inline-block">Back to home</Link>
    </div>
  )
}
