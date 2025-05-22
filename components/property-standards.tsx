"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ImageComparisonSlider from "./image-comparison-slider"

export default function PropertyStandards() {
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

    const element = document.getElementById("property-standards")
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
    <section id="property-standards" className="py-20 relative house-bg">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            什么样的房源，最适合"美化"出奇迹?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white border-gray-200 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6">
                  适合美化的房源标准
                </h3>
                <ul className="space-y-4">
                  <StandardItem text="空置房/租期结束房" isPositive={true} />
                  <StandardItem text="热点小区热卖户型成交量高" isPositive={true} />
                  <StandardItem text="价格相近于市场价" isPositive={true} />
                  <StandardItem text="装修略旧但结构好的房" isPositive={true} />
                  <StandardItem text="硬件条件好/采光/朝向/户型有亮点的房" isPositive={true} />
                  <StandardItem text="业主出售动机明确/诚心出售" isPositive={true} />
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-white border-gray-200 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-600 mb-6 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  慎入房源
                </h3>
                <ul className="space-y-4">
                  <StandardItem text="严重挡光" isPositive={false} />
                  <StandardItem text="靠近高压线" isPositive={false} />
                  <StandardItem text="对烟冲" isPositive={false} />
                  <StandardItem text="靠近火葬场" isPositive={false} />
                  <StandardItem text="临街吵闹" isPositive={false} />
                  <StandardItem text="30年以上的房龄" isPositive={false} />
                  <StandardItem text="小区没有成交量" isPositive={false} />
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white border-gray-200 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  禁拿房源
                </h3>
                <ul className="space-y-4">
                  <StandardItem text="产权有问题，不能办理贷款" isPositive={false} />
                  <StandardItem text="产权人征信不良" isPositive={false} />
                  <StandardItem text="债务纠纷" isPositive={false} />
                  <StandardItem text="顶楼无阁楼" isPositive={false} />
                  <StandardItem text="双重重大缺陷" isPositive={false} />
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">
            缺陷房改造案例
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-800">暗厅改明厅</h4>
              </div>
              <div className="p-4">
                <ImageComparisonSlider
                  beforeImage="/images/living-room-before.jpeg"
                  afterImage="/images/living-room-after.jpeg"
                  beforeLabel="改造前"
                  afterLabel="改造后"
                  aspectRatio="4/3"
                  borderStyle="gradient"
                />
              </div>
              <div className="p-4 text-gray-700 text-sm">
                通过外扩阳台增加采光面积，调整光源布局，使原本昏暗的客厅变得明亮通透，大幅提升空间感和舒适度。
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-800">老旧厨房翻新</h4>
              </div>
              <div className="p-4">
                <ImageComparisonSlider
                  beforeImage="/images/kitchen-before.jpeg"
                  afterImage="/images/kitchen-after.jpeg"
                  beforeLabel="改造前"
                  afterLabel="改造后"
                  aspectRatio="4/3"
                  borderStyle="gradient"
                />
              </div>
              <div className="p-4 text-gray-700 text-sm">
                更换台面和橱柜面板，添加现代化灯具，重新铺设墙砖，让老旧厨房焕然一新，成为房源亮点。
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StandardItem({
  text,
  isPositive,
}: {
  text: string
  isPositive: boolean
}) {
  return (
    <li className="flex items-start gap-3">
      <div
        className={`mt-0.5 rounded-full p-1 ${isPositive ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}`}
      >
        {isPositive ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </div>
      <p className="text-gray-700">{text}</p>
    </li>
  )
}
