import { AlertCircle } from 'lucide-react'

interface ErrorStateProps {
  message: string
  onRetry?: () => void
  children?: React.ReactNode
}

// Reusable error display with optional retry and custom actions
export default function ErrorState({ message, onRetry, children }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-red-500/5 p-12 text-center border border-red-500/10">
      <AlertCircle className="mb-3 h-8 w-8 text-red-400/60" />
      <p className="mb-4 text-red-400">{message}</p>
      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-lg bg-red-500/20 px-6 py-2 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/30"
          >
            Tentar novamente
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
