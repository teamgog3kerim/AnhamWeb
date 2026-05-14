import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppCRM } from "@/components/whatsapp-crm";
import Home from "@/pages/home";
import Construction from "@/pages/construction";
import Mining from "@/pages/mining";
import EV from "@/pages/ev";
import Exports from "@/pages/exports";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={`fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
      size="icon"
      data-testid="button-scroll-to-top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}

function ScrollToTopOnRouteChange() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/construction" component={Construction} />
        <Route path="/mining" component={Mining} />
        <Route path="/ev" component={EV} />
        <Route path="/exports" component={Exports} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    // Initialize fade-in animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => {
      fadeInElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppCRM />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
