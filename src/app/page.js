import AboutSection from "@/components/global/AboutSection"
import CallToAction from "@/components/global/CallToAction"
import { Faqs } from "@/components/global/Faqs"
import { Features } from "@/components/global/Features"
import Footer from "@/components/global/Footer"
import HeroSection from "@/components/global/HeroSection"
import { PricingCards } from "@/components/global/PricingCards"
import { Testimonials } from "@/components/global/Testimonials"
import TrustedCompanies from "@/components/global/TrustedCompanies"

const page = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <PricingCards />
      <Testimonials />
      <AboutSection />
      <CallToAction />
      <TrustedCompanies />
      <Faqs />
      <Footer />
    </div>
  )
}
export default page