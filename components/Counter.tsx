"use client"

import { useEffect, useState } from "react"

type CounterProps = {
  end: number
  duration?: number
  decimals?: number
}

export default function Counter({ end, duration = 2000, decimals = 0 }: CounterProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(counter)
      }
      setValue(start)
    }, 16)

    return () => clearInterval(counter)
  }, [end, duration])

  return (
    <span>
      {value.toFixed(decimals)}
    </span>
  )
}