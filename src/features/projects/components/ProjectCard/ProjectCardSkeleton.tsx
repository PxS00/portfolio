import { motion } from 'framer-motion'

export default function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-full animate-pulse flex-col rounded-2xl border border-(--border-color) bg-(--secondary-color)/5 p-6 shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="h-6 w-1/2 rounded bg-(--muted-color)/20" />
        <div className="h-6 w-6 rounded bg-(--muted-color)/20" />
      </div>

      <div className="mb-6 flex-1 space-y-2">
        <div className="h-4 w-full rounded bg-(--muted-color)/20" />
        <div className="h-4 w-5/6 rounded bg-(--muted-color)/20" />
        <div className="h-4 w-4/6 rounded bg-(--muted-color)/20" />
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-(--muted-color)/20" />
          <div className="h-4 w-16 rounded bg-(--muted-color)/20" />
        </div>
        <div className="h-4 w-24 rounded bg-(--muted-color)/20" />
      </div>
    </motion.div>
  )
}
