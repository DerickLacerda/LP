import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="container py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image src="/placeholder.svg" alt="About Us" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Our Company</h2>
          <p className="text-xl text-muted-foreground">
            We're passionate about creating innovative solutions that help businesses thrive in the digital age. With
            years of experience and a dedicated team, we're here to help you succeed.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">✓ 10+ Years of Experience</li>
            <li className="flex items-center gap-2">✓ 500+ Successful Projects</li>
            <li className="flex items-center gap-2">✓ 24/7 Customer Support</li>
          </ul>
          <Button size="lg">Learn More About Us</Button>
        </div>
      </div>
    </section>
  )
}

