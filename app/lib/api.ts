export const fetchCountries = async (): Promise<any[]> => {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,alpha3Code,flags,population,region,capital",
      {
        cache: "force-cache", // yoki { next: { revalidate: 3600 } }
      }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("API error, using fallback:", error)

    // fallback ma'lumotlar (kamida 1ta kerak generateStaticParams uchun)
    return [
      {
        name: "Uzbekistan",
        alpha3Code: "UZB",
        flags: { svg: "https://flagcdn.com/uz.svg" },
        population: 35000000,
        region: "Asia",
        capital: "Tashkent",
      },
    ]
  }
}
