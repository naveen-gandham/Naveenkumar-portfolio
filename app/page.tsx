"use client"

import { useState } from "react"

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
import PageTransition from "../components/PageTransition"
import GridBackground from "../components/GridBackground"
import ScrollProgress from "../components/ScrollProgress"

export default function Home() {

  const [section, setSection] = useState("")

  return (
    <main className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">

      {/* Animated Particle Background */}
      <ParticlesBackground />
      <GridBackground />
      {/* Navbar */}
      <Navbar setSection={setSection} />
      <ScrollProgress />
      <div className="pt-24">

        {/* HOME */}
        {section === "" && (
          <PageTransition>
            <>
              <Hero />
              <Impact />
            </>
          </PageTransition>
        )}

        {/* ABOUT */}
        {section === "about" && (
          <PageTransition>
            <About />
          </PageTransition>
        )}

        {/* VALUE */}
        {section === "value" && (
          <PageTransition>
            <Value />
          </PageTransition>
        )}

        {/* PROJECTS */}
        {section === "projects" && (
          <PageTransition>
            <Projects />
          </PageTransition>
        )}

        {/* EXPERIENCE */}
        {section === "experience" && (
          <PageTransition>
            <Experience />
          </PageTransition>
        )}

        {/* SKILLS */}
        {section === "skills" && (
          <PageTransition>
            <>
              <SkillRadar />
              <Skills />
            </>
          </PageTransition>
        )}

        {/* TEACHING */}
        {section === "teaching" && (
          <PageTransition>
            <Teaching />
          </PageTransition>
        )}

        {/* EDUCATION */}
        {section === "education" && (
          <PageTransition>
            <Education />
          </PageTransition>
        )}
{/* RESUMES */}
{section === "resumes" && (
  <PageTransition>
    <Resumes />
  </PageTransition>
)}

        {/* ACHIEVEMENTS */}
        {section === "achievements" && (
          <PageTransition>
            <Achievements />
          </PageTransition>
        )}

        {/* CONTACT */}
        {section === "contact" && (
          <PageTransition>
            <Contact />
          </PageTransition>
        )}

      </div>

      {/* Footer */}
      <Footer />

    </main>
  )
}