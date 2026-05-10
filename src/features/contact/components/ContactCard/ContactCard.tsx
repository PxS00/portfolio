import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface ContactCardProps {
  platform: string
  value: string
  url: string
  icon: React.ReactNode
  index: number
}

export default function ContactCard({ platform, value, url, icon, index }: ContactCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-(--secondary-color)/5 p-6 backdrop-blur-xl transition-all duration-200 hover:border-(--primary-color)/30 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.12)]"
    >
      <div className="flex flex-col gap-6">
        {/* Icon & Platform */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
            {icon}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-color)/30 transition-colors hover:text-(--primary-color)"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-medium text-(--text-color)/50 uppercase tracking-wider">
            {platform}
          </h3>
          <p className="mt-1 font-mono text-xl font-bold text-(--title-color)">
            {value}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-2 flex gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-(--primary-color) py-2.5 text-center text-sm font-bold text-white transition-all hover:brightness-110"
          >
            Visitar Perfil
          </a>
          <button
            onClick={handleCopy}
            className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-(--text-color) transition-all hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Check className="h-4 w-4" />
                  Copiado!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copiar
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
