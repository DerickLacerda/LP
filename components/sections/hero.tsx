import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Modern Solutions for Your Business</h1>
        <p className="text-xl text-muted-foreground mt-4 mb-8">
          Transform your business with our cutting-edge platform. Built for the future, designed for you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <Button size="lg" className="w-full md:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Image src="/placeholder.svg" alt="Hero Image" width={500} height={500} className="rounded-lg object-cover" />
      </div>
    </section>
  )
}

