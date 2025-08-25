import { useEffect, useState } from 'react'

export function useTypingEffect(texts: string[], typingMs = 80, pauseMs = 900) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let cancelled = false
    let timeout: number | undefined

    const type = async () => {
      const full = texts[index % texts.length]
      for (let i = 1; i <= full.length; i++) {
        if (cancelled) return
        setDisplay(full.slice(0, i))
        await new Promise((r) => (timeout = window.setTimeout(r, typingMs)))
      }
      await new Promise((r) => (timeout = window.setTimeout(r, pauseMs)))
      setDisplay('')
      setIndex((v) => v + 1)
    }

    type()
    return () => {
      cancelled = true
      if (timeout) window.clearTimeout(timeout)
    }
  }, [index, texts, typingMs, pauseMs])

  return display
}


