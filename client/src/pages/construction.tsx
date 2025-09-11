import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, Truck, Wrench, Shield, Award, Users } from "lucide-react";
import excavatorWarehouseImage from "@assets/excavators warehouse 3_1757500800017.jpg";

export default function ConstructionPage() {
  const equipment = [
    {
      title: "Heavy Excavators",
      image: excavatorWarehouseImage,
      description: "High-performance Devlon and Hitachi excavators for large-scale construction projects",
      features: ["20-40 ton capacity", "Advanced hydraulics", "GPS tracking", "24/7 support"]
    },
    {
      title: "After Sales Service",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Comprehensive support and maintenance services for all your construction equipment",
      features: ["24/7 technical support", "Preventive maintenance", "Spare parts supply", "Equipment warranty"]
    },
    {
      title: "Compact Excavators",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Precision equipment for detailed construction work",
      features: ["2-8 ton capacity", "Tight access", "Precision control", "Low noise"]
    },
    {
      title: "Spare Parts and Accessories",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Genuine spare parts and accessories for all construction equipment brands",
      features: ["OEM quality parts", "Quick availability", "Competitive pricing", "Expert installation"]
    },
    {
      title: "Wheel Loaders",
      image: "https://images.unsplash.com/photo-1563720141809-982168c75a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Efficient loading and material handling equipment",
      features: ["Quick attach", "Load sensing", "Comfort cab", "Fuel efficiency"]
    },
    {
      title: "Dump Trucks",
      image: "https://images.unsplash.com/photo-1605365191036-82d9bbad4b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Heavy-duty trucks for material transport and hauling",
      features: ["Large capacity", "Reliable engines", "Safety systems", "Easy maintenance"]
    }
  ];

  const services = [
    {
      icon: Construction,
      title: "Equipment Sales & Rental",
      description: "Import and sales of construction machinery plus flexible rental options for all project durations"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Professional maintenance and repair services by certified technicians"
    },
    {
      icon: Users,
      title: "Operator Training",
      description: "Comprehensive training programs for equipment operators"
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "All equipment meets international safety and quality standards"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Construction <span className="text-accent">Machinery</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              For over 15 years, ANHAMA Trading PLC has specialized in importing and renting high-quality construction machinery 
              to both private and governmental clients, solidifying our position as a key player in Ethiopia's infrastructure development.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-get-quote"
              >
                Get Equipment Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Equipment</span> Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With 15 years of experience, we offer a wide range of high-quality construction machinery and equipment 
              with flexible rental options to accommodate both short-term and long-term client needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift h-full">
                  <CardContent className="p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, idx) => (
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
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reliable support for construction projects nationwide, serving both private companies and government infrastructure initiatives
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

      {/* Hitachi Partnership */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Trusted <span className="text-primary">Hitachi</span> Partnership
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our strategic partnership with Hitachi brings world-class construction machinery to Ethiopia. 
                With proven reliability and cutting-edge technology, Hitachi equipment delivers exceptional 
                performance for your construction projects.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Award, title: "Premium Quality", desc: "Industry-leading construction machinery" },
                  { icon: Shield, title: "Reliable Support", desc: "Comprehensive service and maintenance" },
                  { icon: Truck, title: "Fast Delivery", desc: "Quick deployment across Ethiopia" }
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
                  data-testid="button-contact-partnership"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>

            <div>
              <img
                src={excavatorWarehouseImage}
                alt="ANHAMA Trading's Hitachi and Devlon construction equipment fleet"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch with our construction machinery experts for customized solutions that meet your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-request-quote"
              >
                Request Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-view-projects"
            >
              View Past Projects
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
