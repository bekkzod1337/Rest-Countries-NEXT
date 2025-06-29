export const fetchCountries = async (): Promise<any[]> => {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,alpha3Code,flags,population,region,capital"
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("API error:", error)
    return []
  }
}
