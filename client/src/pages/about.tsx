import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Calendar, Award, Users, Building, Construction, Globe, MapPin, Wrench, Hotel, Factory } from "lucide-react";
import ceoPhoto from "@assets/CEO - Mr habtamu Alemayehu Benti_1757499581659.jpg";
import anhamaOfficeImage from "@assets/anhama office_1757507043603.jpeg";
import anhamaHotelImage from "@assets/anhama hotels_1757507537879.png";
import foodFactoryImage from "@assets/food factory_1757507645474.png";
import gerdImage from "@assets/GERD_1757507798248.jpg";
import gorfu1Image from "@assets/gorfu1_1757507995395.jpg";
import importExportManagerImage from "@assets/generated_images/Professional_Ethiopian_businessman_portrait_461a5cea.png";
import communityFoodImage from "@assets/food_1757509221792.jpg";

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
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
    },
    {
      year: "2025",
      title: "EV Light & Dump Trucks",
      description: "Became the Exclusive Dealer of XCMG Electric Vehicles, introducing light trucks and dump trucks to Ethiopia's logistics and mining industries"
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
      icon: Construction,
      number: "400+",
      label: "Construction Machineries Imported",
      description: "High-quality construction equipment units imported for Ethiopian infrastructure development"
    },
    {
      icon: Users,
      number: "100+",
      label: "Team Members",
      description: "Skilled professionals across all divisions"
    }
  ];

  const ceo = {
    name: "Habtamu Alemayehu Benti",
    title: "Founder & CEO",
    image: ceoPhoto,
    description: "Visionary leader with over 15 years of experience driving Ethiopia's economic development through innovative business practices and unwavering commitment to social responsibility."
  };

  const teamMembers = [
    {
      name: "Import and Export Management",
      title: "Trade Operations",
      image: importExportManagerImage,
      description: "Specialized team managing import operations for construction machinery and XCMG electric vehicles, plus export logistics for coffee and sesame to global markets"
    },
    {
      name: "Technical Expertise Team",
      title: "Engineering & Operations",
      image: gorfu1Image,
      description: "Technical specialists in construction equipment, mining operations, agricultural processing, and EV transportation solutions"
    },
    {
      name: "Business Development",
      title: "Strategic Partnerships",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Dedicated professionals managing international partnerships, government relations, and market expansion across multiple sectors"
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
              Founded and led by CEO Habtamu Alemayehu Benti, ANHAMA Trading PLC is a leading diversified company 
              with over 15 years of experience in Ethiopia's economic development, blending profitability with social responsibility.
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
                Under the visionary leadership of CEO Habtamu Alemayehu Benti, ANHAMA Trading PLC has established 
                a strong reputation through innovative business activities and unwavering commitment to social responsibility. 
                We are a trusted partner in Ethiopia's economic development, uplifting communities while driving sustainable growth.
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
                    To be a premier diversified company in Ethiopia, driving economic growth, sustainability, 
                    and social progress through innovative business practices and community engagement.
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
                    <p>• <strong>Integrity:</strong> Honesty and transparency</p>
                    <p>• <strong>Innovation:</strong> Sustainable solutions</p>
                    <p>• <strong>Excellence:</strong> Top-quality delivery</p>
                    <p>• <strong>Community:</strong> Social impact focus</p>
                    <p>• <strong>Collaboration:</strong> Strong partnerships</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

      {/* Social Impact Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Social <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over six years, ANHAMA Trading has demonstrated deep commitment to social responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={communityFoodImage}
                alt="ANHAMA community food distribution program"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Community Commitment Under CEO Leadership
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Under the leadership of Habtamu Alemayehu Benti, ANHAMA Trading has made significant social impact. 
                A standout initiative is Mr. Habtamu's daily provision of nutritious meals to over 200 food-insecure 
                individuals near the city center of Addis Ababa.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <Users className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Daily Community Support</h4>
                    <p className="text-muted-foreground">Over 200 food-insecure individuals receive nutritious meals daily</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Trusted Tax Contributor</h4>
                    <p className="text-muted-foreground">Recognized as a trusted tax-paying entity contributing to national development</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Handshake className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">6+ Years of Social Responsibility</h4>
                    <p className="text-muted-foreground">Dedicated to improving lives beyond commercial pursuits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Awards and Recognition */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for excellence, community service, and business achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trusted Tax Payer (Silver Level)", org: "Ministry of Revenue and Customs", years: "2021-2025 Fiscal Years" },
              { title: "Excellent Sales Performance", org: "Hitachi Construction Machinery", years: "2015-2022" },
              { title: "Esteemed Partner Certificate", org: "Panafric Global Logistics", years: "Partnership Recognition" },
              { title: "Youth Educational Arts Support", org: "Tesfa Artworks Enterprise", years: "Community Support" },
              { title: "Financial Support Recognition", org: "Sile Enat Charitable Organization", years: "Charitable Contributions" },
              { title: "Humanitarian Charities", org: "Bole Sub city Woreda 06", years: "Community Service" }
            ].map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift p-6 h-full">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Award className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{award.org}</p>
                    <p className={`text-xs font-medium ${
                      award.years === "2021-2025 Fiscal Years" 
                        ? "" 
                        : "text-accent"
                    }`} 
                    style={award.years === "2021-2025 Fiscal Years" ? { color: '#FF7D29' } : {}}>
                      {award.years}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CEO Section */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Leadership</span>
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="service-card hover-lift p-8 text-center">
              <CardContent className="p-0">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-64 h-80 object-cover rounded-xl mx-auto mb-6 border-4 border-primary/20"
                />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{ceo.name}</h3>
                <p className="text-xl text-primary font-semibold mb-6">{ceo.title}</p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{ceo.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Team Members */}
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
            {teamMembers.map((member, index) => (
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.title}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
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
                    <p className="text-muted-foreground">Bole Atlas, Century Executive Tower, 9th floor</p>
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
                src={anhamaOfficeImage}
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
            <a href="/brochures/company-profile.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-company-brochure"
              >
                Company Profile
              </Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
