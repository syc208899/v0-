import HeroSection from "@/components/hero-section"
import NavigationBar from "@/components/navigation-bar"
import BusinessModel from "@/components/business-model"
import Advantages from "@/components/advantages"
import PropertyStandards from "@/components/property-standards"
import CaseStudies from "@/components/case-studies"
import Cooperation from "@/components/cooperation"
import CallToAction from "@/components/call-to-action"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <NavigationBar />
      <HeroSection />
      <BusinessModel />
      <Advantages />
      <PropertyStandards />
      <CaseStudies />
      <Cooperation />
      <CallToAction />
    </main>
  )
}
