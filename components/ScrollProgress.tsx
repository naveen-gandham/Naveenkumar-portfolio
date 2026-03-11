"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      if (docHeight === 0) {
        setScroll(100)
        return
      }

      const progress = (scrollTop / docHeight) * 100
      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div className="fixed top-0 left-0 w-full h-[4px] z-[999]">

      <div
        className="h-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

    </div>

  )
}