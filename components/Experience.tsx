"use client"

import { motion } from "framer-motion"

export default function Experience() {

  const experiences = [
    {
      company: "Bosch Global Software Technologies",
      role: "Software Engineering Intern",
      period: "May 2022 – May 2023",
      description:
        "Worked as a Software Engineering Intern gaining exposure to enterprise software development, backend services, and professional engineering workflows."
    },
    {
      company: "Bosch Global Software Technologies",
      role: "Associate Software Engineer",
      period: "May 2023 – Oct 2024",
      description:
        "Contributed to real-world software systems and collaborated with engineering teams working on enterprise-level applications."
    },
    {
      company: "Six Phrase",
      role: "Software Developer",
      period: "Oct 2024 – May 2025",
      description:
        "Worked on web development projects and contributed to building scalable application features and UI components."
    },
    {
      company: "Bytexl",
      role: "AI Trainer & Technical Mentor",
      period: "May 2025 – Jan 2026",
      description:
        "Trained 3000+ engineering students in Full Stack Development, programming fundamentals, and AI concepts through industry-oriented technical training programs."
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 md:mb-20">
        Professional Experience
      </h2>

      <div className="relative border-l border-gray-700">

        {experiences.map((exp, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 ml-6 md:ml-8"
          >

            <span className="absolute -left-3 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-red-600 rounded-full ring-8 ring-black" />

            <div className="bg-gray-900 p-5 md:p-6 rounded-xl shadow-lg md:hover:shadow-red-500/20 transition">

              <h3 className="text-lg md:text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-red-500 font-medium">
                {exp.company}
              </p>

              <p className="text-sm text-gray-400 mb-3">
                {exp.period}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}