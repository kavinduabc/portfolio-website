import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResearchSection } from "@/components/research-section"
import { CertificatesSection } from "@/components/certificates-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      {/* <ResearchSection /> */}
      <CertificatesSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
