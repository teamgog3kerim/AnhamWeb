import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import anhamaLogo from "@assets/Anhama_11_1778766208725.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <img
              src={anhamaLogo}
              alt="ANHAMA Trading PLC"
              className="h-20 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md">
              Catalyzing Ethiopia's growth through construction machinery, gold mining, and agricultural exports.
              Your trusted partner for over 15 years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/construction">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-construction">
                    Construction Machinery
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/mining">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-mining">
                    Gold Mining
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ev">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-ev">
                    Electric Vehicles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/exports">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-coffee">
                    Coffee Export
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/exports">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-sesame">
                    Sesame Export
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="footer-link-contact">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-terms">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Downloads</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/brochures/company-profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="footer-link-company-profile">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="/brochures/ev-brochure-english.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="footer-link-ev-english">
                  EV Truck Brochure (English)
                </a>
              </li>
              <li>
                <a href="/brochures/ev-brochure-amharic.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="footer-link-ev-amharic">
                  EV Truck Brochure (Amharic)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">© 2026 ANHAMA. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-2 rounded-lg transition-colors"
              data-testid="social-link-facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-2 rounded-lg transition-colors"
              data-testid="social-link-instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
