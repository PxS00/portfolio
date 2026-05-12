import { useEffect, useRef, useState } from 'react'
import type { TypewriterOptions } from '../types/typewriter'
/**
 * Hook para efeito de digitação tipo "typewriter".
 * @param text Texto a ser digitado
 * @param delay Delay entre cada caractere (ms)
 * @param startDelay Delay antes de começar (ms)
 * @param loop Se deve repetir o efeito
 * @param onDone Callback ao terminar
 */
export function useTypewriter({
  text,
  delay = 80,
  startDelay = 0,
  loop = false,
  onDone,
}: TypewriterOptions) {
  const [index, setIndex] = useState<number>(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const onDoneRef = useRef(onDone)

  // Update ref when onDone changes without re-triggering the effect
  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    setIndex(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => {
          if (prev < text.length) {
            return prev + 1
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            if (onDoneRef.current) {
              onDoneRef.current()
            }
            if (loop) {
              timeoutRef.current = setTimeout(() => {
                setIndex(0)
                intervalRef.current = setInterval(() => {
                  setIndex((prevLoop) => {
                    if (prevLoop < text.length) {
                      return prevLoop + 1
                    } else {
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current)
                      }
                      if (onDoneRef.current) {
                        onDoneRef.current()
                      }
                      return prevLoop
                    }
                  })
                }, delay)
              }, 1000)
            }
            return prev
          }
        })
      }, delay)
    }, startDelay)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, delay, startDelay, loop])

  return text.slice(0, index)
}
