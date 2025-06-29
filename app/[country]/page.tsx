import Link from "next/link"
import { fetchCountries } from "../lib/api"
import NotFound from "../[country]/not-found"
import CountryDetail from "../../components/CountryDetail"

export default async function CountryPage({ params }: { params: { country: string } }) {
  const countries = await fetchCountries()
  const country = countries.find((c) => c.alpha3Code === params.country)

  if (!country) return <NotFound />

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto space-y-6">
      <Link
        href="/"
        className="inline-block bg-muted px-6 py-2 rounded shadow text-sm dark:bg-card hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
      >
        ← Back
      </Link>

      <CountryDetail country={country} />
    </section>
  )
}
