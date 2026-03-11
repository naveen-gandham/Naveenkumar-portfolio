"use client"

import { motion } from "framer-motion"
import { FaJava, FaPython, FaCode, FaBrain } from "react-icons/fa"
import { SiCplusplus, SiAngular } from "react-icons/si"

export default function Teaching() {

  const skills = [
    {
      icon: <FaJava size={32} />,
      title: "Java Programming",
      desc: "Object-oriented programming, collections, exception handling and real-world coding exercises."
    },
    {
      icon: <FaPython size={32} />,
      title: "Python Programming",
      desc: "Python fundamentals, scripting, problem solving and project-based learning."
    },
    {
      icon: <SiCplusplus size={32} />,
      title: "C & C++",
      desc: "Core programming concepts, pointers, memory management and algorithmic thinking."
    },
    {
      icon: <SiAngular size={32} />,
      title: "Full Stack Web Development",
      desc: "Frontend using HTML, CSS, JavaScript and Angular with backend concepts."
    },
    {
      icon: <FaBrain size={32} />,
      title: "Machine Learning Fundamentals",
      desc: "Introduction to ML concepts including CNN models and AI based problem solving."
    },
    {
      icon: <FaCode size={32} />,
      title: "Programming Logic & Problem Solving",
      desc: "Developing strong logical thinking and algorithmic problem solving skills."
    }
  ]

  return (
    <section id="teaching" className="py-24 px-6 max-w-7xl mx-auto text-center">

      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Teaching Expertise
      </motion.h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
        Practical programming training designed to bridge the gap between
        academic learning and real-world software development.
      </p>

      {/* Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="relative group bg-[#0b1625] border border-gray-800 rounded-xl p-6 md:p-8 transition"
          >

            {/* Glow Effect */}

            <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition bg-gradient-to-r from-red-500/10 to-blue-500/10 blur-xl"></div>

            {/* Content */}

            <div className="relative">

              <div className="text-red-400 mb-4 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}