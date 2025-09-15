import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      event: "Wedding Reception",
      rating: 5,
      text: "KM Catering made our wedding day absolutely perfect! The food was exceptional, and the service was flawless. Our guests are still talking about the delicious Pakistani and continental dishes.",
      location: "Karachi",
    },
    {
      name: "Muhammad Hassan",
      event: "Corporate Event",
      rating: 5,
      text: "Professional, reliable, and outstanding quality. They catered our annual company dinner for 200+ employees. Everything was perfectly organized and the food was restaurant-quality.",
      location: "Karachi",
    },
    {
      name: "Fatima Khan",
      event: "Birthday Celebration",
      rating: 5,
      text: "Amazing experience! They handled my mother's 60th birthday party beautifully. The presentation was elegant, and they accommodated all our dietary requirements perfectly.",
      location: "Karachi",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients across Karachi have to say about our
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.text}"</blockquote>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
