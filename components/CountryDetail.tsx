"use client"

import Link from "next/link"

export default function CountryDetail({ country }: { country: any }) {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto space-y-10">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <img
          src={country.flags.svg}
          alt={country.name}
          className="w-full h-auto max-w-lg rounded-lg shadow-md"
        />

        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold dark:text-white">{country.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital:</span> {country.capital}
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.topLevelDomain?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {country.currencies?.map((c: any) => c.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {country.languages?.map((l: any) => l.name).join(", ")}
              </p>
            </div>
          </div>

          {country.borders?.length > 0 && (
            <div className="space-y-2">
              <p className="font-semibold text-base dark:text-white">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((b: string) => (
                  <Link
                    key={b}
                    href={`/${b}`}
                    className="px-4 py-1 rounded bg-zinc-100 dark:bg-zinc-700 text-sm shadow-sm hover:bg-zinc-200 dark:hover:bg-zinc-600 transition"
                  >
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
