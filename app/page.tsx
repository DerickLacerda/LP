import { Hero } from "../components/sections/hero"
import { Features } from "../components/sections/features"
import { About } from "../components/sections/about"
import { Testimonials } from "../components/sections/testimonials"
import { Contact } from "../components/sections/contact"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

