"use client"

import { motion } from "framer-motion"
import { FaCode, FaServer, FaBrain, FaChalkboardTeacher, FaProjectDiagram, FaLightbulb } from "react-icons/fa"

const values = [
  {
    icon: <FaCode size={26} />,
    title: "Full Stack Web Development",
    description:
      "Build scalable web applications using Angular, JavaScript, HTML and CSS with modern UI architecture.",
  },
  {
    icon: <FaServer size={26} />,
    title: "Backend System Development",
    description:
      "Develop backend services using Java, REST APIs and clean architecture principles.",
  },
  {
    icon: <FaBrain size={26} />,
    title: "Machine Learning Solutions",
    description:
      "Design machine learning systems using CNN and deep learning techniques for real-world problems.",
  },
  {
    icon: <FaChalkboardTeacher size={26} />,
    title: "Programming Training & Mentorship",
    description:
      "Train engineering students and teams in Java, Python, C and C++ with industry-oriented problem solving.",
  },
  {
    icon: <FaProjectDiagram size={26} />,
    title: "Industry-Oriented Curriculum Design",
    description:
      "Design programming courses and learning paths that bridge the gap between academics and industry.",
  },
  {
    icon: <FaLightbulb size={26} />,
    title: "Technical Problem Solving",
    description:
      "Break down complex technical challenges into practical and scalable solutions.",
  },
]

export default function Value() {
  return (
    <section id="value" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
        What I Can Help Companies With
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              scale: 1.04,
            }}
            className="group relative rounded-xl p-6 md:p-8 bg-gradient-to-br from-blue-950/70 to-black border border-blue-900/40 backdrop-blur-md shadow-xl transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* Animated glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-xl"></div>

            {/* Icon */}
            <div className="text-red-400 mb-4 relative z-10 text-lg md:text-xl">
              {value.icon}
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3 text-red-400 relative z-10">
              {value.title}
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
              {value.description}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}