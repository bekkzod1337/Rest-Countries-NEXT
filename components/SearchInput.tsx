  "use client"
  import { Input } from "./ui/input"

  export default function SearchInput({ value, onChange }: {
    value: string
    onChange: (val: string) => void
  }) {
    return (
      <Input
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-md"
      />
    )
  }
