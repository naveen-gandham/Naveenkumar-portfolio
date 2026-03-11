"use client"

import { useEffect, useRef, useState } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // NEW: track hero hover focus
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const PARTICLE_COUNT = 80

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // NEW: listen to hero hover events
    const focus = () => setFocused(true)
    const blur = () => setFocused(false)

    window.addEventListener("hero-focus", focus)
    window.addEventListener("hero-blur", blur)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // NEW: change speed depending on focus
      const speedMultiplier = focused ? 2 : 1
      const connectionDistance = focused ? 200 : 120

      particles.forEach((p) => {
        p.x += p.vx * speedMultiplier
        p.y += p.vy * speedMultiplier

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "#ef4444"
        ctx.fill()
      })

      particles.forEach((p1) => {
        particles.forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)

            ctx.strokeStyle = focused
              ? "rgba(239,68,68,0.35)"
              : "rgba(239,68,68,0.15)"

            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("hero-focus", focus)
      window.removeEventListener("hero-blur", blur)
    }
  }, [focused])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  )
}