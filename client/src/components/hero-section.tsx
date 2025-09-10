import { motion } from "framer-motion";
import { ChevronDown, Settings, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hero Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="https://cdn.prod.website-files.com/65c798bc02d264387b2ab3cd/65d5e3bd48157da3418a8197_anhamalogowithslogan.png"
              alt="ANHAMA Trading PLC Logo"
              className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto mx-auto mb-6"
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Catalyzing Ethiopia's
            <span className="text-accent"> Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Providing Construction Machinery Solutions, Gold Mining Operations, and Agricultural Export Services
            with over 15 years of trusted partnership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction">
              <Button
                className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-explore-services"
              >
                <Settings className="mr-2 h-5 w-5" />
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="btn-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-get-quote"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
