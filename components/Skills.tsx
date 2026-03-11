"use client"

import {
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaCode,
  FaBrain
} from "react-icons/fa"

import {
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas
} from "react-icons/si"

export default function Skills() {

  return (

    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 md:mb-20">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">


        {/* Programming Languages */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            Programming Languages
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <FaJava className="text-orange-500 text-xl"/>
              <span>Java</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <FaPython className="text-yellow-400 text-xl"/>
              <span>Python</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <FaCode className="text-blue-400 text-xl"/>
              <span>C / C++</span>
            </div>

            <div className="flex items-center gap-3 animate-float1">
              <SiJavascript className="text-yellow-300 text-xl"/>
              <span>JavaScript</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <SiTypescript className="text-blue-500 text-xl"/>
              <span>TypeScript</span>
            </div>

          </div>

        </div>


        {/* Frontend Development */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            Frontend Development
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <FaReact className="text-cyan-400 text-xl"/>
              <span>React.js</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <FaAngular className="text-red-500 text-xl"/>
              <span>Angular</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <FaCode className="text-purple-400 text-xl"/>
              <span>HTML / CSS / Tailwind</span>
            </div>

          </div>

        </div>


        {/* Backend & Databases */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            Backend & Databases
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <SiDotnet className="text-purple-500 text-xl"/>
              <span>.NET / ASP.NET Core</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <FaNodeJs className="text-green-500 text-xl"/>
              <span>Node.js</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <FaDatabase className="text-blue-400 text-xl"/>
              <span>SQL</span>
            </div>

            <div className="flex items-center gap-3 animate-float1">
              <SiMysql className="text-blue-500 text-xl"/>
              <span>MySQL</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <SiPostgresql className="text-blue-300 text-xl"/>
              <span>PostgreSQL</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <SiMongodb className="text-green-400 text-xl"/>
              <span>MongoDB</span>
            </div>

          </div>

        </div>


        {/* AI & Machine Learning */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            AI & Machine Learning
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <FaBrain className="text-pink-400 text-xl"/>
              <span>Machine Learning</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <SiTensorflow className="text-orange-400 text-xl"/>
              <span>TensorFlow</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <SiPytorch className="text-red-400 text-xl"/>
              <span>PyTorch</span>
            </div>

            <div className="flex items-center gap-3 animate-float1">
              <SiNumpy className="text-blue-300 text-xl"/>
              <span>NumPy</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <SiPandas className="text-yellow-400 text-xl"/>
              <span>Pandas</span>
            </div>

          </div>

        </div>


        {/* Tools & DevOps */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            Tools & DevOps
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <FaGithub className="text-white text-xl"/>
              <span>Git & GitHub</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <SiDocker className="text-blue-400 text-xl"/>
              <span>Docker</span>
            </div>

          </div>

        </div>


        {/* Teaching Expertise */}

        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">

          <h3 className="text-lg md:text-xl font-semibold mb-6 text-red-500">
            Teaching Expertise
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 animate-float1">
              <FaJava className="text-orange-500 text-xl"/>
              <span>Java Training</span>
            </div>

            <div className="flex items-center gap-3 animate-float2">
              <FaPython className="text-yellow-400 text-xl"/>
              <span>Python Training</span>
            </div>

            <div className="flex items-center gap-3 animate-float3">
              <FaCode className="text-blue-400 text-xl"/>
              <span>DSA & Problem Solving</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}