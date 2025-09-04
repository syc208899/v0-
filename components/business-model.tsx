"use client"

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
            焕房派的售前美化！
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg">
            携手盛世大宅和海天装饰，通过专业的美化翻新及视觉包装服务，让房子在最短时间内以最佳状态呈现给买家，并通过整合全城中介资源，快速销售房产
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
          className="mb-16"
        >
          {/* 电脑端使用网格布局 */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm text-center">
              "美"与"不美"成交结果大不相同!
            </h3>
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm text-center">
              选对"妆容"，才能快速出嫁！
            </h3>
          </div>

          {/* 手机端第一个标题 */}
          <div className="md:hidden mb-6">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm text-center">
              "美"与"不美"成交结果大不相同!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 普通房源 */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">普通房源</h4>
                <div className="space-y-3">
                  <ComparisonItem title="客户吸引力" description="平平无奇，难留印象" isPositive={false} />
                  <ComparisonItem title="带看转化率" description="客户犹豫，决策缓慢" isPositive={false} />
                  <ComparisonItem title="成交周期" description="漫长等待，占用精力" isPositive={false} />
                  <ComparisonItem title="议价空间" description="客户挑剔，压价常见" isPositive={false} />
                  <ComparisonItem title="您的佣金" description="常规水平" isPositive={false} />
                  <ComparisonItem title="客户口碑" description="一般服务体验" isPositive={false} />
                </div>
              </CardContent>
            </Card>

            {/* 售前美化房源 */}
            <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg">
              <CardContent className="p-3">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  售前美化房源 (您的新优势!)
                </h4>
                <div className="space-y-3">
                  <ComparisonItem title="客户吸引力" description="眼前一亮，过目不忘，主动咨询！" isPositive={true} />
                  <ComparisonItem title="带看转化率" description="一见倾心，快速锁定，当场下定！" isPositive={true} />
                  <ComparisonItem title="成交周期" description="周期锐减，资金回笼快，效率翻倍！" isPositive={true} />
                  <ComparisonItem title="议价空间" description="价值凸显，客户认可，轻松议价！" isPositive={true} />
                  <ComparisonItem title="您的佣金" description="1%佣金立结 + 高额的营销费用" isPositive={true} />
                  <ComparisonItem title="客户口碑" description="专业高效，客户超满意，转介绍不断！" isPositive={true} />
                </div>
              </CardContent>
            </Card>

            {/* 手机端第二个标题 - 在全屋整装前显示，间距调整为mb-4 */}
            <div className="md:hidden mb-4 col-span-full">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm text-center">
                选对"妆容"，才能快速出嫁！
              </h3>
            </div>

            {/* 全屋整装 */}
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">全屋整装</h4>
                <div className="space-y-3">
                  <DecorationComparisonItem
                    title="业主接受度/签约难度"
                    description="模式重，价格要求高，可签房源少，业主接受度低，清水房源越来越少！"
                    isPositive={false}
                  />
                  <DecorationComparisonItem
                    title="投入成本"
                    description="重资产投入，风险集中！ (通常为房价10%-15%以上）！"
                    isPositive={false}
                  />
                  <DecorationComparisonItem
                    title="改造/准备周期"
                    description="漫长！市面上一般为45天 (如果追求品质2 个月+是必然)！"
                    isPositive={false}
                  />
                  <DecorationComparisonItem
                    title="设计与品味"
                    description="固定设计，风格单一，极易让客户产生审美疲劳！"
                    isPositive={false}
                  />
                  <DecorationComparisonItem
                    title="售卖速度/签约时长"
                    description="由于受装修时间影响，签约周期一般 1 年，装修后成交周期锐减！"
                    isPositive={false}
                  />
                  <DecorationComparisonItem
                    title="对房价影响"
                    description="长期看房产价值提升，但短期售价受市场波动影响大，高投入未必能完全转化为即时溢价！"
                    isPositive={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 售前美化房源 */}
            <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg">
              <CardContent className="p-3">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  售前美化房源 (您的卖房新选择)
                </h4>
                <div className="space-y-3">
                  <DecorationComparisonItem
                    title="业主接受度"
                    description="门槛低，业主接受度高，可签房源多，签约更容易！"
                    isPositive={true}
                  />
                  <DecorationComparisonItem
                    title="投入成本"
                    description="精准投入，高性价比！(通常为房价1%-7%)"
                    isPositive={true}
                  />
                  <DecorationComparisonItem
                    title="改造/准备周期"
                    description="极速焕新！抓住最佳销售时机 (通常 1-2 周上线)！"
                    isPositive={true}
                  />
                  <DecorationComparisonItem
                    title="设计与品味"
                    description="盛世大宅设计师总监操刀，结合市场主流审美，打造温馨、高级的'样板间'效果！"
                    isPositive={true}
                  />
                  <DecorationComparisonItem
                    title="售卖速度/签约时长"
                    description="大幅加快！成交周期锐减！签约3-6个月！"
                    isPositive={true}
                  />
                  <DecorationComparisonItem
                    title="对房价影响"
                    description="短期溢价效果显著！ (平均提升5%-15%+) ，直接作用于短期成交价，效果立竿见影！"
                    isPositive={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">
            售前美化Q&A
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QAItem
              question="售前美化具体包含哪些内容？"
              answer="包括但不限于空间改造（如拆除隔断）、硬件更换（灯具/开关）、墙面粉刷、深度保洁、家具及软装配饰等来提升居住感！"
              delay={1.1}
            />
            <QAItem
              question="美化后的售卖周期是多久？"
              answer="焕房派平均售卖周期为43天，远低于市场平均水平，大幅提高您的资金周转效率。"
              delay={1.2}
            />
            <QAItem
              question="美化费用由谁承担？"
              answer="业主全程不需要支付任何费用，只需在成交后正常支付中介费即可！"
              delay={1.3}
            />
            <QAItem
              question="如何保障资金安全？"
              answer="房款全部转到业主银行卡之后再转给公司（不过户不公证）！"
              delay={1.4}
            />
            <QAItem
              question="付定金吗？合同签多久？"
              answer="售前美化利润较低，不付定金！签约时间根据价格、不利因素等情况一般为3-6个月！"
              delay={1.5}
            />
            <QAItem
              question="如果卖不掉怎么办？"
              answer="焕房派的核心原则是极速售卖，并不是极致利润，所以我们会对售卖周期有严格的把控！如果合同期内没卖掉，硬装部分留下，其他拿走！"
              delay={1.6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessStep({ icon, title, delay, isFirst = false, isLast = false }) {
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

function ComparisonItem({ title, description, isPositive }) {
  return (
    <div className="flex items-start gap-2 min-h-[60px]">
      <div
        className={`mt-0.5 rounded-full p-0.5 ${isPositive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
      >
        {isPositive ? <Award className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-800 text-lg leading-tight">{title}</p>
        <p className={`text-base leading-tight mt-1 ${isPositive ? "text-blue-700" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </div>
  )
}

function DecorationComparisonItem({ title, description, isPositive }) {
  return (
    <div className="flex items-start gap-2 min-h-[60px]">
      <div
        className={`mt-0.5 rounded-full p-0.5 ${isPositive ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}`}
      >
        {isPositive ? <Award className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-800 text-sm leading-tight">{title}</p>
        <p className={`text-xs leading-tight mt-1 ${isPositive ? "text-blue-700" : "text-gray-600"}`}>{description}</p>
      </div>
    </div>
  )
}

function QAItem({ question, answer, delay }) {
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
