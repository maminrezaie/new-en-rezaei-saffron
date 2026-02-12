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

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SocialIcons = ({ className = "", iconSize = "w-3.5 h-3.5" }: { className?: string; iconSize?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <a href="https://instagram.com/rezaei-saffron" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
      <InstagramIcon className={iconSize} />
    </a>
    <a href="https://t.me/+t12NMZ8XCBswNGVK" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Telegram">
      <TelegramIcon className={iconSize} />
    </a>
    <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
      <WhatsAppIcon className={iconSize} />
    </a>
    <a href="https://x.com/aminReformist" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="X (Twitter)">
      <XIcon className={iconSize} />
    </a>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary/80 text-primary-foreground">
        <div className="section-container relative flex items-center justify-center h-8 px-4">
          {/* Language flags - left (desktop) */}
          <div className="hidden md:flex items-center gap-1 absolute left-4">
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
              href="https://rezaei-saffron.ir/Turkish/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Turkish version"
            >
              <TurkishFlag />
            </a>
          </div>
          {/* FAO endorsement - center */}
          <a
            href="https://www.fao.org/giahs/giahs-around-the-world/iran-qanat-based-saffron-system/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs opacity-90 hover:opacity-100 transition-opacity text-center"
          >
            Endorsed by UN Food &amp; Agriculture Org — FAO
          </a>
          {/* Social icons - right (desktop) */}
          <div className="hidden md:flex items-center absolute right-4">
            <SocialIcons />
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
                href="https://rezaei-saffron.ir/shop"
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
                  href="https://rezaei-saffron.ir/shop"
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
                    href="https://rezaei-saffron.ir/Turkish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label="Turkish version"
                  >
                    <TurkishFlag />
                  </a>
                </div>
                {/* Social icons in mobile menu */}
                <div className="flex justify-center mt-3">
                  <SocialIcons className="text-muted-foreground" />
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
