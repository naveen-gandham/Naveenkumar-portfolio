"use client"

import { motion } from "framer-motion"
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa"

export default function Education() {
  const items = [
    {
      icon: <FaSchool size={26} />,
      title: "SSC",
      school: "Board of Secondary Education",
      year: "2015 – 2016",
      grade: "CGPA: 9.7 / 10",
      desc: "Completed secondary education with strong academic performance."
    },
    {
      icon: <FaUniversity size={26} />,
      title: "Intermediate (MPC)",
      school: "Board of Intermediate Education",
      year: "2016 – 2018",
      grade: "CGPA: 9.5 / 10",
      desc: "Studied Mathematics, Physics and Chemistry with strong analytical and logical foundation."
    },
    {
      icon: <FaGraduationCap size={26} />,
      title: "B.Tech – Electronics & Communication Engineering",
      school: "KL University",
      year: "2019 – 2023",
      grade: "CGPA: 8.99 / 10",
      desc: "Minor in Data Computing with focus on software engineering, machine learning and modern development technologies."
    }
  ]

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-14 md:mb-20">
        Education
      </h2>

      {/* Milestone Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">

        {items.map((item, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-[#0b1625] border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg relative group"
          >

            {/* icon */}

            <div className="text-red-400 flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mb-2">
              {item.school}
            </p>

            <p className="text-gray-400 text-sm mb-1">
              {item.year}
            </p>

            <p className="text-red-400 font-semibold mb-3">
              {item.grade}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* glow */}

            <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition bg-gradient-to-r from-red-500/10 to-blue-500/10 blur-xl"></div>

          </motion.div>

        ))}

      </div>

      {/* Progress Line */}

      <div className="relative mt-14 md:mt-16">

        <div className="h-[3px] bg-gradient-to-r from-red-500 via-red-400 to-red-500 w-full rounded-full"></div>

        <div className="flex justify-between mt-4 text-xs sm:text-sm text-gray-400">
          <span>SSC</span>
          <span>Intermediate</span>
          <span>B.Tech</span>
        </div>

      </div>

    </section>
  )
}