"use client"

import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="bg-background dark:bg-card shadow-sm px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
          Where in the world?
        </h1>
        <ThemeToggle />
      </div>
    </header>
  )
}
