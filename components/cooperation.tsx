"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Rocket, Coins, UserCheck, Shield, Award } from "lucide-react"

export default function Cooperation() {
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

    const element = document.getElementById("cooperation")
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
    <section id="cooperation" className="py-20 relative house-bg">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            选择焕房派 = 选择业绩增长的"快车道"!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BenefitCard icon={<Search className="h-8 w-8" />} title="业务体量大，对房源价格要求低！" delay={0.2} />

          <BenefitCard icon={<Rocket className="h-8 w-8" />} title="房源更好卖，成交周期大幅缩短！" delay={0.3} />

          <BenefitCard icon={<Coins className="h-8 w-8" />} title="房源能溢价，您的佣金水涨船高！" delay={0.4} />

          <BenefitCard icon={<UserCheck className="h-8 w-8" />} title="我们全搞定，您专注拓客与谈判！" delay={0.5} />

          <BenefitCard icon={<Shield className="h-8 w-8" />} title="合作零风险，签约即享佣金！" delay={0.6} />

          <BenefitCard icon={<Award className="h-8 w-8" />} title="多重收益，成交奖励丰厚！" delay={0.7} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-8 text-center">
            算笔明白账：推荐美化房源，收益远超想象!
          </h3>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-4">普通售卖：100万房子为例</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>佣金</span>
                    <span>10000 元*2 = 20000元（未扣税）</span>
                  </li>
                  <li className="flex justify-between">
                    <span>全业绩</span>
                    <span>20000 元* 0.85（平台费） = 17000元</span>
                  </li>
                  <li className="flex justify-between">
                    <span>房源端</span>
                    <span>5950元</span>
                  </li>
                  <li className="flex justify-between">
                    <span>客源端</span>
                    <span>11050元</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-blue-600 mb-4">焕房派美化后售卖：</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between text-gray-700">
                    <span>房价提升</span>
                    <span>至少105万（溢价5%）</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span>佣金增加</span>
                    <span>21000元（+1000元）</span>
                  </li>
                  <li className="flex justify-between text-blue-600 font-medium">
                    <span>推荐费</span>
                    <span>+10000元</span>
                  </li>
                  <li className="flex justify-between text-purple-600 font-medium">
                    <span>成交奖</span>
                    <span>+2000元</span>
                  </li>
                  <li className="flex justify-between text-blue-600 font-medium">
                    <span>总额外收益</span>
                    <span>13000元+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                不仅赚更多，还赚得更快、更轻松！
              </p>
              <p className="text-gray-600 mt-2">周期缩短：节省您N天的时间成本和精力！</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6">
                  营销推广全方位支持
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-blue-50 p-1.5 text-blue-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">20W+粉丝矩阵</p>
                      <p className="text-sm text-gray-600">覆盖多平台，精准触达潜在买家</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-blue-50 p-1.5 text-blue-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">AI工具支持</p>
                      <p className="text-sm text-gray-600">VR看房、智能客服、一键转发素材</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-blue-50 p-1.5 text-blue-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">直播和短视频支持</p>
                      <p className="text-sm text-gray-600">专业团队协助拍摄，提升曝光率</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6">
                  合作保障与赋能
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-purple-50 p-1.5 text-purple-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">房源推荐保护机制</p>
                      <p className="text-sm text-gray-600">严格报备 (1个月保护期)，杜绝跳单</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-purple-50 p-1.5 text-purple-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">专属顾问支持</p>
                      <p className="text-sm text-gray-600">一对一对接，及时响应您的需求</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-purple-50 p-1.5 text-purple-600">
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
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">定期专业培训</p>
                      <p className="text-sm text-gray-600">分享最新市场趋势、各平台获客玩法、AI直播技巧</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon,
  title,
  delay,
}: {
  icon: React.ReactNode
  title: string
  delay: number
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
      <Card className="bg-white border-gray-200 shadow-md h-full hover:shadow-lg transition-all group">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="rounded-full bg-gradient-to-br from-blue-50 to-purple-50 p-3 w-16 h-16 flex items-center justify-center mb-4 text-gray-700 group-hover:text-blue-600 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}
