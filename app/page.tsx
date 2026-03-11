"use client"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Impact from "../components/Impact"
import About from "../components/About"
import Value from "../components/Value"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import SkillRadar from "../components/SkillRadar"
import Teaching from "../components/Teaching"
import Education from "../components/Education"
import Resumes from "../components/Resumes"
import Achievements from "../components/Achievements"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ParticlesBackground from "../components/ParticlesBackground"
import GridBackground from "../components/GridBackground"

export default function Home() {

  return (
    <main className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">

      {/* Background Effects */}
      <ParticlesBackground />
      <GridBackground />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-32 space-y-28">

        <Hero />

        <Impact />

        <About />

        <Value />

        <Projects />

        <Experience />

        <SkillRadar />

        <Skills />

        <Teaching />

        <Education />

        <Resumes />

        <Achievements />

        <Contact />

      </div>

      {/* Footer */}
      <Footer />

    </main>
  )
}