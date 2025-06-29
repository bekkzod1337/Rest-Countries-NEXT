"use client"

import { useEffect, useState } from "react"
import { fetchCountries } from "./lib/api"
import SearchInput from "../components/SearchInput"
import RegionFilter from "../components/RegionFilter"
import ThemeToggle from "../components/ThemeToggle"
import CountryCard from "../components/CountryCard"

export default function Home() {
  const [countries, setCountries] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")

  useEffect(() => {
    fetchCountries().then(setCountries)
  }, [])

  const filtered = countries.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (region ? c.region === region : true)
    )
  })

  return (
    <main className="px-6 py-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto space-y-10">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <SearchInput value={search} onChange={setSearch} />
    <div className="flex items-center gap-4">
      <RegionFilter onSelect={setRegion} />
    </div>
  </div>

      {/* Country Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </main>
  )
}
