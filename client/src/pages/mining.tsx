import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Shield, Leaf, Users, Award, Truck, Pickaxe, Globe } from "lucide-react";

export default function MiningPage() {
  const miningCapabilities = [
    {
      title: "Responsible Extraction",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Sustainable gold mining practices that respect environmental standards",
      features: ["Environmental compliance", "Community engagement", "Sustainable practices", "Impact assessment"]
    },
    {
      title: "Advanced Technology",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "State-of-the-art mining equipment and processing technology",
      features: ["Modern machinery", "Precision extraction", "Quality control", "Safety systems"]
    },
    {
      title: "Expert Operations",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Experienced team with extensive mining industry knowledge",
      features: ["Skilled workforce", "Safety training", "Quality assurance", "Operational excellence"]
    },
    {
      title: "Local Partnership",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Collaborative approach with local communities and stakeholders",
      features: ["Community benefits", "Local employment", "Knowledge transfer", "Economic development"]
    }
  ];

  const principles = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Implementing sustainable practices to minimize environmental impact and protect natural resources"
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "Working closely with local communities to ensure mutual benefits and sustainable development"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Maintaining the highest safety standards to protect our workers and surrounding communities"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ensuring high-quality gold extraction through rigorous quality control processes"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Gold <span className="text-accent">Mining</span> Operations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Launched in January 2024, our gold mining division leverages decades of infrastructure experience 
              for responsible mineral extraction.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-mining-inquiry"
              >
                Mining Inquiry
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mining Overview */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ANHAMA Ventures into <span className="text-accent">Gold Mining</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recognizing new potential to support Ethiopia's development, ANHAMA Trading launched a gold mining 
                division in January 2024. Leveraging decades of experience in infrastructure projects and equipment 
                rental, ANHAMA is well-positioned to succeed in responsible mineral extraction.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Mountain, title: "Strategic Location", desc: "Operating in mineral-rich regions of Ethiopia" },
                  { icon: Pickaxe, title: "Modern Equipment", desc: "State-of-the-art mining technology and machinery" },
                  { icon: Globe, title: "Global Standards", desc: "International best practices and compliance" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <item.icon className="text-accent h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button
                  className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Large-scale gold mining operation"
                  className="w-full h-64 object-cover rounded-xl hover-lift"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Mining equipment"
                  className="w-full h-32 object-cover rounded-lg hover-lift"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Gold processing"
                  className="w-full h-32 object-cover rounded-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mining Capabilities */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mining <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive gold mining operations with focus on sustainability and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {miningCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift h-full">
                  <CardContent className="p-6">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4">{capability.description}</p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
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

      {/* Operating Principles */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Operating <span className="text-primary">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mining operations are guided by principles of sustainability, safety, and community partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift text-center p-8 h-full">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <principle.icon className="text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Sustainability Commitment */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Sustainable mining practices"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sustainable <span className="text-green-600">Mining</span> Practices
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We are committed to responsible mining that benefits local communities while preserving 
                the environment for future generations. Our sustainable approach ensures long-term 
                positive impact on Ethiopia's development.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <Leaf className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Environmental Protection</h4>
                    <p className="text-muted-foreground">Implementing eco-friendly extraction methods and rehabilitation programs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <Users className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Community Development</h4>
                    <p className="text-muted-foreground">Creating local employment and supporting community infrastructure</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <Shield className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Regulatory Compliance</h4>
                    <p className="text-muted-foreground">Adhering to all local and international mining regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-accent to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partner with ANHAMA Mining
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore opportunities in Ethiopia's gold mining sector with a trusted partner committed to 
            responsible and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-mining-partnership"
              >
                Explore Partnership
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-company-info"
              >
                Company Information
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
