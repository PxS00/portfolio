import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type AboutCardProps = {
  title: string
  description: string
  icon: LucideIcon
  delay: number
}

export default function AboutCard({ title, description, icon: Icon, delay }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col rounded-2xl border border-(--border-color) bg-(--bg-color-alt) p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-(--primary-color)/30 hover:shadow-md"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-color)/10">
        <Icon className="h-6 w-6 text-(--primary-color)" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-(--title-color)">{title}</h3>
      <p className="leading-relaxed text-(--muted-color)">{description}</p>
    </motion.div>
  )
}
