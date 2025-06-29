"use client"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">🌞</span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="text-sm">🌙</span>
    </div>
  )
}
