import { Skeleton } from '@/components/ui/skeleton'

export function StackCardSkeleton() {
  return (
    <div className="group flex flex-col gap-3 p-4 rounded-lg border border-slate-800/50 bg-slate-900/30">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <Skeleton className="w-12 h-6 rounded" />
      </div>

      {/* Title */}
      <Skeleton className="h-5 w-3/4" />

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>

      {/* Progress bar */}
      <Skeleton className="h-2 w-full rounded-full" />
    </div>
  )
}
