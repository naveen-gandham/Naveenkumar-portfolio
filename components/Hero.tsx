"use client"

import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import Image from "next/image"

export default function Hero() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (

    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-10 overflow-hidden"
    >

      {/* Mouse spotlight */}

      <div
        className="pointer-events-none absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-3xl opacity-20 bg-red-600"
        style={{
          left: position.x - 150,
          top: position.y - 150
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* LEFT SIDE */}

        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Naveen Kumar Gandham
          </h1>

          <h2 className="text-lg md:text-xl text-red-500 mb-6">

            <Typewriter
              words={[
                "Former Software Engineer",
                "AI Trainer",
                "Full Stack Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed mb-10">
            Trained 3000+ engineering students and worked as Associate
            Software Engineer at Bosch Global Software Technologies.
            I combine industry experience with practical training
            to build industry-ready developers.
          </p>

          {/* Stats */}

          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-500">3000+</h3>
              <p className="text-gray-400 text-sm">Students Trained</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-500">4.6 / 5</h3>
              <p className="text-gray-400 text-sm">Student Rating</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-500">3+</h3>
              <p className="text-gray-400 text-sm">Industry Roles</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">

          <div className="relative flex items-center justify-center">

            {/* Glow background */}
            <div className="absolute w-[260px] md:w-[340px] lg:w-[420px] h-[260px] md:h-[340px] lg:h-[420px] bg-red-600/20 blur-3xl rounded-full"></div>

            {/* Card */}
            <div
              className="
                relative
                z-10
                backdrop-blur-sm
                bg-white/5
                border border-gray-700
                rounded-2xl
                pt-6 pb-4 px-4
                shadow-[0_20px_80px_rgba(255,0,0,0.25)]
                transition duration-300
                hover:scale-105
                hover:shadow-[0_30px_100px_rgba(255,0,0,0.4)]
              "
            >

              {/* Status Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500/20 border border-green-500 text-green-400 text-xs px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                🟢 Available for Opportunities
              </div>

              {/* Profile Image */}
              <Image
                src="/passport.jpg"
                alt="Naveen Kumar Gandham"
                width={260}
                height={260}
                priority
                className="rounded-xl w-[200px] sm:w-[230px] md:w-[260px] lg:w-[300px] h-auto"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}