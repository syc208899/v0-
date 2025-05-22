"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Network, Clock, Upload, Users, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

export default function BusinessModel() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("business-model")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="business-model" className="py-20 relative bg-pattern-light">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            什么是售前美化?
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg">
            通过专业的美化翻新及视觉包装服务，让房子在最短时间内以最佳状态呈现给买家，并通过整合全城中介资源，快速销售房产
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mt-6">
            更高佣金！更快成交！房主满意！客户满意！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16"
        >
          <ProcessStep icon={<Network className="h-6 w-6" />} title="旧房" delay={0.2} isFirst />
          <ProcessStep icon={<Clock className="h-6 w-6" />} title="15 天改造" delay={0.4} />
          <ProcessStep icon={<Upload className="h-6 w-6" />} title="焕新上线" delay={0.6} />
          <ProcessStep icon={<Users className="h-6 w-6" />} title="全城联卖" delay={0.8} />
          <ProcessStep icon={<Award className="h-6 w-6" />} title="集中开盘" delay={1.0} isLast />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">
            "美"与"不美"成交结果大不相同!
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">普通房源</h4>
                <div className="grid grid-cols-1 gap-4">
                  <ComparisonItem title="客户吸引力" description="平平无奇，难留印象" isPositive={false} />
                  <ComparisonItem title="带看转化率" description="客户犹豫，决策缓慢" isPositive={false} />
                  <ComparisonItem title="成交周期" description="漫长等待，占用精力" isPositive={false} />
                  <ComparisonItem title="议价空间" description="客户挑剔，压价常见" isPositive={false} />
                  <ComparisonItem title="您的佣金" description="常规水平" isPositive={false} />
                  <ComparisonItem title="客户口碑" description="一般服务体验" isPositive={false} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  售前美化房源 (您的新优势!)
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <ComparisonItem title="客户吸引力" description="眼前一亮，过目不忘，主动咨询！" isPositive={true} />
                  <ComparisonItem title="带看转化率" description="一见倾心，快速锁定，当场下定！" isPositive={true} />
                  <ComparisonItem title="成交周期" description="周期锐减，资金回笼快，效率翻倍！" isPositive={true} />
                  <ComparisonItem title="议价空间" description="价值凸显，客户认可，轻松议价！" isPositive={true} />
                  <ComparisonItem title="您的佣金" description="1%佣金立结 + 高额的营销费用" isPositive={true} />
                  <ComparisonItem title="客户口碑" description="专业高效，客户超满意，转介绍不断！" isPositive={true} />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessStep({
  icon,
  title,
  delay,
  isFirst = false,
  isLast = false,
}: {
  icon: React.ReactNode
  title: string
  delay: number
  isFirst?: boolean
  isLast?: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay }}
      className="relative flex flex-col items-center"
    >
      {!isFirst && (
        <div className="absolute top-8 -left-4 w-8 h-0.5 hidden md:flex md:items-center md:justify-center">
          <ArrowRight className="text-blue-500 w-8 h-8" />
        </div>
      )}
      {!isLast && (
        <div className="absolute top-8 -right-4 w-8 h-0.5 hidden md:flex md:items-center md:justify-center">
          <ArrowRight className="text-purple-500 w-8 h-8" />
        </div>
      )}
      <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mb-3">
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-gray-700">{icon}</div>
        </div>
      </div>
      <p className="text-gray-800 font-medium">{title}</p>
    </motion.div>
  )
}

function ComparisonItem({
  title,
  description,
  isPositive,
}: {
  title: string
  description: string
  isPositive: boolean
}) {
  return (
    <li className="flex items-start gap-3">
      <div
        className={`mt-1 rounded-full p-1 ${isPositive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
      >
        {isPositive ? <Award className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className={`text-sm ${isPositive ? "text-blue-700" : "text-gray-600"}`}>{description}</p>
      </div>
    </li>
  )
}
