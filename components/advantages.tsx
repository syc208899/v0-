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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">
            售前美化Q&A
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QAItem
              question="售前美化具体包含哪些内容？"
              answer="包括但不限于空间改造（如拆除隔断）、硬件更换（灯具/开关）、墙面粉刷、深度保洁、家具及软装配饰等来提升居住感！"
              delay={0.9}
            />
            <QAItem
              question="美化后的售卖周期是多久？"
              answer="焕房派平均售卖周期为43天，远低于市场平均水平，大幅提高您的资金周转效率。"
              delay={1.0}
            />
            <QAItem
              question="美化费用由谁承担？"
              answer="业主全程不需要支付任何费用，只需在成交后正常支付中介费即可！"
              delay={1.1}
            />
            <QAItem
              question="如何保障资金安全？"
              answer="房款全部转到业主银行卡之后再转给公司（不过户不公证）！"
              delay={1.2}
            />
            <QAItem
              question="付定金吗？合同签多久？"
              answer="售前美化利润较低，不付定金！签约时间根据价格、不利因素等情况一般为3-6个月！"
              delay={1.3}
            />
            <QAItem
              question="如果卖不掉怎么办？"
              answer="焕房派的核心原则是极速售卖，并不是极致利润，所以我们会对售卖周期有严格的把控！如果合同期内没卖掉，硬装部分留下，其他拿走！"
              delay={1.4}
            />
          </div>
        </motion.div>
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

function QAItem({
  question,
  answer,
  delay,
}: {
  question: string
  answer: string
  delay: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay }}
    >
      <div
        className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-4 flex justify-between items-center">
          <h4 className="font-medium text-gray-800">{question}</h4>
          <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
          <div className="p-4 pt-0 text-gray-700 text-sm border-t border-gray-100">{answer}</div>
        </div>
      </div>
    </motion.div>
  )
}
