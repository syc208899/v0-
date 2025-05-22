"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, MessageSquare } from "lucide-react"
import ImageComparisonSlider from "./image-comparison-slider"

export default function CaseStudies() {
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

    const element = document.getElementById("case-studies")
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
    <section id="case-studies" className="py-20 relative bg-pattern-light">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            看同行如何通过"美化"轻松开单!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            agent="韩经理 (某知名中介)"
            property="中铁丁香水岸 77.37㎡ 2室2厅"
            problem="挂牌大于1年只有4组带看"
            solution="13天焕新，打造轻奢风格"
            days={{ before: 421, after: 28 }}
            commission={{ extra: "6900+1500现金奖" }}
            feedback="开盘当天4组意向客户，第二周二看后成交！"
            delay={0.2}
            beforeImage="/images/living-room-empty.jpeg"
            afterImage="/images/living-room-furnished.jpeg"
          />

          <CaseStudyCard
            agent="李顾问 (独立经纪人)"
            property="万科翡翠别墅 149㎡ 4室2厅"
            problem="别墅园区，带基础装修，小区成交量偏低"
            solution="调整空间布局，加入软装家具饰品"
            days={{ before: 733, after: 63 }}
            commission={{ extra: "14700" }}
            feedback="业主非常满意，推荐了两位卖房邻居！"
            delay={0.4}
            beforeImage="/images/fireplace-room-before.jpeg"
            afterImage="/images/fireplace-room-after.jpeg"
          />

          <CaseStudyCard
            agent="计店长 (连锁门店)"
            property="万科明天广场 60.55㎡ 1室1厅"
            problem="小面积户型，长期出租"
            solution="11天改造，奶油风设计"
            days={{ before: 193, after: 37 }}
            commission={{ extra: "5900+4000" }}
            feedback="没想到这么快就卖出去了，比周边同户型溢价6%！"
            delay={0.6}
            beforeImage="/images/yellow-room-before.jpeg"
            afterImage="/images/yellow-room-after.jpeg"
          />
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  agent,
  property,
  problem,
  solution,
  days,
  commission,
  feedback,
  delay,
  beforeImage,
  afterImage,
}: {
  agent: string
  property: string
  problem: string
  solution: string
  days: { before: number; after: number }
  commission: { extra: string | number }
  feedback: string
  delay: number
  beforeImage?: string
  afterImage?: string
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
    >
      <Card className="bg-white border-gray-200 shadow-lg h-full overflow-hidden hover:shadow-xl transition-all rounded-lg">
        <div className="relative aspect-[4/3]">
          {beforeImage && afterImage ? (
            <div className="p-3">
              <ImageComparisonSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel="美化前"
                afterLabel="美化后"
                aspectRatio="4/3"
                borderStyle="gradient"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex">
              <div className="w-1/2 relative overflow-hidden">
                <div className="text-center p-4 flex items-center justify-center h-full">
                  <div>
                    <p className="text-gray-500 text-sm mb-2">美化前</p>
                    <p className="text-xs text-gray-400">建议图片尺寸: 800x600px</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 relative overflow-hidden">
                <div className="text-center p-4 flex items-center justify-center h-full bg-blue-50">
                  <div>
                    <p className="text-blue-600 text-sm mb-2">美化后</p>
                    <p className="text-xs text-blue-400">建议图片尺寸: 800x600px</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-1">{agent}</h3>
            <p className="text-gray-600 text-sm">{property}</p>
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">房源痛点：</p>
              <p className="text-sm text-gray-800">{problem}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">焕房派介入：</p>
              <p className="text-sm text-blue-600 font-medium">{solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">经纪人成果：</h4>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2 flex items-center justify-center text-blue-600">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-gray-600">成交周期：</p>
                <p className="text-sm">
                  从 <span className="line-through text-gray-400">{days.before}天</span> →
                  <span className="text-blue-600 font-medium"> {days.after}天！</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-50 p-2 flex items-center justify-center text-purple-600">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-gray-600">佣金增长：</p>
                <p className="text-sm">
                  额外多赚 <span className="text-purple-600 font-medium">{commission.extra}元！</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2 flex items-center justify-center text-blue-600">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-gray-600">客户反馈：</p>
                <p className="text-sm text-gray-800 italic">"{feedback}"</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
