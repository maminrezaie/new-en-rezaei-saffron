import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: WhatsApp icon */}
          <a
            href="https://wa.me/qr/ERDSPOB6INRHP1"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-accent hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Rezaei Saffron Logo" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  location.pathname === link.to
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://rezaei-saffron.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-card transition-colors"
            >
              🇮🇷 فروشگاه فارسی
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-muted text-accent"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://rezaei-saffron.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-4 py-3 border border-accent text-accent rounded-full text-sm font-medium text-center hover:bg-accent hover:text-card transition-colors"
              >
                🇮🇷 فروشگاه فارسی
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
