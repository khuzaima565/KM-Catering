import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Users, Heart, Building } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our exquisite wedding catering services. From intimate ceremonies to grand celebrations.",
      image: "/elegant-wedding-catering-setup-with-flowers.jpg",
      features: ["Custom Menu Design", "Professional Service Staff", "Elegant Presentation", "Halal Options Available"],
    },
    {
      icon: Building,
      title: "Corporate Events",
      description:
        "Impress your clients and colleagues with professional catering for meetings, conferences, and corporate gatherings.",
      image: "/professional-corporate-catering-buffet-setup.jpg",
      features: ["Business Lunch Packages", "Conference Catering", "Office Parties", "Product Launches"],
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description:
        "Perfect for birthdays, anniversaries, family reunions, and any celebration that brings people together.",
      image: "/colorful-party-catering-with-appetizers-and-desser.jpg",
      features: ["Birthday Parties", "Anniversary Celebrations", "Family Reunions", "Holiday Gatherings"],
    },
    {
      icon: Utensils,
      title: "Custom Menus",
      description:
        "Tailored culinary experiences designed around your preferences, dietary requirements, and cultural traditions.",
      image: "/diverse-gourmet-food-platter-with-pakistani-cuisin.jpg",
      features: ["Pakistani Cuisine", "Continental Dishes", "Vegetarian Options", "Special Dietary Needs"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Catering Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From intimate gatherings to grand celebrations, we provide exceptional catering services tailored to your
            unique needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <div className="aspect-video bg-secondary rounded-t-lg overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
