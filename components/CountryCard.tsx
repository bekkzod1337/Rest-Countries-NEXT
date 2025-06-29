import Link from "next/link"

export default function CountryCard({ country }: { country: any }) {
  return (
    <Link href={`/${country.alpha3Code}`}>
      <div className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.03]">
        <img
          src={country.flags.svg}
          alt={country.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-extrabold mb-2 dark:text-white">{country.name}</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}
