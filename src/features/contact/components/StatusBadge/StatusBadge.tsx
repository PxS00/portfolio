import { motion } from 'framer-motion'

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-md"
    >
      <div className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </div>
      <code className="text-xs font-medium text-(--text-color)/70">
        <span className="text-(--primary-color)">const</span> status = <span className="text-green-400">"available_for_collaboration"</span>;
      </code>
    </motion.div>
  )
}
