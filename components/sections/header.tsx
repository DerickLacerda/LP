import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">LOGO</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="flex items-center text-lg font-medium">
              Features
            </Link>
            <Link href="#about" className="flex items-center text-lg font-medium">
              About
            </Link>
            <Link href="#testimonials" className="flex items-center text-lg font-medium">
              Testimonials
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Button className="hidden md:flex">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}

