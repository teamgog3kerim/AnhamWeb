import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Calendar, Award, Users, Building, Globe } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "ANHAMA Trading PLC established with a vision to support Ethiopia's development"
    },
    {
      year: "2012",
      title: "Construction Partnership",
      description: "Strategic partnership with Hitachi for construction machinery solutions"
    },
    {
      year: "2018",
      title: "Export Expansion",
      description: "Launched agricultural export operations for coffee and sesame"
    },
    {
      year: "2024",
      title: "Mining Division",
      description: "Entered gold mining sector with sustainable and responsible practices"
    }
  ];

  const stats = [
    {
      icon: Calendar,
      number: "15+",
      label: "Years of Experience",
      description: "Trusted partnership in Ethiopian development"
    },
    {
      icon: Building,
      number: "500+",
      label: "Projects Completed",
      description: "Construction and infrastructure projects across Ethiopia"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach in agricultural exports"
    },
    {
      icon: Users,
      number: "100+",
      label: "Team Members",
      description: "Skilled professionals across all divisions"
    }
  ];

  const leadership = [
    {
      name: "Executive Leadership",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Experienced leadership team with deep understanding of Ethiopian markets and international business"
    },
    {
      name: "Technical Expertise",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Technical specialists in construction equipment, mining operations, and agricultural processing"
    },
    {
      name: "Operations Team",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Dedicated operations professionals ensuring quality and efficiency across all business units"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              About <span className="text-accent">ANHAMA</span> Trading
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              With over 15 years of experience, ANHAMA Trading PLC has been Ethiopia's trusted partner 
              in construction machinery, mining operations, and agricultural exports.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-contact-about"
              >
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Catalyzing Ethiopia's <span className="text-primary">Growth</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                ANHAMA Trading PLC stands at the forefront of Ethiopia's economic development, providing 
                essential services across construction, mining, and agricultural sectors. Our commitment 
                to excellence and sustainable practices has made us a trusted partner for businesses 
                and communities throughout Ethiopia.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Building className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Infrastructure Development</h4>
                    <p className="text-muted-foreground">Supporting Ethiopia's infrastructure growth with quality construction machinery</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Globe className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Global Partnerships</h4>
                    <p className="text-muted-foreground">Connecting Ethiopian products to international markets</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <Award className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Quality Excellence</h4>
                    <p className="text-muted-foreground">Maintaining the highest standards in all our operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern office environment"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission, Vision, Values */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Foundation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by clear principles that drive our commitment to Ethiopia's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="service-card hover-lift text-center p-8 h-full">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                  <p className="text-muted-foreground text-lg">
                    Catalyzing Ethiopia's growth by enabling the movement of goods
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="service-card hover-lift text-center p-8 h-full">
                <CardContent className="p-0">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="text-accent h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                  <p className="text-muted-foreground text-lg">
                    To see Ethiopia thriving through strengthened global partnerships
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="service-card hover-lift text-center p-8 h-full">
                <CardContent className="p-0">
                  <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
                  <div className="text-muted-foreground text-left space-y-2">
                    <p>• Progress through Partnership</p>
                    <p>• Roots in Sustainability</p>
                    <p>• Bonds over Trust</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Statistics */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to Ethiopian development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift text-center p-8">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-primary h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Company Timeline */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in ANHAMA Trading's growth and expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift p-6 h-full">
                  <CardContent className="p-0">
                    <div className="bg-accent text-accent-foreground text-2xl font-bold rounded-lg p-4 text-center mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to excellence and Ethiopian development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift p-6 text-center">
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{member.name}</h3>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Office Location */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Visit Our <span className="text-primary">Office</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Located in the heart of Addis Ababa, our headquarters serves as the center of our 
                operations across Ethiopia. We welcome visitors and partners to discuss opportunities 
                and explore collaborations.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Building className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Office Address</h4>
                    <p className="text-muted-foreground">Anhama Trading PLC, Road, Addis Ababa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calendar className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button
                  className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
                  data-testid="button-schedule-visit"
                >
                  Schedule a Visit
                </Button>
              </Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="ANHAMA Trading office building"
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
            Ready to Partner with ANHAMA?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in catalyzing Ethiopia's growth. Whether you need construction machinery, 
            mining partnerships, or agricultural exports, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-start-partnership"
              >
                Start Partnership
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-company-brochure"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
