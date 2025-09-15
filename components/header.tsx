import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/km-logo.png"
            alt="KM Catering and Event Services"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">KM Catering</h1>
            <p className="text-sm text-muted-foreground">& Event Services</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
          <Button className="bg-primary hover:bg-accent text-primary-foreground">Book Now</Button>
        </nav>

        <Button className="md:hidden bg-primary hover:bg-accent text-primary-foreground">Menu</Button>
      </div>
    </header>
  )
}
