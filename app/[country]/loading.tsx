export default function Loading() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="w-5 h-5 border-2 border-t-transparent border-zinc-500 rounded-full animate-spin" />
        Loading country details...
      </div>
    </div>
  )
}
