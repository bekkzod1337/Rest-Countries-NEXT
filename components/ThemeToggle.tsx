"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">🌞</span>
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={() =>
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }
      />
      <span className="text-sm">🌙</span>
    </div>
  )
}
