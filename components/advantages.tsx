"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Cpu, Paintbrush, FileCheck, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("advantages")
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
    <section id="advantages" className="py-20 relative bg-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            焕房派美化联卖的六大核心优势
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AdvantageCard
            icon={<Clock className="h-8 w-8" />}
            title="省时省心省力省钱"
            description="全渠道推广，专属服务，资金及产权安全，让您的房源销售更高效"
            delay={0.2}
          />

          <AdvantageCard
            icon={<Shield className="h-8 w-8" />}
            title="六重保障"
            description="保成交 | 保价格 | 保品质 | 保安全 | 保服务 | 保专业"
            delay={0.3}
            keywords={["保成交", "保价格", "保品质", "保安全", "保服务", "保专业"]}
          />

          <AdvantageCard
            icon={<Cpu className="h-8 w-8" />}
            title="AI 工具助力成交"
            description="VR看房 | 智能密码锁 | 朋友圈素材一键转发 | 全城航拍图 | 短视频直播获客"
            delay={0.4}
            keywords={["VR看房", "智能密码锁", "朋友圈素材", "航拍图", "短视频直播"]}
          />

          <AdvantageCard
            icon={<Paintbrush className="h-8 w-8" />}
            title="专注且专业"
            description="我们不卖房子，只做房屋【化妆师】和【营销策划师】！专注于房屋美化和营销推广"
            delay={0.5}
          />

          <AdvantageCard
            icon={<FileCheck className="h-8 w-8" />}
            title="六大服务承诺"
            description="规则至上 | 信息保密 | 洗客必罚 | 满佣保障 | 极速付佣 | 违约必惩"
            delay={0.6}
            keywords={["规则至上", "信息保密", "洗客必罚", "满佣保障", "极速付佣", "违约必惩"]}
          />

          <AdvantageCard
            icon={<Award className="h-8 w-8" />}
            title='从"璞玉"到"爆款"'
            description="专业诊断与策略定制 | 高效软装与空间焕新 | 顶级视觉呈现 (专业摄影/VR)"
            delay={0.7}
            keywords={["专业诊断", "空间焕新", "顶级视觉呈现"]}
          />
        </div>
      </div>
    </section>
  )
}

function AdvantageCard({
  icon,
  title,
  description,
  delay,
  keywords = [],
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  keywords?: string[]
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // 使用黑色文本而不是高亮关键词
  const renderDescription = () => {
    return <p className="text-gray-900 text-sm">{description}</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay }}
    >
      <Card className="bg-white border-gray-200 shadow-md h-full hover:shadow-lg transition-all group">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-3 w-16 h-16 flex items-center justify-center mb-4 text-gray-700 group-hover:text-purple-600 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-3">
            {title}
          </h3>
          {renderDescription()}
        </CardContent>
      </Card>
    </motion.div>
  )
}
