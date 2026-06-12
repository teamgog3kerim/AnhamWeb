import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Calendar, Award, Users, Building, Construction, Globe, MapPin, Wrench, Hotel, Factory } from "lucide-react";
import ceoPhoto from "@assets/CEO - Mr habtamu Alemayehu Benti_1757499581659.jpg";
import anhamaOfficeImage from "@assets/anhama_office_new_1779267152766.png";
import anhamaFleetImage from "@assets/image_1779269388898.png";
import anhamaHotelImage from "@assets/anhama hotels_1757507537879.png";
import foodFactoryImage from "@assets/food factory_1757507645474.png";
import gerdImage from "@assets/GERD_1757507798248.jpg";
import gorfu1Image from "@assets/gorfu1_1757507995395.jpg";
import importExportManagerImage from "@assets/generated_images/Professional_Ethiopian_businessman_portrait_461a5cea.png";
import communityFoodImage from "@assets/food_1757509221792.jpg";
import goldAwardImage from "@assets/2018_rev_1781018158404.jpeg";

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
    },
    {
      year: "2026",
      title: "EV Public Transport",
      description: "Became the Official Higer EV Bus Partner, bringing electric buses and mini buses to Ethiopia's public transport network"
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
          className="absolute inset-0 bg-[#ffa95a]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 169, 90, 0.7), rgba(255, 169, 90, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
            <div className="lg:col-span-2">
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

            <div className="lg:col-span-3">
              <img
                src={anhamaFleetImage}
                alt="ANHAMA Trading PLC truck fleet convoy"
                className="w-full h-auto object-contain rounded-2xl hover-lift"
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

          {(() => {
            const palette = [
              { hex: "#F5A623", badge: "bg-[#F5A623]", header: "bg-[#F5A623]", title: "text-[#F5A623]" },
              { hex: "#F0552B", badge: "bg-[#F0552B]", header: "bg-[#F0552B]", title: "text-[#F0552B]" },
              { hex: "#E84B9C", badge: "bg-[#E84B9C]", header: "bg-[#E84B9C]", title: "text-[#E84B9C]" },
              { hex: "#2BA8C4", badge: "bg-[#2BA8C4]", header: "bg-[#2BA8C4]", title: "text-[#2BA8C4]" },
              { hex: "#8DC63F", badge: "bg-[#8DC63F]", header: "bg-[#8DC63F]", title: "text-[#8DC63F]" },
              { hex: "#4A6CF7", badge: "bg-[#4A6CF7]", header: "bg-[#4A6CF7]", title: "text-[#4A6CF7]" },
            ];
            // Pin positions along the winding road (percent of canvas, y from top)
            const positions = [
              { x: 16, y: 84, side: "right" },
              { x: 82, y: 72, side: "left" },
              { x: 26, y: 58, side: "right" },
              { x: 76, y: 44, side: "left" },
              { x: 34, y: 30, side: "right" },
              { x: 80, y: 15, side: "left" },
            ];
            const roadPath =
              "M 16 100 C 16 92 14 88 16 84 C 30 72 68 80 82 72 C 96 64 40 64 26 58 C 12 52 64 52 76 44 C 88 36 26 38 34 30 C 40 22 68 20 80 15 L 80 7";

            return (
              <>
                {/* Desktop winding road infographic */}
                <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[1080px] rounded-3xl bg-gradient-to-b from-[#cfe2e0] to-[#e7f0ef] overflow-hidden">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {/* clouds */}
                    <g fill="#ffffff" opacity="0.85">
                      <ellipse cx="20" cy="10" rx="9" ry="3.2" />
                      <ellipse cx="30" cy="8" rx="6" ry="2.6" />
                      <ellipse cx="88" cy="22" rx="8" ry="3" />
                      <ellipse cx="12" cy="40" rx="7" ry="2.6" />
                    </g>
                    {/* mountain at the summit */}
                    <polygon points="80,2 70,16 90,16" fill="#3a4d5e" opacity="0.5" />
                    {/* road */}
                    <path
                      d={roadPath}
                      fill="none"
                      stroke="#2b3a4a"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* dashed center line */}
                    <path
                      d={roadPath}
                      fill="none"
                      stroke="#F5C542"
                      strokeWidth="0.7"
                      strokeDasharray="2 2.2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {milestones.map((milestone, index) => {
                    const c = palette[index % palette.length];
                    const p = positions[index % positions.length];
                    const num = String(index + 1).padStart(2, "0");
                    const cardStyle =
                      p.side === "right"
                        ? { left: `${p.x + 5}%`, top: `${p.y}%`, transform: "translateY(-50%)" }
                        : { left: `${p.x - 5}%`, top: `${p.y}%`, transform: "translate(-100%, -50%)" };

                    return (
                      <div key={index}>
                        {/* numbered marker */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.6 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        >
                          <div
                            className={`w-20 h-20 rounded-full ${c.badge} flex items-center justify-center shadow-xl ring-4 ring-white`}
                          >
                            <span className="text-white text-2xl font-bold">{num}</span>
                          </div>
                        </motion.div>

                        {/* callout card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                          className="absolute z-10 w-[240px]"
                          style={cardStyle}
                        >
                          <Card className="overflow-hidden border-none shadow-2xl">
                            <div className={`${c.header} px-5 py-2.5`}>
                              <span className="text-white text-xl font-bold">{milestone.year}</span>
                            </div>
                            <CardContent className="p-5 bg-card">
                              <h3 className={`text-lg font-bold mb-1.5 ${c.title}`}>{milestone.title}</h3>
                              <p className="text-sm text-muted-foreground">{milestone.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile / tablet road */}
                <div className="lg:hidden relative max-w-xl mx-auto">
                  <div className="absolute left-8 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-[#F5A623] via-[#E84B9C] to-[#4A6CF7] opacity-50" />
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => {
                      const c = palette[index % palette.length];
                      const num = String(index + 1).padStart(2, "0");
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.4 }}
                          className="relative pl-20"
                        >
                          <div className="absolute left-8 top-0 -translate-x-1/2">
                            <div
                              className={`w-14 h-14 rounded-full ${c.badge} flex items-center justify-center shadow-lg ring-4 ring-background`}
                            >
                              <span className="text-white text-lg font-bold">{num}</span>
                            </div>
                          </div>
                          <Card className="overflow-hidden border-none shadow-xl">
                            <div className={`${c.header} px-5 py-2.5`}>
                              <span className="text-white text-xl font-bold">{milestone.year}</span>
                            </div>
                            <CardContent className="p-5 bg-card">
                              <h3 className={`text-lg font-bold mb-1.5 ${c.title}`}>{milestone.title}</h3>
                              <p className="text-sm text-muted-foreground">{milestone.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })()}
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
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-accent/20 to-green-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-2xl">
                <img
                  src={communityFoodImage}
                  alt="ANHAMA community food distribution program"
                  className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/80 mb-1">Community Impact</p>
                  <p className="text-lg font-semibold leading-tight">Daily meals for 200+ neighbors in Addis Ababa</p>
                </div>
              </div>
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
              { title: "Trusted Tax Payer (Gold Level)", org: "Ministry of Revenue and Customs", years: "2021-2026 Fiscal Years", image: goldAwardImage },
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
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center gap-5 h-full">
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{award.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{award.org}</p>
                        <p className={`text-xs font-medium ${
                          award.years === "2021-2026 Fiscal Years" 
                            ? "" 
                            : "text-accent"
                        }`} 
                        style={award.years === "2021-2026 Fiscal Years" ? { color: '#FF7D29' } : {}}>
                          {award.years}
                        </p>
                      </div>
                      {award.image && (
                        <img
                          src={award.image}
                          alt={`${award.title} award`}
                          className="w-28 h-48 object-contain rounded-lg flex-shrink-0 ml-[10px] mr-[10px] pl-[4px] pr-[4px]"
                        />
                      )}
                    </div>
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
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
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
