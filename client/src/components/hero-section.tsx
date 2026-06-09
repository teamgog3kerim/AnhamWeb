import { motion } from "framer-motion";
import { ChevronDown, Settings, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import excavatorsPhoto from "@assets/excavators_1757498915496.jpg";
import anhamaLogo from "@assets/Anhama_1_1778766530392.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video (with image fallback) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${excavatorsPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            title="ANHAMA Trading background video"
            src="https://www.youtube.com/embed/eE0DZbpAlfk?autoplay=1&mute=1&loop=1&playlist=eE0DZbpAlfk&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&start=23"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            frameBorder={0}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full"
          />
        </div>
        <div className="absolute inset-0 bg-[#fffabfb3]" />
      </div>
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
              src={anhamaLogo}
              alt="ANHAMA Trading PLC Logo"
              className="h-28 sm:h-40 md:h-52 lg:h-60 w-auto mx-auto mb-6"
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Catalyzing Ethiopia's
            <span className="text-accent"> Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Providing Construction Machinery Solutions, EV Light Trucks and Dump Trucks, Gold Mining Operations, and Agricultural Export Services
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
