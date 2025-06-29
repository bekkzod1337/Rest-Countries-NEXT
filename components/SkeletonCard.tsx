export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl shadow-md bg-muted overflow-hidden">
      {/* Flag (image placeholder) */}
      <div className="bg-gray-300 dark:bg-zinc-700 h-40 w-full" />

      {/* Text placeholders */}
      <div className="p-6 space-y-3">
        <div className="h-5 w-2/3 bg-gray-300 dark:bg-card rounded" />
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-card rounded" />
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-card rounded" />
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-card rounded" />
      </div>
    </div>
  )
}
