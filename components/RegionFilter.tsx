"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export default function RegionFilter({
  onSelect,
}: {
  onSelect: (region: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[180px] justify-between text-sm dark:bg-card dark:text-white"
        >
          Filter by Region
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[180px] dark:bg-card">
        {regions.map((region) => (
          <DropdownMenuItem
            key={region}
            onClick={() => onSelect(region)}
            className="cursor-pointer dark:text-white"
          >
            {region}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
