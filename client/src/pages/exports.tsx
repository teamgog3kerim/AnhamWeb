import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Sprout, Globe, Ship, Award, Truck, CheckCircle, Star } from "lucide-react";

export default function ExportsPage() {
  const coffeeImages = [
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  ];

  const sesameImages = [
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  ];

  const exportMarkets = [
    {
      region: "United Arab Emirates",
      flag: "🇦🇪",
      description: "Leading market in the Middle East with strong demand for Ethiopian coffee and sesame",
      products: ["Premium Coffee", "White Sesame", "Bulk Orders"]
    },
    {
      region: "Europe",
      flag: "🇪🇺",
      description: "Premium European markets seeking high-quality organic and specialty products",
      products: ["Specialty Coffee", "Organic Sesame", "Fair Trade"]
    },
    {
      region: "United States",
      flag: "🇺🇸",
      description: "Growing North American market for Ethiopian agricultural products",
      products: ["Arabica Coffee", "Hulled Sesame", "Sustainable Sourcing"]
    }
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: "International Standards",
      description: "All products meet international quality and safety standards"
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous testing and inspection at every stage of processing"
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description: "Reliable shipping and handling to ensure product integrity"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Committed to exceeding customer expectations in every delivery"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 163, 74, 0.8), rgba(22, 163, 74, 0.8)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Agricultural <span className="text-accent">Exports</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Premium Ethiopian coffee and sesame exports to the UAE, Europe, and USA. 
              Quality products, reliable delivery, trusted partnerships.
            </p>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-export-inquiry"
              >
                Export Inquiry
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We sell <span className="text-green-600">abroad</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ANHAMA Trading PLC exports Ethiopia's renowned sesame and coffee to international markets, 
              delivering high-quality agricultural products to global buyers while supporting local farmers 
              and strengthening Ethiopia's position in global premium commodity trade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coffee Section */}
            <Card className="service-card hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src={coffeeImages[0]}
                    alt="Premium Ethiopian coffee beans"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <img
                      src={coffeeImages[1]}
                      alt="Coffee processing"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src={coffeeImages[2]}
                      alt="Coffee plantation"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <img
                    src={coffeeImages[3]}
                    alt="Coffee export packaging"
                    className="w-full h-40 object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Coffee className="text-green-600 mr-3 h-8 w-8" />
                  Coffee
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  ANHAMA facilitates exports of high-quality Ethiopian coffee to customers in the UAE, Europe and USA. 
                  Our premium coffee beans are sourced from the finest regions of Ethiopia.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["Premium Quality", "Direct Trade", "Global Export", "Arabica Variety"].map((tag) => (
                    <Badge key={tag} className="bg-green-100 text-green-800">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link href="/contact">
                  <Button
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
                    data-testid="button-request-coffee-sample"
                  >
                    Request Coffee Sample
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sesame Section */}
            <Card className="service-card hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src={sesameImages[0]}
                    alt="Premium sesame seeds"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <img
                      src={sesameImages[1]}
                      alt="Sesame farming"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src={sesameImages[2]}
                      alt="Sesame processing"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <img
                    src={sesameImages[3]}
                    alt="Sesame export containers"
                    className="w-full h-40 object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Sprout className="text-accent mr-3 h-8 w-8" />
                  Sesame
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  ANHAMA exports Ethiopian sesame to international buyers, supplying customers with high-quality sesame. 
                  Our sesame seeds meet international standards for purity and quality.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["High Purity", "International Standards", "Bulk Export", "White Sesame"].map((tag) => (
                    <Badge key={tag} className="bg-amber-100 text-amber-800">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link href="/contact">
                  <Button
                    className="btn-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold w-full"
                    data-testid="button-request-sesame-sample"
                  >
                    Request Sesame Sample
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Export Markets */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Global Export <span className="text-primary">Markets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serving premium markets worldwide with Ethiopian agricultural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exportMarkets.map((market, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift text-center p-8 h-full">
                  <CardContent className="p-0">
                    <div className="text-6xl mb-4">{market.flag}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{market.region}</h3>
                    <p className="text-muted-foreground mb-6">{market.description}</p>
                    <div className="space-y-2">
                      {market.products.map((product, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-2">
                          {product}
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

      {/* Quality Standards */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quality <span className="text-primary">Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maintaining the highest standards from farm to international delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift text-center p-8 h-full">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <standard.icon className="text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{standard.title}</h3>
                    <p className="text-muted-foreground">{standard.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Overview */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                From Farm to <span className="text-green-600">Global Markets</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our comprehensive export process ensures that Ethiopian agricultural products reach international 
                markets in perfect condition, maintaining quality and freshness throughout the supply chain.
              </p>

              <div className="space-y-6">
                {[
                  { step: "1", title: "Source Selection", desc: "Carefully selecting premium products from certified farms" },
                  { step: "2", title: "Quality Testing", desc: "Comprehensive testing for purity, moisture, and quality standards" },
                  { step: "3", title: "Processing & Packaging", desc: "Professional processing and packaging for international shipping" },
                  { step: "4", title: "Global Delivery", desc: "Reliable logistics ensuring timely delivery to international markets" }
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                      <p className="text-muted-foreground">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Agricultural export process"
                className="w-full h-96 object-cover rounded-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-600 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Import Ethiopian Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with ANHAMA Trading for premium Ethiopian coffee and sesame exports. 
            Request samples and discover the quality that sets us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                data-testid="button-request-samples"
              >
                Request Samples
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-export-catalog"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
