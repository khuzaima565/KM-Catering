import { Button } from "@/components/ui/button"
import { Star, Users, Calendar, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-secondary to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/elegant-catering-setup-with-fine-dining.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            Elevate Your Events with Exquisite Catering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Premium catering services in Karachi for weddings, corporate events, and special occasions. Creating
            unforgettable culinary experiences since 2010.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg">
              Book Your Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
            >
              View Menu
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Events Catered</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">4.9</p>
              <p className="text-sm text-muted-foreground">Star Rating</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">13+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
