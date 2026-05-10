// Loading skeleton for the project detail page
export default function ProjectDetailSkeleton() {
  return (
    <div className="container mx-auto px-6 py-32 lg:px-12">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 rounded bg-white/10" />
        <div className="h-12 w-2/3 rounded bg-white/10" />
        <div className="h-6 w-1/3 rounded bg-white/10" />
        <div className="mt-12 space-y-4">
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
          <div className="h-4 w-4/6 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-3/4 rounded bg-white/10" />
        </div>
      </div>
    </div>
  )
}
