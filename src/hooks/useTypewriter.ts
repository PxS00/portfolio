import { useEffect, useState } from 'react'
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

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined
    const startTimeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIndex(0)
      intervalId = setInterval(() => {
        setIndex((prev) => {
          if (prev < text.length) {
            return prev + 1
          } else {
            clearInterval(intervalId)
            if (onDone) {
              onDone()
            }
            if (loop) {
              setTimeout(() => {
                setIndex(0)
                intervalId = setInterval(() => {
                  setIndex((prevLoop) => {
                    if (prevLoop < text.length) {
                      return prevLoop + 1
                    } else {
                      clearInterval(intervalId)
                      if (onDone) {
                        onDone()
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
      if (intervalId) {
        clearInterval(intervalId)
      }
      if (startTimeoutId) {
        clearTimeout(startTimeoutId)
      }
    }
  }, [text, delay, startDelay, loop, onDone])

  return text.slice(0, index)
}
