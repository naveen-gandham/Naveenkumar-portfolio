"use client"

import { useEffect, useState } from "react"

export default function Achievements() {

  const logs = [
    "initializing developer profile...",
    "loading education data...",
    "✓ B.Tech ECE - KL University (CGPA: 8.99)",
    "loading industry experience...",
    "✓ associate software engineer @ bosch global software technologies",
    "loading teaching impact...",
    "✓ trained 3000+ engineering students",
    "✓ conducted 20+ programming bootcamps",
    "loading technical expertise...",
    "✓ full stack web development projects delivered",
    "✓ machine learning models built (CNN / AI systems)",
    "✓ programming training in java, python, c, c++",
    "✓ industry focused placement training",
    "loading leadership contributions...",
    "✓ mentored engineering students in software development",
    "✓ curriculum design for industry-ready programming training",
    "system status: READY"
  ]

  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {

    if (lineIndex >= logs.length) return

    const timer = setTimeout(() => {
      setVisibleLines(prev => [...prev, logs[lineIndex]])
      setLineIndex(prev => prev + 1)
    }, 600)

    return () => clearTimeout(timer)

  }, [lineIndex])

  return (

    <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        Developer Impact Console
      </h2>

      <div className="bg-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden">

        {/* terminal header */}

        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#0f172a]">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-sm text-gray-400 font-mono">
            naveen@portfolio:~$
          </span>

        </div>

        {/* terminal body */}

        <div className="p-6 font-mono text-green-400 text-sm leading-7 min-h-[320px]">

          {visibleLines.map((line, i) => (

            <div key={i} className="mb-1 flex">

              <span className="text-gray-500 mr-2">$</span>

              <span>{line}</span>

            </div>

          ))}

          {lineIndex < logs.length && (

            <div className="flex animate-pulse">

              <span className="text-gray-500 mr-2">$</span>

              <span className="bg-green-400 w-2 h-5 inline-block"></span>

            </div>

          )}

        </div>

      </div>

    </section>

  )
}