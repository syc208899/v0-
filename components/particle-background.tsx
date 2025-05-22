"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // House silhouette coordinates
    const houses = [
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.7,
        scale: 0.5 + Math.random() * 0.3,
        opacity: 0.05 + Math.random() * 0.05,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.8,
        scale: 0.4 + Math.random() * 0.3,
        opacity: 0.03 + Math.random() * 0.05,
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.75,
        scale: 0.5 + Math.random() * 0.3,
        opacity: 0.04 + Math.random() * 0.05,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.85,
        scale: 0.3 + Math.random() * 0.3,
        opacity: 0.03 + Math.random() * 0.05,
      },
    ]

    // Particle properties
    const particleCount = 80
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, 255, ${
          Math.random() * 0.2 + 0.1
        })`,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
      })
    }

    // Draw house silhouette
    const drawHouse = (x: number, y: number, scale: number, opacity: number) => {
      ctx.fillStyle = `rgba(100, 180, 255, ${opacity})`
      ctx.strokeStyle = `rgba(100, 180, 255, ${opacity * 1.5})`
      ctx.lineWidth = 1

      const baseWidth = 100 * scale
      const baseHeight = 60 * scale
      const roofHeight = 40 * scale

      // House base
      ctx.beginPath()
      ctx.rect(x - baseWidth / 2, y - baseHeight, baseWidth, baseHeight)
      ctx.fill()
      ctx.stroke()

      // Roof
      ctx.beginPath()
      ctx.moveTo(x - baseWidth / 2 - 10 * scale, y - baseHeight)
      ctx.lineTo(x, y - baseHeight - roofHeight)
      ctx.lineTo(x + baseWidth / 2 + 10 * scale, y - baseHeight)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Window
      ctx.fillStyle = `rgba(240, 240, 255, ${opacity * 2})`
      ctx.beginPath()
      ctx.rect(x - baseWidth / 4, y - baseHeight / 1.5, baseWidth / 4, baseHeight / 4)
      ctx.rect(x + baseWidth / 12, y - baseHeight / 1.5, baseWidth / 4, baseHeight / 4)
      ctx.fill()
      ctx.stroke()

      // Door
      ctx.beginPath()
      ctx.rect(x - baseWidth / 8, y - baseHeight / 3, baseWidth / 4, baseHeight / 3)
      ctx.fill()
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw house silhouettes
      houses.forEach((house) => {
        drawHouse(house.x, house.y, house.scale, house.opacity)
      })

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(100, 180, 255, ${0.03 * (1 - distance / 100)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-sky-50 to-sky-100" />
}
