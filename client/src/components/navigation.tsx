import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import anhamaLogo from "@assets/Anhama_11_1778766208725.png";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsSheetOpen(false);
  }, [location]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/construction", label: "Construction" },
    { href: "/ev", label: "EV Trucks" },
    { href: "/ev-public-transport", label: "EV Public Transport" },
    { href: "/mining", label: "Mining" },
    { href: "/exports", label: "Exports" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md border-b border-border" : "bg-[#FFF7C5]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" data-testid="link-home">
            <motion.img
              src={anhamaLogo}
              alt="ANHAMA Trading PLC Logo"
              className={`w-auto transition-all duration-300 ${
                location === "/" ? "h-16 sm:h-20 md:h-24" : "h-12 sm:h-14 md:h-16"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`nav-link text-foreground hover:text-primary font-medium text-lg transition-colors cursor-pointer ${
                    location === item.href ? "text-primary" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold text-lg"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        onClick={() => setIsSheetOpen(false)}
                        className={`text-lg font-medium transition-colors cursor-pointer ${
                          location === item.href ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                        data-testid={`mobile-link-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button
                      onClick={() => setIsSheetOpen(false)}
                      className="btn-primary text-primary-foreground w-full mt-4 text-lg"
                      data-testid="mobile-button-contact"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
