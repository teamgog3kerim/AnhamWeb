import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Truck, Battery, Shield, Award, Users, Leaf } from "lucide-react";
import xcmgTruck1 from "@assets/xcmg ev light trucks 3_1757501456119.jpeg";
import xcmgTruck2 from "@assets/xcmg ev light trucks 2_1757501474691.jpeg";
import xcmgTruck3 from "@assets/xcmg ev light trucks 4_1757501482119.jpeg";
import xcmgTruck4 from "@assets/xcmg ev light trucks 5_1757501491683.jpeg";
import xcmgTruck5 from "@assets/xcmg ev light trucks 6_1757501502349.jpeg";
import whatsappImage from "@assets/WhatsApp Image 2025-06-17 at 10.21.02 AM (5)_1757503087155.jpeg";
import xcmgTruck6 from "@assets/xcmg ev light trucks 6_1757503097947.jpeg";

export default function EVPage() {
  const evModels = [
    {
      title: "XCMG EV Light Trucks - Commercial",
      image: xcmgTruck1,
      description: "XCMG electric light trucks designed for commercial delivery and urban logistics",
      features: ["200km range", "Fast charging", "Low maintenance", "Zero emissions"]
    },
    {
      title: "XCMG EV Light Trucks - Cargo",
      image: xcmgTruck2,
      description: "High-capacity XCMG electric trucks for cargo transport and distribution",
      features: ["300km range", "Heavy payload", "Smart charging", "GPS tracking"]
    },
    {
      title: "XCMG EV Light Trucks - Urban",
      image: xcmgTruck3,
      description: "Compact XCMG electric vehicles perfect for city deliveries and last-mile logistics",
      features: ["150km range", "Compact design", "Quick turnaround", "Cost effective"]
    },
    {
      title: "XCMG EV Light Trucks - Fleet",
      image: xcmgTruck4,
      description: "Versatile XCMG electric trucks suitable for various commercial applications",
      features: ["Reliable performance", "Easy maintenance", "Fleet management", "Cost savings"]
    },
    {
      title: "XCMG EV Light Trucks - Specialty",
      image: xcmgTruck5,
      description: "Specialized XCMG electric vehicles for specific industry requirements",
      features: ["Custom configurations", "Industry specific", "Enhanced durability", "Professional grade"]
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "XCMG EV Sales & Leasing",
      description: "As Sole Agent, we provide complete XCMG electric vehicle solutions with flexible purchasing and leasing options"
    },
    {
      icon: Battery,
      title: "Charging Station Network",
      description: "Upcoming installation of EV charging stations across Ethiopia for comprehensive charging infrastructure"
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training programs for XCMG electric vehicle operation and maintenance for all sectors"
    },
    {
      icon: Shield,
      title: "Warranty & Service",
      description: "Official XCMG warranty coverage and dedicated technical support for individuals, companies, and government"
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
              XCMG Electric <span className="text-accent">Vehicles</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              ANHAMA Trading PLC is the <strong>Sole Agent</strong> for XCMG Electric Vehicles Light Trucks in the Ethiopian market, 
              serving individuals, private companies, and governmental organizations with cutting-edge sustainable transportation solutions.
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
              XCMG <span className="text-primary">Electric Vehicle</span> Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As the exclusive distributor of XCMG Electric Vehicles in Ethiopia, we offer premium electric light trucks 
              to individuals, private companies, and government agencies, leading the nation's sustainable transportation revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              XCMG EV <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive XCMG electric vehicle solutions for individuals, private companies, and governmental organizations, 
              with upcoming charging station network across Ethiopia
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
              onClick={() => window.open("tel:6339")}
              data-testid="button-call-now-ev"
            >
              Call Now
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Environmental Impact */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                XCMG <span className="text-primary">Partnership</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                As the Sole Agent for XCMG Electric Vehicles in Ethiopia, ANHAMA Trading brings world-class 
                electric light trucks to the Ethiopian market, with upcoming charging infrastructure to support 
                individuals, companies, and government fleets nationwide.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Award, title: "Sole Agent Status", desc: "Exclusive XCMG distributor for Ethiopian market" },
                  { icon: Battery, title: "Charging Network", desc: "Upcoming charging stations across Ethiopia" },
                  { icon: Users, title: "All Sectors", desc: "Serving individuals, companies, and government" }
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
                src={whatsappImage}
                alt="XCMG Electric Vehicle - ANHAMA Trading Sole Agent"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
                data-testid="img-xcmg-partnership"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for XCMG Electric?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join Ethiopia's sustainable transportation future with XCMG Electric Vehicles - available for individuals, 
            private companies, and government organizations through ANHAMA Trading, your Sole Agent.
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