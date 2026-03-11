"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "naveengandham0404@gmail.com",
      link: "mailto:naveengandham0404@gmail.com",
      clickable: true
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9866128148",
      link: "",
      clickable: false
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "www.linkedin.com/in/naveen-gandham-83372b184",
      link: "https://www.linkedin.com/in/naveen-gandham-83372b184",
      clickable: true
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/naveen-gandham",
      link: "https://github.com/naveen-gandham",
      clickable: true
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mantada, Andhra Pradesh",
      link: "https://maps.google.com/?q=16.355764225954907,80.87578125996473",
      clickable: true
    }
  ]

  return (

    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-12 md:mb-14 text-sm md:text-base">
        Interested in collaboration, hiring, or discussing technology?  
        Feel free to reach out.
      </p>

      {/* Contact Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">

        {contacts.map((item, i) => {

          const Card = (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-4 md:gap-6 bg-[#0b1625] border border-gray-800 rounded-xl p-5 md:p-6 shadow-lg hover:border-red-500 transition"
            >

              <div className="text-red-400 text-xl md:text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div className="text-left">

                <p className="text-gray-400 text-xs md:text-sm">
                  {item.title}
                </p>

                <p className="font-semibold text-sm md:text-base break-all">
                  {item.value}
                </p>

              </div>

            </motion.div>
          )

          return item.clickable ? (
            <a key={i} href={item.link} target="_blank">
              {Card}
            </a>
          ) : (
            <div key={i}>
              {Card}
            </div>
          )

        })}

      </div>

      {/* Interactive Map */}

      <div className="w-full h-[260px] md:h-[400px] rounded-xl overflow-hidden border border-gray-800 shadow-lg">

        <iframe
          src="https://maps.google.com/maps?q=16.355764225954907,80.87578125996473&z=15&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        />

      </div>

    </section>
  )
}