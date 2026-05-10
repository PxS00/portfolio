export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-(--secondary-color)/5 p-6 border border-white/5 shadow-lg animate-pulse">
      <div className="mb-4 flex items-start justify-between">
        <div className="h-6 w-1/2 rounded bg-white/10"></div>
        <div className="h-6 w-6 rounded bg-white/10"></div>
      </div>
      
      <div className="mb-6 space-y-2 flex-1">
        <div className="h-4 w-full rounded bg-white/10"></div>
        <div className="h-4 w-5/6 rounded bg-white/10"></div>
        <div className="h-4 w-4/6 rounded bg-white/10"></div>
      </div>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-white/10"></div>
          <div className="h-4 w-16 rounded bg-white/10"></div>
        </div>
        <div className="h-4 w-24 rounded bg-white/10"></div>
      </div>
    </div>
  )
}
