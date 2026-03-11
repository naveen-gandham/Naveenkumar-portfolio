"use client"

export default function Resumes() {
  return (

    <section className="py-24 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Download My Resumes
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="/resumes/naveen-general.pdf"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-medium transition"
        >
          General Resume
        </a>

        <a
          href="/resumes/naveen-java.pdf"
          target="_blank"
          className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-4 rounded-lg font-medium transition"
        >
          Java / FullStack Resume
        </a>

        <a
          href="/resumes/naveen-ai-trainer.pdf"
          target="_blank"
          className="border border-gray-600 hover:border-white px-6 py-4 rounded-lg font-medium transition"
        >
          AI Trainer Resume
        </a>

      </div>

    </section>

  )
}