import { useId } from 'react'

export default function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
    >
      <defs>
        <pattern x="50%" y={-1} id="a" width={200} height={200} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="fill-fg/5 overflow-visible">
        <path d="M-200 0H1v201h-201zm800 0h201v201H600zM-400 600h201v201h-201zm600 200h201v201H200z" />
      </svg>
      <rect fill="url(#a)" width="100%" height="100%" />
    </svg>
  )
}
