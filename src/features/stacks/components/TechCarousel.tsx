import { motion } from 'framer-motion'
import { technologies } from '../data/technologies'

export default function TechCarousel() {
  const items = [...technologies, ...technologies]

  return (
    <div className="relative w-full overflow-hidden pt-8 pb-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-(--bg-color) to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-(--bg-color) to-transparent sm:w-32" />

      <div className="group flex">
        <div className="flex animate-scroll items-center gap-10 group-hover:[animation-play-state:paused]">
          {items.map((tech, idx) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${tech.name}-${idx}`}
              className="group/item relative flex shrink-0 flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  className="h-full w-full object-contain drop-shadow-sm"
                />
              </motion.div>

              <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md bg-zinc-800 px-3 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover/item:opacity-100">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
