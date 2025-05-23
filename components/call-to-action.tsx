"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageSquare } from "lucide-react"

export default function CallToAction() {
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

    const element = document.getElementById("call-to-action")
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
    <section id="call-to-action" className="py-20 relative bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6">
            别再犹豫！立即携手焕房派，开启您的业绩新篇章!
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            给您的房源一次"美颜"的机会，给自己一个业绩"爆发"的可能！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 max-w-md mx-auto"
        >
          <button className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all rounded-md">
            <span className="relative z-10">立即合作</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <ContactItem icon={<Phone className="h-5 w-5" />} label="合作咨询热线" value="400-123-4567" />

            <ContactItem icon={<MessageSquare className="h-5 w-5" />} label="专属合作微信" value="HuanFangPai" />

            <ContactItem icon={<Mail className="h-5 w-5" />} label="商务邮箱" value="biz@huanfangpai.com" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-sm">© 2025 焕房派. 保留所有权利.</p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-all">
      <div className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 p-2 flex items-center justify-center text-gray-700">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-sm text-gray-800">{value}</p>
      </div>
    </div>
  )
}
