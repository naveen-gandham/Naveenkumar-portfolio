"use client"

import Counter from "./Counter"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      {/* INTRO TEXT */}
      <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-6 text-sm md:text-base">

        <p>
          I am a{" "}
          <span className="text-red-400 font-semibold">
            Software Engineer
          </span>{" "}
          and{" "}
          <span className="text-red-400 font-semibold">
            Technical Trainer
          </span>{" "}
          with strong experience in programming education and software
          development.
        </p>

        <p>
          My work combines real industry experience with practical teaching
          methodologies that help engineering students become
          <span className="text-red-400 font-semibold">
            {" "}industry-ready developers.
          </span>
        </p>

      </div>

      {/* COUNTERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-16">

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-xl shadow-lg text-center md:hover:scale-105 transition">
          <h3 className="text-3xl md:text-4xl font-bold text-red-400">
            <Counter end={3000} />+
          </h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Students Trained</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-xl shadow-lg text-center md:hover:scale-105 transition">
          <h3 className="text-3xl md:text-4xl font-bold text-red-400">
            <Counter end={4} />.6 / 5
          </h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Student Rating</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-xl shadow-lg text-center md:hover:scale-105 transition">
          <h3 className="text-3xl md:text-4xl font-bold text-red-400">
            <Counter end={3} />+
          </h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Industry Roles</p>
        </div>

      </div>


      {/* EXPERIENCE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-16">

        {/* Industry */}
        <div className="bg-[#0f1a2a] p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 md:hover:border-red-500 transition">

          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
            Industry Experience
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Worked at Bosch Global Software Technologies contributing to
            automotive system development and enterprise engineering workflows.
          </p>

        </div>


        {/* Teaching */}
        <div className="bg-[#0f1a2a] p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 md:hover:border-red-500 transition">

          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
            Teaching Impact
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Trained more than 3000 engineering students in programming,
            full-stack development and problem-solving skills to make them
            industry ready.
          </p>

        </div>


        {/* Technical */}
        <div className="bg-[#0f1a2a] p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 md:hover:border-red-500 transition">

          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
            Technical Expertise
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Strong foundation in Java, Python, C and C++ along with experience
            in Angular, Node.js, modern web development and AI concepts.
          </p>

        </div>

      </div>

    </section>
  )
}