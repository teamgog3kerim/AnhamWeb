import { motion } from "framer-motion";
import { Link } from "wouter";
import { Construction, Mountain, Coffee, Sprout, Target, Eye, Handshake, Truck, Zap } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const constructionImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  ];

  const miningImages = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
  ];

  const exportImages = [
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Construction Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quality <span className="text-primary">Construction Machineries</span> for Your Construction Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 15 years of experience, ANHAMA Trading PLC specializes in importing and renting high-quality construction machinery.
              Our strategic partnership with Hitachi ensures world-class equipment for Ethiopia's infrastructure development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {constructionImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift">
                  <CardContent className="p-6">
                    <img
                      src={image}
                      alt={`Construction machinery ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {["Heavy Excavators", "Mid-Size Equipment", "Equipment Fleet", "Professional Services"][index]}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {[
                        "High-performance excavators for large-scale construction projects",
                        "Versatile machinery perfect for medium construction projects",
                        "Comprehensive fleet management and rental solutions",
                        "Expert operation and maintenance support"
                      ][index]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted Hitachi Partnership</h3>
            <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
              Our strategic partnership with Hitachi ensures you receive world-class construction machinery
              backed by reliable service and support across Ethiopia.
            </p>
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="button-request-equipment-quote"
              >
                Request Equipment Quote
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Mining Section */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ANHAMA Ventures into <span className="text-accent">Gold Mining</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recently launched, ANHAMA Trading's gold mining division diversifies our revenue streams while capitalizing on governmental privileges in the industry. We are well-positioned to succeed in responsible mineral extraction.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Mountain, title: "Responsible Mining", desc: "Sustainable practices that respect local communities and environment" },
                  { icon: Construction, title: "Advanced Equipment", desc: "State-of-the-art mining technology and machinery" },
                  { icon: Handshake, title: "Local Partnership", desc: "Collaborating with local communities for mutual growth" }
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

              <Link href="/mining">
                <Button
                  className="btn-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold"
                  data-testid="button-learn-mining"
                >
                  Learn More About Our Mining
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={miningImages[0]}
                  alt="Large-scale gold mining operation"
                  className="w-full h-64 object-cover rounded-xl hover-lift"
                />
              </div>
              <div className="col-span-2">
                <img
                  src={miningImages[1]}
                  alt="Gold processing facilities"
                  className="w-full h-40 object-cover rounded-xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Agricultural Exports Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We sell <span className="text-green-600">abroad</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ANHAMA Trading PLC exports Ethiopia's renowned sesame and coffee to international markets,
              delivering high-quality agricultural products to global buyers while supporting local farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Coffee Section */}
            <Card className="service-card hover-lift p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img
                    src={exportImages[0]}
                    alt="Premium Ethiopian coffee beans"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src={exportImages[1]}
                      alt="Coffee processing"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src={exportImages[2]}
                      alt="Coffee plantation"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Coffee className="text-green-600 mr-3 h-8 w-8" />
                  Coffee
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  ANHAMA facilitates exports of high-quality Ethiopian coffee to customers in the UAE, Europe and USA.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["Premium Quality", "Direct Trade", "Global Export"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact">
                  <Button
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    data-testid="button-request-coffee-sample"
                  >
                    Request Sample
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sesame Section */}
            <Card className="service-card hover-lift p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Premium sesame seeds"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Sesame farming"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src={exportImages[3]}
                      alt="Sesame processing"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Sprout className="text-accent mr-3 h-8 w-8" />
                  Sesame
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  ANHAMA exports Ethiopian sesame to international buyers, supplying customers with high-quality sesame.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["High Purity", "International Standards", "Bulk Export"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact">
                  <Button
                    className="btn-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold"
                    data-testid="button-request-sesame-sample"
                  >
                    Request Sample
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Export Markets */}
          <div className="bg-gradient-to-r from-green-600 to-primary rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Global Export Markets</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { region: "UAE", desc: "Middle East market leader" },
                { region: "Europe", desc: "Premium European markets" },
                { region: "USA", desc: "North American distribution" }
              ].map((market, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl text-white mb-4">🌍</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{market.region}</h4>
                  <p className="text-white/90">{market.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* EV Light Trucks Section */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sustainable <span className="text-primary">EV Transportation</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                ANHAMA Trading PLC has expanded into sustainable transportation as the sole agent for importing 
                electric vehicle (EV) light trucks, providing eco-friendly solutions to factories and distribution networks.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Truck, title: "EV Light Trucks", desc: "Eco-friendly transportation solutions for commercial use" },
                  { icon: Zap, title: "50% Bank Financing", desc: "Accessible financing options to boost sales and partnerships" },
                  { icon: Handshake, title: "Government & Private", desc: "Serving both governmental and private organizations" }
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

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">Sustainable Transportation Solutions</h4>
                <p className="text-white/90 mb-4">
                  Contributing to reduced carbon emissions and greener logistics while supporting Ethiopia's 
                  transition to sustainable transportation.
                </p>
                <Link href="/contact">
                  <Button
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    data-testid="button-request-ev-info"
                  >
                    Learn About EV Trucks
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Electric delivery trucks"
                  className="w-full h-64 object-cover rounded-xl mb-4 hover-lift"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Sustainable logistics"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1566217434499-5fe34e9e1d20?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Electric vehicle charging"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                </div>
              </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Vision",
                desc: "To be a premier diversified company in Ethiopia, driving economic growth, sustainability, and social progress through innovative business practices and community engagement.",
                color: "primary"
              },
              {
                icon: Handshake,
                title: "Core Values",
                desc: "Integrity • Innovation • Excellence • Community • Collaboration",
                color: "accent"
              },
              {
                icon: Eye,
                title: "Experience",
                desc: "Over 15 years of trusted partnership in Ethiopia's economic development, led by CEO Habtamu Alemayehu Benti",
                color: "secondary"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift p-8 text-center h-full">
                  <CardContent className="p-0">
                    <div className={`bg-${item.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className={`text-${item.color} h-8 w-8`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
