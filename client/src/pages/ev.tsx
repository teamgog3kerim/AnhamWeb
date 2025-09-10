import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Truck, Battery, Shield, Award, Users, Leaf } from "lucide-react";

export default function EVPage() {
  const evModels = [
    {
      title: "EV Light Trucks - Commercial",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Electric light trucks designed for urban commercial delivery and logistics",
      features: ["200km range", "Fast charging", "Low maintenance", "Zero emissions"]
    },
    {
      title: "EV Light Trucks - Cargo",
      image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "High-capacity electric trucks for cargo transport and distribution",
      features: ["300km range", "Heavy payload", "Smart charging", "GPS tracking"]
    },
    {
      title: "EV Light Trucks - Urban",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Compact electric vehicles perfect for city deliveries and last-mile logistics",
      features: ["150km range", "Compact design", "Quick turnaround", "Cost effective"]
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "EV Sales & Leasing",
      description: "Complete electric vehicle solutions with flexible purchasing and leasing options"
    },
    {
      icon: Battery,
      title: "Charging Infrastructure",
      description: "Installation and maintenance of EV charging stations for commercial operations"
    },
    {
      icon: Users,
      title: "Driver Training",
      description: "Comprehensive training programs for electric vehicle operation and maintenance"
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Extended warranty coverage and 24/7 technical support for all EV models"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Electric <span className="text-accent">Vehicles</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              ANHAMA Trading PLC is pioneering the future of sustainable transportation in Ethiopia 
              with our advanced electric vehicle solutions, focusing on light trucks for commercial and logistics operations.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-get-ev-quote"
              >
                Get EV Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EV Models */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Electric Vehicle</span> Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading Ethiopia's transition to sustainable transportation with cutting-edge electric light trucks 
              designed for efficiency, reliability, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {evModels.map((model, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift h-full">
                  <CardContent className="p-6">
                    <img
                      src={model.image}
                      alt={model.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      data-testid={`img-ev-model-${index}`}
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{model.title}</h3>
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <div className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              EV <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive electric vehicle solutions from sales to support, ensuring smooth transition to sustainable transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift text-center p-8 h-full">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Environmental Impact */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sustainable <span className="text-primary">Transportation</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our electric vehicles contribute to Ethiopia's environmental goals by reducing carbon emissions 
                and promoting clean energy adoption in the transportation sector.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Leaf, title: "Zero Emissions", desc: "Clean electric operation with no local emissions" },
                  { icon: Battery, title: "Energy Efficient", desc: "Advanced battery technology for maximum efficiency" },
                  { icon: Zap, title: "Fast Charging", desc: "Rapid charging capabilities for minimal downtime" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button
                  className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
                  data-testid="button-contact-ev"
                >
                  Learn More About EVs
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Electric vehicle charging"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
                data-testid="img-ev-charging"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the sustainable transportation revolution with ANHAMA Trading's electric vehicle solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-request-ev-quote"
              >
                Request EV Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-schedule-demo"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}