"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const progress = (scrollPosition / totalHeight) * 100

      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[999]">

      <div
        className="h-full bg-red-500 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

    </div>

  )
}