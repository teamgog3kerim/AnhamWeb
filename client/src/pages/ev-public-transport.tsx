import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, Battery, Shield, Award, Users, Leaf, Route, Wifi } from "lucide-react";
import evHeroBg from "@assets/image_1778835313580.png";

export default function EVPublicTransportPage() {
  const fleet = [
    {
      title: "XCMG Electric City Bus",
      description: "Zero-emission city buses designed for high-capacity urban routes and daily commuter service",
      features: ["High capacity", "Zero emissions", "Fast charging", "Low operating cost"],
    },
    {
      title: "XCMG Electric Intercity Coach",
      description: "Long-range electric coaches for comfortable intercity travel across Ethiopia",
      features: ["Long range", "Comfortable seating", "Smart charging", "Quiet ride"],
    },
    {
      title: "XCMG Electric Mini Bus",
      description: "Compact electric mini buses ideal for shuttle services and last-mile public transport",
      features: ["Compact design", "Flexible routes", "Quick turnaround", "Cost effective"],
    },
    {
      title: "XCMG Electric BRT Bus",
      description: "Articulated electric buses built for bus rapid transit systems and dense corridors",
      features: ["Extra capacity", "BRT ready", "All-day range", "Low maintenance"],
    },
  ];

  const services = [
    {
      icon: Bus,
      title: "EV Bus Sales & Leasing",
      description: "Complete electric public transport solutions with flexible purchasing and leasing options for operators and government",
    },
    {
      icon: Battery,
      title: "Charging Infrastructure",
      description: "Upcoming installation of depot and en-route charging stations to keep public transport fleets running",
    },
    {
      icon: Users,
      title: "Operator Training",
      description: "Comprehensive training programs for electric bus operation, safety, and maintenance teams",
    },
    {
      icon: Shield,
      title: "Warranty & Service",
      description: "Official XCMG warranty coverage and dedicated technical support for public transport fleets",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 163, 74, 0.8), rgba(22, 163, 74, 0.8)), url(${evHeroBg})`,
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
              EV <span className="text-accent">Public Transport</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              ANHAMA Trading PLC brings clean, modern electric buses to Ethiopia's public transport network —
              serving city operators, intercity routes, and government fleets with sustainable mobility solutions.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-get-transport-quote"
              >
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fleet */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Electric <span className="text-primary">Public Transport</span> Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From city buses to intercity coaches, our electric public transport lineup helps cities and operators
              cut emissions and operating costs while delivering a quieter, smoother ride for passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Bus className="text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{vehicle.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <Badge key={idx} className="text-xs whitespace-nowrap bg-green-600 text-white hover:bg-green-700">
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
              Public Transport <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive electric public transport solutions for operators, cities, and governmental organizations,
              with upcoming charging infrastructure across Ethiopia.
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

          <div className="text-center mt-12">
            <Button
              className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg"
              onClick={() => window.open("tel:+251940839515")}
              data-testid="button-call-now-transport"
            >
              Call Now
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Electric */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Electric Buses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Electric public transport delivers real benefits for cities, operators, and passengers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Zero Emissions", desc: "Cleaner air for cities and healthier communities" },
              { icon: Route, title: "Lower Operating Cost", desc: "Reduced fuel and maintenance costs per kilometer" },
              { icon: Wifi, title: "Smart & Connected", desc: "Modern fleets with tracking and smart charging" },
              { icon: Award, title: "Reliable Quality", desc: "World-class XCMG engineering and support" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4">
                  <item.icon className="text-primary h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Electrify Your Public Transport
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with ANHAMA Trading to bring sustainable electric buses to your city or fleet.
            Contact us to discuss routes, financing, and charging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-request-transport-quote"
              >
                Request a Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              onClick={() => window.open("tel:+251940839515")}
              data-testid="button-call-transport"
            >
              Call Now
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
