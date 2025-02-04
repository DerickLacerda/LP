import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="text-xl text-muted-foreground mt-4 mb-8">Have questions? We&apos;d love to hear from you.</p>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" className="min-h-[150px]" />
          <Button size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

