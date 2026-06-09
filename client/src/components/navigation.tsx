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
    { href: "/ev", label: "EV Trucks", green: true },
    { href: "/ev-public-transport", label: "EV Public Transport", green: true },
    { href: "/exports", label: "Exports", green: true },
    { href: "/mining", label: "Mining" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#FFFBF1] ${
        isScrolled ? "border-b border-border shadow-sm" : ""
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
              className="w-auto transition-all duration-300 h-20 sm:h-28 md:h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`group relative nav-link font-medium text-lg transition-colors cursor-pointer inline-block ${
                    item.green
                      ? "text-black hover:text-green-600"
                      : `text-foreground hover:text-primary ${location === item.href ? "text-primary" : ""}`
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      item.green ? "bg-green-600" : "bg-primary"
                    } ${!item.green && location === item.href ? "scale-x-100" : ""}`}
                  />
                </motion.span>
              </Link>
            ))}
            <Link href="/contact">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  className="btn-primary text-primary-foreground px-12 py-2 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  data-testid="button-contact"
                >
                  Contact Us
                </Button>
              </motion.div>
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
                      <motion.span
                        onClick={() => setIsSheetOpen(false)}
                        className={`block text-lg font-medium transition-colors cursor-pointer ${
                          item.green
                            ? "text-black hover:text-green-600"
                            : location === item.href ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        data-testid={`mobile-link-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </motion.span>
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
