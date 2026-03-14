"use client"

import Counter from "./Counter"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-6 max-w-6xl mx-auto overflow-hidden
      bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_right,rgba(249,115,22,0.12),transparent_45%)]"
    >

      {/* TITLE */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Bridging Industry & Education
      </motion.h2>


      {/* INTRO */}

      <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-4 text-sm md:text-base text-center mb-10">

        <p>
          I am a{" "}
          <span className="text-red-400 font-semibold">
            Software Engineer
          </span>{" "}
          and{" "}
          <span className="text-red-400 font-semibold">
            Technical Trainer
          </span>{" "}
          combining real industry development experience with large scale
          engineering education.
        </p>

        <p>
          My work focuses on building real software systems while mentoring
          engineering students to become{" "}
          <span className="text-red-400 font-semibold">
            industry-ready developers.
          </span>
        </p>

      </div>


      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-red-400">
            <Counter end={3000} />+
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Engineers Mentored
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-red-400">
            <Counter end={4} />.6 / 5
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Student Rating
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <h3 className="text-3xl font-bold text-red-400">
            <Counter end={3} />+
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Industry Roles
          </p>
        </div>

      </div>



      {/* INDUSTRY ↔ EDUCATION */}

      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.7fr_1fr] gap-8 items-center">

        {/* INDUSTRY */}

        <div className="bg-[#0f1a2a]/80 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-400 hover:shadow-blue-500/30 transition backdrop-blur-lg">

          <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
            Industry Experience
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm md:text-base">
            <li>⚙ Enterprise software development workflows</li>
            <li>🚗 Automotive software exposure at Bosch</li>
            <li>🔗 CAN communication protocol and embedded systems</li>
            <li>🧠 Backend system design and REST APIs</li>
            <li>📊 SDLC lifecycle and engineering collaboration</li>
          </ul>

        </div>


        {/* BRIDGE */}

        <div className="flex flex-col items-center text-center px-4">

          <div className="h-16 md:h-20 w-[2px] bg-gradient-to-b from-transparent via-red-400 to-transparent animate-pulse mb-3" />

          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Industry ↔ Education
          </h3>

          <p className="text-gray-400 text-sm md:text-base max-w-xs">
            Building real software systems while shaping the next generation
            of engineers.
          </p>

          <div className="h-16 md:h-20 w-[2px] bg-gradient-to-b from-transparent via-red-400 to-transparent animate-pulse mt-3" />

        </div>


        {/* EDUCATION */}

        <div className="bg-[#2a140f]/80 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-orange-400 hover:shadow-orange-500/30 transition backdrop-blur-lg">

          <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-400">
            Engineering Training
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm md:text-base">
            <li>🎓 3000+ engineering students trained</li>
            <li>⭐ 4.6 / 5 average student feedback</li>
            <li>💻 Live coding programming instruction</li>
            <li>🧩 Placement-focused coding bootcamps</li>
            <li>📘 Industry-aligned curriculum design</li>
          </ul>

        </div>

      </div>

    </section>
  )
}