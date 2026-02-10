import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sprout, Award, Globe, ShieldCheck } from "lucide-react";
import { productSections, type Product } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import neginCategory from "@/assets/negin-category.png";
import bunchCategory from "@/assets/bunch-saffron-category.png";
import giftCategory from "@/assets/gift-saffron-category.png";
import barberryCategory from "@/assets/barberry-category.png";
import jujubeCategory from "@/assets/jujube-category.jpg";
import driedFruitsCategory from "@/assets/dried-fruits-category.jpg";
import bunchPack from "@/assets/bunch-saffron-pack.png";
import bunchBulk from "@/assets/bunch-saffron-bulk.png";
import giftWoodenBox from "@/assets/gift-wooden-box.jpeg";
import khatamNeginSecond from "@/assets/khatam-negin-second.png";
import bunchBulk2 from "@/assets/bunch-saffron-bulk-2.png";
import neginKiloSecond from "@/assets/negin-kilo-second.png";
import giftWoodenBoxSecond from "@/assets/gift-wooden-box-second.jpg";
import featuredBg from "@/assets/featured-bg.jpg";
import shopImage from "@/assets/shop-image.jpg";

const categories = [
  { name: "Negin Saffron", image: neginCategory, link: "/products#bunch" },
  { name: "Bunch Saffron", image: bunchCategory, link: "/products#bunch" },
  { name: "Gift Saffron", image: giftCategory, link: "/products#gift" },
  { name: "Barberry", image: barberryCategory, link: "/products" },
  { name: "Jujube", image: jujubeCategory, link: "/products" },
  { name: "Dried Fruits", image: driedFruitsCategory, link: "/products" },
];

const allProducts = productSections.flatMap((s) => s.products);

const featuredProducts = [
  { name: "Khatam Negin Saffron Pack", weight: "4.608g", image: giftCategory, hoverImage: khatamNeginSecond },
  { name: "Bunch Saffron دخترپیچ", weight: "4.608g", image: bunchPack, hoverImage: bunchBulk2 },
  { name: "Negin Saffron", weight: "1 Kilo", image: neginCategory, hoverImage: neginKiloSecond },
  { name: "Gift Saffron Wooden Box", weight: "", image: giftWoodenBox, hoverImage: giftWoodenBoxSecond },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const recentRef = useRef<HTMLDivElement>(null);
  const recentIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollRecent = useCallback((dir: number) => {
    const el = recentRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 12 : 200;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const nextPos = el.scrollLeft + dir * cardWidth;
    if (nextPos > maxScroll) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (nextPos < 0) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    }
  }, []);

  // Auto-slide for recent products
  useEffect(() => {
    recentIntervalRef.current = setInterval(() => scrollRecent(1), 5000);
    return () => { if (recentIntervalRef.current) clearInterval(recentIntervalRef.current); };
  }, [scrollRecent]);

  const handleRecentArrow = (dir: number) => {
    if (recentIntervalRef.current) clearInterval(recentIntervalRef.current);
    scrollRecent(dir);
    recentIntervalRef.current = setInterval(() => scrollRecent(1), 5000);
  };

  // Auto-slide for featured products
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Auto-slide for categories
  useEffect(() => {
    const catInterval = setInterval(() => {
      const el = document.getElementById('cat-slider');
      if (el) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(catInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[32vh] md:min-h-[40vh] flex items-center mx-3 md:mx-6 mt-2 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Premium Iranian Saffron"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/40 to-transparent" />
        </div>
        <div className="relative z-10 section-container text-card w-full">
          <div className="max-w-md ml-4 md:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Premium</span>{" "}
              Iranian{" "}
              <span className="text-primary">Saffron</span>
            </h1>
            <p className="text-sm md:text-base mb-5 opacity-90 leading-relaxed">
              Buy directly from the farmers of Gonabad, Khorasan
            </p>
            <a
              href="https://www.fao.org/giahs/giahs-around-the-world/iran-qanat-based-saffron-system/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs text-dark underline font-medium hover:opacity-80 transition-opacity"
            >
              Endorsed by UN Food & Agriculture Org
            </a>
          </div>
        </div>
      </section>

      {/* Categories Slider */}
      <section className="pt-10 pb-16 md:pb-24 bg-background">
        <div className="section-container">
          <h2 className="text-base md:text-lg font-serif text-center text-primary mb-1">
            Our Categories
          </h2>
          <p className="text-center text-muted-foreground mb-3 max-w-2xl mx-auto text-sm">
            Explore our range of premium saffron varieties and dried fruits
          </p>
          <div className="relative">
            <button
              onClick={() => {
                const el = document.getElementById('cat-slider');
                if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-card transition-colors"
              aria-label="Previous"
            >
              ‹
            </button>
            <div id="cat-slider" className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-6">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.link}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] card-hover flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] snap-start"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-card font-serif text-sm md:text-base font-semibold">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('cat-slider');
                if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-card transition-colors"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products - Auto-sliding */}
      <section className="py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={featuredBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/40" />
        </div>
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-primary-foreground">
            Featured Products
          </h2>
          <p className="text-center text-primary-foreground/80 mb-6">
            Handpicked selections from our finest collection
          </p>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* Mobile: auto-sliding, 2 columns */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((offset) => {
                const idx = (currentSlide + offset) % featuredProducts.length;
                const product = featuredProducts[idx];
                return <ProductCard key={`${idx}-${currentSlide}`} product={product} />;
              })}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {featuredProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentSlide ? "bg-accent" : "bg-card/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-16 md:py-24 bg-dark text-cream">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
              Rezaei Saffron — Since 2012
            </h2>
            <p className="text-lg leading-relaxed opacity-80 mb-8">
              For over a decade, the Rezaei family has cultivated and supplied the finest saffron
              from the historic farms of Gonabad, in the heart of Khorasan. Our commitment to
              purity and authenticity has made us a trusted name among saffron connoisseurs worldwide.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-md font-medium hover:bg-accent hover:text-dark transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Two column: Shop image + Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-lg overflow-hidden relative aspect-[4/3]">
              <img
                src={shopImage}
                alt="Rezaei Saffron Shop in Gonabad"
                className="w-full h-full object-cover object-bottom rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/30 rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-card text-lg font-semibold">Our Shop in Gonabad</h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5!2d58.6836!3d34.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDIxJzEwLjEiTiA1OMKwNDEnMDEuMCJF!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rezaei Saffron Location - Isar 1 (Imam Sadeq Street), Gonabad"
                className="rounded-lg"
              />
              <p className="text-sm text-cream/70 mt-3 text-center">
                📍 Isar 1 (Imam Sadeq Street / ایثار ۱), Gonabad, Razavi Khorasan, Iran
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col h-full">
    <div className="aspect-square overflow-hidden bg-muted relative group">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        loading="lazy"
      />
      <img
        src={product.hoverImage}
        alt={`${product.name} - alternate view`}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        loading="lazy"
      />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-serif text-foreground font-semibold mb-3 text-sm md:text-base">
        {product.name}
      </h3>
      {product.weight && (
        <p className="text-xs text-muted-foreground mb-3">{product.weight}</p>
      )}
      <p className="text-xs text-accent font-medium mb-4">Contact for Price</p>
      <div className="mt-auto">
        <Link
          to="/contact"
          className="inline-block w-full text-center px-4 py-2.5 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:brightness-90 transition-colors"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  </div>
);

export default Index;
