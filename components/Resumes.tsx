"use client"

import { motion } from "framer-motion"
import { FaDownload, FaRobot, FaCode, FaChalkboardTeacher } from "react-icons/fa"

export default function Resumes() {

  const resumes = [
    {
      title: "General Software Engineer Resume",
      icon: <FaCode size={28} />,
      file: "/resumes/naveen-general.pdf"
    },
    {
      title: "Java / Full Stack Developer Resume",
      icon: <FaCode size={28} />,
      file: "/resumes/naveen-java.pdf"
    },
    {
      title: "AI Trainer Resume",
      icon: <FaRobot size={28} />,
      file: "/resumes/naveen-ai-trainer.pdf"
    },
    {
      title: "Technical Trainer Resume",
      icon: <FaChalkboardTeacher size={28} />,
      file: "/resumes/naveen-dotnet.pdf"
    },
    {
      title: "Product Developer Resume",
      icon: <FaCode size={28} />,
      file: "/resumes/naveen-product.pdf"
    }
  ]

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-4xl font-bold mb-16">
        Download My Resume
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {resumes.map((resume, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-[#0b1625] border border-gray-800 rounded-xl p-8 group transition"
          >

            <div className="text-red-400 flex justify-center mb-4">
              {resume.icon}
            </div>

            <h3 className="text-lg font-semibold mb-6">
              {resume.title}
            </h3>

            <a
              href={resume.file}
              target="_blank"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-medium transition"
            >
              <FaDownload />
              Download
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  )
}