"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar({ setSection }: any) {

  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", value: "" },
    { name: "About", value: "about" },
    { name: "Value", value: "value" },
    { name: "Projects", value: "projects" },
    { name: "Experience", value: "experience" },
    { name: "Skills", value: "skills" },
    { name: "Teaching", value: "teaching" },
    { name: "Education", value: "education" },
    { name: "Resumes", value: "resumes" },
    { name: "Achievements", value: "achievements" },
    { name: "Contact", value: "contact" }
  ]

  return (

    <header className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">

      <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-full px-6 md:px-10 py-3 md:py-4 shadow-xl max-w-6xl w-full">

        {/* Top Row */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <span
            onClick={() => {
              setSection("")
              setActive("")
            }}
            className="font-semibold text-white cursor-pointer"
          >
            NG
          </span>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">

            {links.map((link) => (

              <motion.button
                key={link.name}
                onClick={() => {
                  setSection(link.value)
                  setActive(link.value)
                }}
                className="relative text-gray-300 hover:text-white transition"
              >

                {link.name}

                {active === link.value && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500"
                  />
                )}

              </motion.button>

            ))}

          </nav>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col mt-4 gap-4 md:hidden">

            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setSection(link.value)
                  setActive(link.value)
                  setMenuOpen(false)
                }}
                className="text-gray-300 hover:text-white text-left"
              >
                {link.name}
              </button>
            ))}

          </div>
        )}

      </div>

    </header>
  )
}