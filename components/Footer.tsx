"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"

export default function Footer() {

  return (

    <footer className="mt-24 md:mt-32 border-t border-gray-800 py-10 md:py-12 px-6 sm:px-8">

      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}

        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Naveen Gandham
        </h2>

        <p className="text-gray-400 text-sm md:text-base mb-6">
          Full Stack Developer | Technical Trainer
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-5 md:gap-6 text-lg md:text-xl text-gray-400 mb-8">

          <a
            href="https://github.com/naveen-gandham"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/naveen-gandham-83372b184"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:naveengandham0404@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>


        </div>

        {/* Copyright */}

        <p className="text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Naveen Gandham. All rights reserved.
        </p>

      </div>

    </footer>

  )
}