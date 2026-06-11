import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, Battery, Shield, Award, Users, Leaf, Route, Wifi } from "lucide-react";
import evHeroBg from "@assets/image_1778835313580.png";
import klq6126Image from "@assets/ev_klq6126gev_crop.jpg";
import klq6116Image from "@assets/ev_klq6116zev_crop.jpg";
import klq6956Image from "@assets/ev_klq6956zev_crop.jpg";
import klq6796Image from "@assets/ev_klq6796zev_crop.jpg";
import h5fImage from "@assets/ev_h5f_crop.jpg";
import batteryWarrantyImage from "@assets/generated_images/ev_battery_warranty.png";

export default function EVPublicTransportPage() {
  const models = [
    {
      name: "Higer KLQ6126GEV",
      type: "Electric City Bus",
      image: klq6126Image,
      highlight: "352 kWh battery · 12.1 m · up to 72 passengers",
      specs: [
        ["Seat", "35 + 6F + 1D + 30 standing"],
        ["Overall L×W×H (mm)", "12090 × 2550 × 3285"],
        ["Wheelbase (mm)", "5900"],
        ["Curb weight (kg)", "13800"],
        ["Gross vehicle weight (kg)", "19000"],
        ["Battery capacity", "352 kWh"],
        ["Brake type", "Dual-circuit, Air Brake, with ABS"],
      ],
    },
    {
      name: "Higer KLQ6116ZEV",
      type: "Electric Intercity Coach",
      image: klq6116Image,
      highlight: "310.66 kWh battery · 11 m · 61 seats",
      specs: [
        ["Seat", "61 (2+3)"],
        ["Overall L×W×H (mm)", "11025 × 2550 × 3680"],
        ["Wheelbase (mm)", "5700"],
        ["Curb weight (kg)", "12820"],
        ["Gross vehicle weight (kg)", "18000"],
        ["Battery capacity", "310.66 kWh"],
        ["Brake type", "Dual-circuit, Air Brake, with ABS"],
      ],
    },
    {
      name: "Higer KLQ6956ZEV",
      type: "Electric Coach",
      image: klq6956Image,
      highlight: "289.95 kWh battery · 9.5 m · 46 seats",
      specs: [
        ["Seat", "45 + 1 (2+3)"],
        ["Overall L×W×H (mm)", "9455 × 2550 × 3520"],
        ["Wheelbase (mm)", "4810"],
        ["Curb weight (kg)", "10500"],
        ["Gross vehicle weight (kg)", "14500"],
        ["Battery capacity", "289.95 kWh"],
        ["Brake type", "Dual-circuit, Air Brake, with ABS"],
      ],
    },
    {
      name: "Higer KLQ6796ZEV",
      type: "Electric Coach",
      image: klq6796Image,
      highlight: "231.84 kWh battery · 8 m · 30 seats",
      specs: [
        ["Seat", "29 + 1"],
        ["Overall L×W×H (mm)", "7995 × 2550 × 3495"],
        ["Wheelbase (mm)", "4000"],
        ["Curb weight (kg)", "9100"],
        ["Gross vehicle weight (kg)", "11600"],
        ["Battery capacity", "231.84 kWh"],
        ["Brake type", "Dual-circuit, Air Brake, with ABS"],
      ],
    },
    {
      name: "Higer H5F",
      type: "Electric Mini Bus",
      image: h5fImage,
      highlight: "53 kWh battery · 250 km range · 15 seats",
      specs: [
        ["Seat capacity (incl. driver)", "15 (2+3+3+3+4)"],
        ["Overall L×W×H (mm)", "5450 × 1700 × 2190"],
        ["Wheelbase (mm)", "3110"],
        ["Curb weight (kg)", "2130"],
        ["Laden weight (kg)", "3570"],
        ["Climbing degree", "≥ 20%"],
        ["Max power (kW / r/min / N·m)", "80 / 8000 / 270"],
        ["Max speed (km/h)", "100"],
        ["Battery capacity", "53 kWh"],
        ["Range (NEDC)", "250 km"],
        ["Side window", "Glass window"],
        ["Tire size", "195R15C"],
      ],
    },
  ];

  const services = [
    {
      icon: Bus,
      title: "EV Bus Sales & Leasing",
      description: "Complete Higer electric public transport solutions with flexible purchasing and leasing options for operators and government",
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
      description: "Official Higer warranty coverage and dedicated technical support for public transport fleets",
    },
  ];

  return (
    <div className="theme-green min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-[#0f8a7e]"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 138, 126, 0.85), rgba(22, 163, 74, 0.85)), url(${evHeroBg})`,
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
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-sm px-4 py-1">
              Official Higer EV Bus Partner
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              EV <span className="text-accent">Public Transport</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              ANHAMA Trading PLC brings the Higer range of clean, modern electric buses and mini buses to
              Ethiopia's public transport network — serving city operators, intercity routes, and government fleets.
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
      {/* Models */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Higer <span className="text-primary">Electric Bus</span> Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From high-capacity city buses to long-range intercity coaches and versatile electric mini buses,
              the Higer lineup helps operators cut emissions and running costs while keeping passengers comfortable.
            </p>
          </div>

          <div className="space-y-12">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="service-card hover-lift overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div
                        className={`bg-muted flex items-center justify-center p-4 ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <img
                          src={model.image}
                          alt={`${model.name} Higer electric bus catalogue`}
                          className="w-full h-auto max-h-[30rem] object-contain rounded-2xl ml-[78px] mr-[78px] mt-[-6px] mb-[-6px] rounded-tl-[27px] rounded-tr-[27px] rounded-br-[27px] rounded-bl-[27px]"
                          data-testid={`image-model-${index}`}
                        />
                      </div>

                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge className="bg-primary text-primary-foreground text-sm">
                            {model.type}
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                          {model.name}
                        </h3>
                        <p className="text-primary font-semibold mb-6 flex items-center gap-2">
                          <Battery className="h-5 w-5" />
                          {model.highlight}
                        </p>

                        <div className="overflow-hidden rounded-xl border border-border">
                          <table className="w-full text-sm">
                            <caption className="sr-only">{model.name} specifications</caption>
                            <thead>
                              <tr className="bg-primary text-primary-foreground font-semibold">
                                <th scope="col" className="px-4 py-2 text-left w-1/2">Parameter</th>
                                <th scope="col" className="px-4 py-2 text-left w-1/2">Value &amp; Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {model.specs.map(([label, value], idx) => (
                                <tr
                                  key={label}
                                  className={idx % 2 === 0 ? "bg-background" : "bg-muted"}
                                >
                                  <th scope="row" className="px-4 py-2 text-left font-normal text-muted-foreground">
                                    {label}
                                  </th>
                                  <td className="px-4 py-2 text-foreground font-medium">{value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <Link href="/contact">
                          <Button
                            className="btn-primary text-primary-foreground mt-6 px-6 py-3 rounded-lg font-semibold"
                            data-testid={`button-enquire-${index}`}
                          >
                            Enquire About This Model
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      {/* Battery Warranty */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={batteryWarrantyImage}
                alt="High-capacity electric bus battery pack with long-term warranty"
                className="w-full h-auto rounded-2xl hover-lift shadow-lg"
                data-testid="image-battery-warranty"
              />
            </div>

            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-1">
                Long-Term Battery Warranty
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">8 to 10 Years</span> Battery Warranty
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every Higer electric bus and mini bus is backed by an industry-leading battery warranty of
                8 up to 10 years. Our high-quality lithium battery systems are engineered for reliable,
                long-life performance — giving operators and governments complete peace of mind and protecting
                your investment for years of dependable service.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Shield, title: "8–10 Year Coverage", desc: "Long-term protection on every battery system" },
                  { icon: Battery, title: "Durable Lithium Packs", desc: "Built for thousands of charge cycles and long range" },
                  { icon: Award, title: "Genuine Higer Quality", desc: "World-class engineering with official support" },
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

              <p className="text-lg text-foreground font-medium bg-muted rounded-xl p-5 border border-border">
                More Higer electric models are also available on EV Public Transport — contact our team to
                explore the full range and find the right fit for your routes and fleet.
              </p>
            </div>
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
              Comprehensive Higer electric public transport solutions for operators, cities, and governmental
              organizations, with upcoming charging infrastructure across Ethiopia.
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
              Why <span className="text-primary">Higer Electric Buses</span>
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
              { icon: Award, title: "Reliable Quality", desc: "World-class Higer engineering and support" },
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
            Partner with ANHAMA Trading to bring sustainable Higer electric buses to your city or fleet.
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
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
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
