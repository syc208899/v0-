"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "业务模式", href: "#business-model" },
    { name: "合作优势", href: "#advantages" },
    { name: "拿房标准", href: "#property-standards" },
    { name: "成功案例", href: "#case-studies" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo-horizontal-transparent.png"
              alt="焕房派"
              width={180}
              height={50}
              className="h-[60px] w-auto"
            />
          </a>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-gray-800 border-gray-200">
              <div className="flex justify-center mb-6 mt-4">
                <Image
                  src="/images/logo-horizontal-transparent.png"
                  alt="焕房派"
                  width={240}
                  height={60}
                  className="h-24 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-sky-500 transition-colors py-2 border-b border-gray-100"
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#call-to-action"
                  className="mt-4 bg-gradient-to-r from-orange-500 to-sky-500 text-white hover:from-orange-400 hover:to-sky-400 py-2 px-4 rounded-md text-center font-medium"
                  onClick={() => document.querySelector("#call-to-action")?.scrollIntoView({ behavior: "smooth" })}
                >
                  立即合作
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-sky-500 transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#call-to-action"
              className="bg-gradient-to-r from-orange-500 to-sky-500 text-white hover:from-orange-400 hover:to-sky-400 shadow-md hover:shadow-lg transition-all px-4 py-2 rounded-md"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#call-to-action")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              立即合作
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
