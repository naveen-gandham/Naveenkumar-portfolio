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
                "Software Engineer",
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

          {/* Resume + Action Buttons */}

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">

            <a
              href="/resumes/naveen-general.pdf"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              General Resume
            </a>

            <a
              href="/resumes/naveen-java.pdf"
              target="_blank"
              className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Java / FullStack Resume
            </a>

            <a
              href="/resumes/naveen-ai-trainer.pdf"
              target="_blank"
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
            >
              AI Trainer Resume
            </a>

            <a
              href="#projects"
              className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>

          </div>

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

        <div className="flex justify-center mt-10 md:mt-0">

          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">

            {/* Glow */}

            <div className="absolute w-48 md:w-60 lg:w-72 h-48 md:h-60 lg:h-72 bg-red-600 blur-3xl opacity-30 rounded-full"></div>

            {/* Profile Photo */}

            <Image
              src="/passport.jpg"
              alt="Naveen Kumar Gandham"
              width={180}
              height={180}
              className="rounded-xl relative z-10 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto"
            />

          </div>

        </div>

      </div>

    </section>

  )
}