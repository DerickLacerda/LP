import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Smart Solutions",
    description: "Intelligent features that adapt to your needs and grow with your business.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your data and privacy.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized performance to keep your business running at peak efficiency.",
  },
]

export function Features() {
  return (
    <section id="features" className="container py-20 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Amazing Features</h2>
        <p className="text-xl text-muted-foreground mt-4">Everything you need to succeed in the digital world</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="mb-4 text-primary">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

