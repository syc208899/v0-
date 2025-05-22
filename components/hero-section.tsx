"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { Clock, TrendingUp, Coins, MessageSquare } from "lucide-react"

export default function HeroSection() {
  const isMobile = useMobile()
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // 只在非移动端尝试播放视频
    if (!isMobile && videoRef.current) {
      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // 视频成功播放
          })
          .catch((error) => {
            console.log("视频自动播放失败:", error)
            setVideoError(true)
          })
      }
    }
  }, [isMobile])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-pattern">
      <div className="container px-4 md:px-6 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-600"
            >
              旧房换新颜
              <br />
              秒售省时间
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-800 max-w-xl"
            >
              焕房派的售前美化，能让房源开口说话
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4"
            >
              <StatsCard
                icon={<Clock className="h-6 w-6 text-blue-600" />}
                title="平均售卖周期"
                value="45 天"
                delay={0.8}
              />

              <StatsCard
                icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
                title="带看转化率"
                value="↑30%"
                delay={1.0}
              />

              <StatsCard
                icon={<MessageSquare className="h-6 w-6 text-blue-600" />}
                title="房源咨询量"
                value="↑23%"
                delay={1.1}
              />

              <StatsCard icon={<Coins className="h-6 w-6 text-purple-600" />} title="佣金立结" value="1%" delay={1.2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a
                href="#call-to-action"
                className="inline-block relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 text-lg px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#call-to-action")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="relative z-10">立即赚取佣金</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
              </a>
            </motion.div>
          </div>

          {/* 只在非移动端显示视频 */}
          {!isMobile && (
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* 视频展示框架 - 更大更美观的设计 */}
                  <div className="relative w-full max-w-[300px] md:max-w-[320px] rounded-xl overflow-hidden shadow-xl">
                    {/* 视频加载前的占位内容 */}
                    {!videoLoaded && !videoError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* 视频 */}
                    <div className="aspect-[1/1] relative">
                      <video
                        ref={videoRef}
                        src="/videos/huanfang-animation.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/images/logo-detailed.png"
                        onLoadedData={() => setVideoLoaded(true)}
                        onError={() => setVideoError(true)}
                        style={{ opacity: videoLoaded ? 1 : 0 }}
                      />
                    </div>

                    {/* 简洁的边框装饰 */}
                    <div className="absolute inset-0 pointer-events-none border-2 border-white/20 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function StatsCard({
  icon,
  title,
  value,
  delay,
}: {
  icon: React.ReactNode
  title: string
  value: string
  delay: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // 特殊处理"佣金立结"标题
  const renderTitle = () => {
    if (title === "佣金立结") {
      return (
        <p className="text-gray-600 text-sm mb-1">
          佣金
          <br />
          立结
        </p>
      )
    }
    return <p className="text-gray-600 text-sm mb-1">{title}</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-all"
    >
      <div className="rounded-full bg-gray-50 p-3 flex items-center justify-center">{icon}</div>
      <div className="w-full">
        {renderTitle()}
        <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </motion.div>
  )
}
