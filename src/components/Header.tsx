import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/saffron-price", label: "Saffron Price" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const IraqFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-5 h-5 rounded-full">
    <rect width="60" height="13.33" fill="#CE1126"/>
    <rect y="13.33" width="60" height="13.34" fill="#fff"/>
    <rect y="26.67" width="60" height="13.33" fill="#000"/>
    <text x="30" y="24" textAnchor="middle" fill="#007A3D" fontSize="8" fontFamily="serif">الله أكبر</text>
  </svg>
);

const KurdishFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-5 h-5 rounded-full">
    <rect width="60" height="13.33" fill="#ED2024"/>
    <rect y="13.33" width="60" height="13.34" fill="#fff"/>
    <rect y="26.67" width="60" height="13.33" fill="#21A038"/>
    <circle cx="30" cy="20" r="8" fill="#FEBD11"/>
  </svg>
);

const TurkishFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-5 h-5 rounded-full">
    <rect width="60" height="40" fill="#E30A17"/>
    <circle cx="23" cy="20" r="10" fill="#fff"/>
    <circle cx="26" cy="20" r="8" fill="#E30A17"/>
    <polygon points="35,20 30.5,17.5 31.5,22 28,19 33,19" fill="#fff"/>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="section-container flex items-center justify-between h-8 px-4">
          <span className="text-xs opacity-90">
            Endorsed by UN Food &amp; Agriculture Org — FAO
          </span>
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://rezaei-saffron.ir/Arabic/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Arabic version"
            >
              <IraqFlag />
            </a>
            <span className="text-[10px] opacity-50">/</span>
            <a
              href="https://rezaei-saffron.ir/Kurdish/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Kurdish version"
            >
              <KurdishFlag />
            </a>
            <span className="text-[10px] opacity-50">/</span>
            <a
              href="/turkish"
              className="w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Turkish version"
            >
              <TurkishFlag />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background/95 backdrop-blur-sm">
        <div className="section-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile: Call icon */}
            <a
              href="tel:+989150616788"
              className="md:hidden text-accent hover:text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Rezaei Saffron Logo" className="h-16 md:h-22 w-auto" />
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
                className="px-4 py-2 border border-muted-foreground/40 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              >
                <span className="text-card">🇮🇷</span> <span className="text-primary">فروشگاه فارسی</span>
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
                  className="mx-4 mt-2 px-4 py-3 border border-muted-foreground/40 rounded-full text-sm font-medium text-center hover:bg-muted transition-colors"
                >
                  <span className="text-card">🇮🇷</span> <span className="text-primary">فروشگاه فارسی</span>
                </a>
                <div className="flex justify-center items-center gap-0 mt-2 text-muted-foreground">
                  <a
                    href="https://rezaei-saffron.ir/Arabic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label="Arabic version"
                  >
                    <IraqFlag />
                  </a>
                  <span className="text-[10px] text-muted-foreground/50">/</span>
                  <a
                    href="https://rezaei-saffron.ir/Kurdish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label="Kurdish version"
                  >
                    <KurdishFlag />
                  </a>
                  <span className="text-[10px] text-muted-foreground/50">/</span>
                  <a
                    href="/turkish"
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label="Turkish version"
                  >
                    <TurkishFlag />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
