import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-gold.png";

const Footer = () => {
  return (
    <footer>
      {/* Red ornamental strip */}
      <div className="bg-primary h-2" />

      <div className="bg-dark text-cream">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <img src={logo} alt="Rezaei Saffron" className="h-16 w-auto mb-4" />
              <p className="text-sm leading-relaxed opacity-80">
                Premium Iranian saffron and dried fruits, sourced directly from the farms of Gonabad, Khorasan. 
                Registered quality, pure tradition since 2012.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-accent text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/products", label: "Products" },
                  { to: "/about", label: "About Us" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-accent text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm opacity-80">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <a href="mailto:info@rezaei-saffron.ir" className="hover:text-accent transition-colors block">
                      info@rezaei-saffron.ir
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm opacity-80">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  <a href="tel:+989150616788" className="hover:text-accent transition-colors">
                    +98 915 061 6788
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm opacity-80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Sa'di Street, Gonabad, Razavi Khorasan, Iran</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/rezaei-saffron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:text-accent hover:opacity-100 transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://t.me/+t12NMZ8XCBswNGVK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:text-accent hover:opacity-100 transition-all"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/qr/ERDSPOB6INRHP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:text-accent hover:opacity-100 transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Persian Store */}
            <div>
              <h3 className="font-serif text-accent text-lg mb-4">Persian Store</h3>
              <p className="text-sm opacity-80 mb-4">
                Visit our Persian language store for local pricing and ordering.
              </p>
              <a
                href="https://rezaei-saffron.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-dark rounded-md text-sm font-medium hover:bg-light-gold transition-colors"
              >
                🇮🇷 فروشگاه فارسی
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/20 text-center text-sm opacity-60">
            © 2026 Rezaei Saffron. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
