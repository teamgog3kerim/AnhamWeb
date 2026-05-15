import { motion } from "framer-motion";
import { Link } from "wouter";
import { Construction, Mountain, Coffee, Sprout, Target, Eye, Handshake, Truck, Zap, Building, Hotel, Factory, Wrench, MapPin } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import devlonExcavatorImage from "@assets/devlon excavators_1757499021728.jpg";
import hitachiExcavatorImage from "@assets/hitachi excavator 350_1757499282508.jpeg";
import wheelLoaderImage from "@assets/wheel loader_1757500300204.jpg";
import evDumpTruckImage from "@assets/WhatsApp_Image_2026-04-21_at_4.26.00_PM_1778764284327.jpeg";
import xcmgEvTruck4 from "@assets/xcmg ev light trucks 4_1757503354703.jpeg";
import xcmgEvTruck5 from "@assets/xcmg ev light trucks 5_1757503365123.jpeg";
import xcmgEvTruck from "@assets/xcmg ev truck_1757503391080.jpeg";
import xcmgEvTruck6 from "@assets/WhatsApp_Image_2026-04-21_at_4.26.00_PM_1778767626240.jpeg";
import xcmgEvTruck7 from "@assets/WhatsApp_Image_2026-04-21_at_4.26.04_PM_1778767638046.jpeg";
import goldMiningImage from "@assets/god mining_1757508317443.png";
import sesameImage from "@assets/65c87914325d4879775fd34e_licensed-image-p-500_1757509012015.jpeg";
import newSesameImage from "@assets/sesame_1757509442205.jpeg";
import gerdImage from "@assets/GERD_1757507798248.jpg";
import anhamaHotelImage from "@assets/anhama hotels_1757507537879.png";
import foodFactoryImage from "@assets/food factory_1757507645474.png";
import loadingCapacityBadge from "@assets/Slide1_1778830812489.png";

export default function Home() {
  const constructionImages = [
    devlonExcavatorImage,
    hitachiExcavatorImage,
    wheelLoaderImage,
    evDumpTruckImage,
  ];

  const miningImages = [
    goldMiningImage,
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
  ];

  const exportImages = [
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    sesameImage,
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
              Quality and Brand <span className="text-primary">Construction Machineries and Dump Trucks</span> for Your Construction Needs
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
                      {["Devlon Excavators", "Hitachi Excavators", "Wheel loaders", "EV Light Truck / Dump Truck"][index]}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {[
                        "High-quality Devlon excavators designed for heavy-duty construction and earthmoving operations",
                        "Reliable Hitachi excavators known for precision, durability and advanced hydraulic systems",
                        "Powerful wheel loaders for efficient material handling and loading operations",
                        "Eco-friendly electric dump trucks combining zero-emission technology with heavy-duty hauling capacity"
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
                    src={newSesameImage}
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
                  src={loadingCapacityBadge}
                  alt="Loading capacity from 1 up to 45 tons"
                  className="w-full max-w-xs mx-auto mb-4 object-contain rounded-lg hover-lift"
                />
                <img
                  src={xcmgEvTruck}
                  alt="XCMG Electric delivery trucks"
                  className="w-full h-64 object-cover rounded-xl mb-4 hover-lift"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={xcmgEvTruck4}
                    alt="XCMG EV Light Trucks - Sustainable logistics"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                  <img
                    src={xcmgEvTruck5}
                    alt="XCMG Electric vehicle fleet"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <img
                    src={xcmgEvTruck6}
                    alt="XCMG EV Heavy Duty Dump Truck - Front View"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                  <img
                    src={xcmgEvTruck7}
                    alt="XCMG EV Heavy Duty Dump Truck - Rear View"
                    className="w-full h-32 object-cover rounded-lg hover-lift"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ANHAMA Trading has a proven track record of supporting Ethiopia's infrastructure development 
              through equipment rental and logistical expertise
            </p>
          </div>

          <div className="space-y-16">
            {/* Previous Projects */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Previous Projects</h3>
              <Card className="service-card hover-lift p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                        <Building className="text-primary mr-3 h-6 w-6" />
                        Grand Ethiopian Renaissance Dam (GERD)
                      </h4>
                      <p className="text-lg text-muted-foreground mb-6">
                        Facilitated early progress on the monumental hydroelectric project by providing heavy machinery rental services. 
                        Our equipment support was crucial in the initial phases of this landmark infrastructure development.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          Heavy Machinery
                        </span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          Infrastructure
                        </span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          Hydroelectric
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={gerdImage}
                        alt="Grand Ethiopian Renaissance Dam (GERD)"
                        className="w-full h-64 object-cover rounded-xl hover-lift"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ongoing Projects */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Ongoing Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Chaka Project", location: "Ethiopia", type: "Infrastructure Development" },
                  { name: "Gumuz Project", location: "Ethiopia", type: "Regional Development" },
                  { name: "Kuraz Irrigation Dam", location: "Amhara", type: "Water Infrastructure" },
                  { name: "Megech Irrigation Dam", location: "Sidama, SNNPR", type: "Agricultural Support" },
                  { name: "Kalid Dijo Irrigation Dam", location: "West Arsi, Oromia", type: "Water Management" },
                  { name: "Road & Bridge Construction", location: "Afar, Somali, Benishangul-Gumuz", type: "Transportation" }
                ].map((project, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Card className="service-card hover-lift p-6 h-full">
                      <CardContent className="p-0">
                        <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          <Wrench className="text-accent h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{project.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </p>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                          {project.type}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Upcoming Projects */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Upcoming Projects</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="service-card hover-lift p-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={anhamaHotelImage}
                      alt="ANHAMA Luxury 5-Star Hotel"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Hotel className="text-primary h-8 w-8" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground mb-4">Luxury 5-Star Hotel</h4>
                      <p className="text-muted-foreground mb-6">
                        Set to launch soon in Addis Ababa, this development will redefine high-end hospitality in Ethiopia. 
                        Features well-appointed rooms, fine dining, recreation areas, and meeting spaces showcasing Ethiopian arts. 
                        Adjacent luxury condos will offer premium amenities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Hospitality</span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Luxury</span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Ethiopian Arts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card hover-lift p-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={foodFactoryImage}
                      alt="ANHAMA Food Processing Plant"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Factory className="text-green-600 h-8 w-8" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground mb-4">Food Processing Plant</h4>
                      <p className="text-muted-foreground mb-6">
                        Processing crops sourced from local farmers, aiming to reduce waste, enhance food security, 
                        and maximize nutritional value. Expected to create over 150 jobs and support farmers by 
                        purchasing their products, reinforcing agriculture's critical role in Ethiopia's economy.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm">150+ Jobs</span>
                        <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm">Food Security</span>
                        <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm">Farmer Support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              By providing reliable equipment and support, ANHAMA Trading PLC has enabled critical infrastructure projects 
              that improve water access, energy production, transportation, mining and overall quality of life. 
              We remain dedicated to completing initiatives that benefit communities across Ethiopia.
            </p>
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
