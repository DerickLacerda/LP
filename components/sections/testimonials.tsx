import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content:
      "This platform has transformed how we do business. The features are incredible and the support is outstanding.",
    avatar: "SJ",
  },
  {
    name: "Mark Wilson",
    role: "Founder at StartupX",
    content:
      "I can&apos;t imagine running my business without this solution. It&apos;s been a game-changer for our team.",
    avatar: "MW",
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    content:
      "The best investment we&apos;ve made for our company. The ROI has been incredible and the team is amazing.",
    avatar: "EC",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        <p className="text-xl text-muted-foreground mt-4">Don&apos;t just take our word for it</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

