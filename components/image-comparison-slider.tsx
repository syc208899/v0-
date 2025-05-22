"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ImageComparisonSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "auto"
  borderStyle?: "simple" | "fancy" | "gradient"
}

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "改造前",
  afterLabel = "改造后",
  aspectRatio = "4/3",
  borderStyle = "gradient",
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const calculateSliderPosition = (clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect()
      const position = ((clientX - left) / width) * 100
      return Math.min(Math.max(position, 0), 100)
    }
    return sliderPosition
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newPosition = calculateSliderPosition(e.clientX)
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      const newPosition = calculateSliderPosition(e.touches[0].clientX)
      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  // 初始动画效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderPosition(30)
      setTimeout(() => {
        setSliderPosition(70)
        setTimeout(() => {
          setSliderPosition(50)
        }, 600)
      }, 600)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // 根据borderStyle选择边框样式
  const getBorderClasses = () => {
    switch (borderStyle) {
      case "fancy":
        return "rounded-lg shadow-lg border-2 border-white ring-2 ring-gray-200"
      case "gradient":
        return "rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-200 via-white to-orange-200 overflow-hidden"
      case "simple":
      default:
        return "rounded-lg shadow-md border border-gray-200"
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${getBorderClasses()}`}
      style={{ aspectRatio: aspectRatio }}
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white text-sm px-3 py-1.5 m-3 rounded-full shadow-md">
            {afterLabel}
          </div>
        </div>
      </div>

      {/* Before Image (Partial width based on slider) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <div className="relative w-full h-full">
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={beforeLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm px-3 py-1.5 m-3 rounded-full shadow-md">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute inset-y-0 left-0 w-full"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer border-2 border-gray-100">
          <div className="text-blue-600 text-xs font-medium">滑动</div>
        </div>
      </div>

      {/* 装饰性边框效果 */}
      {borderStyle === "gradient" && (
        <div className="absolute inset-0 pointer-events-none border-4 border-transparent bg-gradient-to-r from-blue-500 via-transparent to-orange-500 opacity-20 rounded-lg"></div>
      )}
    </div>
  )
}
