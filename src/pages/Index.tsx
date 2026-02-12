import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sprout, Award, ShieldCheck, Star, FlaskConical, Leaf, Phone, Mail } from "lucide-react";
import { productSections, type Product } from "@/data/products";
import gonabadFields from "@/assets/gonabad-saffron-fields.png";
import PersianStoreCTA from "@/components/PersianStoreCTA";
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
import neginBulk from "@/assets/negin-bulk.png";
import saffronRootBulk from "@/assets/saffron-root-bulk.jpg";
import bulkNegin1 from "@/assets/bulk-negin-1.jpg";
import bulkRoot1 from "@/assets/bulk-root-1.png";
import trustEnamad from "@/assets/trust-enamad.png";
import trustTipax from "@/assets/trust-tipax.png";
import trustPostIr from "@/assets/trust-post-ir.png";
import trustZarinpal from "@/assets/trust-zarinpal.png";

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

const bulkNeginImages = [bulkNegin1, neginBulk];
const bulkRootImages = [bulkRoot1, saffronRootBulk];

const BulkImageCard = ({ images, alt }: { images: string[]; alt: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="aspect-[4/3] overflow-hidden relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={images[0]}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? "opacity-0" : "opacity-100"}`}
        loading="lazy"
      />
      {images[1] && (
        <img
          src={images[1]}
          alt={`${alt} - alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

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

  useEffect(() => {
    recentIntervalRef.current = setInterval(() => scrollRecent(1), 5000);
    return () => { if (recentIntervalRef.current) clearInterval(recentIntervalRef.current); };
  }, [scrollRecent]);

  const handleRecentArrow = (dir: number) => {
    if (recentIntervalRef.current) clearInterval(recentIntervalRef.current);
    scrollRecent(dir);
    recentIntervalRef.current = setInterval(() => scrollRecent(1), 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
      <section className="relative min-h-[32vh] md:min-h-[46vh] flex items-center md:items-center mx-3 md:mx-6 mt-2 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Premium Iranian Saffron"
            className="w-full h-full object-cover md:object-center object-[75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/5 to-transparent" />
        </div>
        <div className="relative z-10 section-container text-card w-full flex flex-col h-full min-h-[32vh] md:min-h-0 justify-start pt-6 md:justify-center md:pt-0 pb-0 md:pb-0">
          <div className="max-w-md ml-4 md:ml-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-1 md:mb-2 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Premium</span>{" "}
              Iranian{" "}
              <span className="text-primary">Saffron</span>
            </h1>
            <p className="text-xs md:text-base opacity-90 leading-snug md:leading-relaxed">
              Buy directly from the farmers of Gonabad, Khorasan, Iran
            </p>
          </div>
          {/* Mobile bottom text */}
          <div className="mt-auto pb-3 md:hidden ml-4">
            <p className="text-[10px] opacity-70">Direct from farm to your table</p>
          </div>
        </div>
      </section>

      {/* Categories Slider */}
      <section className="pt-10 pb-2 md:pb-3 bg-background">
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

      {/* Recent Products Slider */}
      <section className="py-4 md:py-8 bg-background">
        <div className="px-2 md:px-4">
          <h2 className="text-base md:text-lg font-serif text-center text-primary mb-1">
            Recent Products
          </h2>
          <p className="text-center text-muted-foreground mb-6 text-sm">
            Browse our latest saffron and specialty products
          </p>
          <div className="relative">
            <button
              onClick={() => handleRecentArrow(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-card transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div
              ref={recentRef}
              className="flex items-stretch gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-10"
            >
              {allProducts.map((product) => (
                <RecentProductCard key={product.name} product={product} />
              ))}
            </div>
            <button
              onClick={() => handleRecentArrow(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-card transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
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

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-background">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-primary mb-1">
            Why Choose Us
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Quality and trust at every step
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sprout, title: "Farm-Direct Supply", desc: "Sourced directly from Gonabad farms, no middlemen" },
              { icon: Award, title: "Export-Grade Quality", desc: "Premium Negin saffron with verified purity and grading" },
              { icon: Leaf, title: "UN FAO Endorsed", desc: "Qanat-based saffron system recognized by the UN Food & Agriculture Organization" },
              { icon: FlaskConical, title: "Lab-Tested Grade", desc: "Certified quality with laboratory testing and official grading certificates" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
                <item.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-serif text-foreground font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Saffron Purchase */}
      <section className="py-8 md:py-20 bg-muted">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-primary mb-1">
            Bulk Saffron Purchase
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Wholesale pricing for premium Iranian saffron
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Negin Saffron Bulk */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <BulkImageCard images={bulkNeginImages} alt="Negin Saffron Bulk" />
              <div className="p-6">
                <h3 className="font-serif text-foreground text-lg font-semibold mb-2">Negin Saffron — Grade I</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Iranian Negin saffron is the highest grade of saffron, prized for its thick, uniformly red stigma threads 
                  with no yellow or orange parts. It boasts the highest crocin content (coloring strength of 260+), 
                  intense aroma, and rich flavor. Classified as ISO 3632 Grade I, Negin saffron is the preferred 
                  choice for international buyers, chefs, and pharmaceutical applications.
                  <br /><strong className="text-primary">Fresh — product of the current year's harvest.</strong>
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent font-bold text-xl">$1,300 / kg</span>
                </div>
              </div>
            </div>

            {/* Root Saffron Bulk */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <BulkImageCard images={bulkRootImages} alt="White Saffron Bulk" />
              <div className="p-6">
                <h3 className="font-serif text-foreground text-lg font-semibold mb-2">White Saffron</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Saffron root (the white and yellow base of the stigma) is increasingly valued for its health benefits. 
                  Rich in antioxidants, it supports immune function, promotes relaxation, and is traditionally brewed 
                  as a calming herbal tea. It contains safranal and picrocrocin compounds that aid digestion 
                  and have anti-inflammatory properties — an affordable way to enjoy saffron's therapeutic benefits.
                  <br /><strong className="text-primary">Fresh — product of the current year's harvest.</strong>
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent font-bold text-xl">$160 / kg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <a href="tel:+989150616788" className="flex flex-col items-center gap-1 text-foreground hover:text-accent transition-colors">
                <Phone className="w-10 h-10 text-primary" />
                <span className="text-xs">Call</span>
              </a>
              <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-foreground hover:text-accent transition-colors">
                <svg className="w-10 h-10 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xs">WhatsApp</span>
              </a>
              <a href="mailto:info@rezaei-saffron.ir" className="flex flex-col items-center gap-1 text-foreground hover:text-accent transition-colors">
                <Mail className="w-10 h-10 text-primary" />
                <span className="text-xs">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gonabad Rezaei Saffron */}
      <section className="py-12 md:py-20 bg-background">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-primary mb-1">
            Why Gonabad Saffron
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            A UNESCO-recognized heritage of excellence
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                src={gonabadFields}
                alt="Saffron fields of Gonabad, Iran"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-foreground leading-relaxed text-sm md:text-base mb-4">
                Iran is the largest producer of saffron in the world, responsible for over 90% of global production.
                Gonabad, in Khorasan Razavi province, sits at the heart of this ancient tradition — where saffron has been
                cultivated for centuries using the ingenious <strong>Qanat irrigation system</strong>, a UNESCO-recognized
                Globally Important Agricultural Heritage System (GIAHS) since 2018.
              </p>
              <p className="text-foreground leading-relaxed text-sm md:text-base mb-4">
                The Qanat system channels underground water through gravity-fed tunnels, providing a sustainable
                water source in one of the world's most arid regions. This time-tested method preserves biodiversity,
                supports local livelihoods, and produces saffron of unmatched purity and potency.
              </p>
              <p className="text-muted-foreground text-xs italic">
                Source:{" "}
                <a
                  href="https://www.fao.org/giahs/giahs-around-the-world/iran-qanat-based-saffron-system/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  UN FAO — Qanat-based Saffron Farming System in Gonabad
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-16 md:py-24 bg-dark text-cream">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* Trust Seals & Payment */}
      <section className="py-10 md:py-14 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-primary mb-1">
            Trusted & Verified
          </h2>
          <p className="text-center text-muted-foreground mb-6 text-sm">
            Payment gateways, trust seals & shipping partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* Enamad */}
            <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=704029&Code=jtK72VeurNpOtvdBCXRoOxgOF2Uk9GSd" className="hover:opacity-80 transition-opacity">
              <img src={trustEnamad} alt="Enamad Trust Seal" className="h-16 w-auto" />
            </a>
            {/* Emalls */}
            <a href="https://emalls.ir/Shop/74549/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://service.emalls.ir/neshan?id=74549" alt="Emalls.ir Trust Seal" className="h-16 w-auto" referrerPolicy="origin" />
            </a>
            {/* Torob */}
            <a href="https://torob.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
              <img src="https://torob.com/favicon.ico" alt="Torob" className="h-10 w-10 rounded" />
              <span className="text-xs text-muted-foreground">Torob</span>
            </a>
            {/* Tipax */}
            <a href="https://tipax.ir" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={trustTipax} alt="Tipax Courier" className="h-14 w-auto" />
            </a>
            {/* Post.ir */}
            <a href="https://post.ir" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={trustPostIr} alt="Iran Post" className="h-14 w-auto" />
            </a>
            {/* Zarinpal */}
            <a href="https://zarinpal.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={trustZarinpal} alt="Zarinpal" className="h-14 w-auto" />
            </a>
            {/* USDT */}
            <div className="flex flex-col items-center gap-1">
              <div className="h-10 w-10 rounded-full bg-[#26A17B] flex items-center justify-center">
                <span className="text-white font-bold text-sm">₮</span>
              </div>
              <span className="text-xs text-muted-foreground">USDT</span>
            </div>
            {/* Iranicard */}
            <div className="flex flex-col items-center gap-1">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">IC</span>
              </div>
              <span className="text-xs text-muted-foreground">Iranicard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Persian Shop CTA */}
      <PersianStoreCTA />
    </div>
  );
};

const RecentProductCard = ({ product }: { product: Product }) => {
  const displayWeight = product.weight.replace(' grams', 'g').replace(' gram', 'g');
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col flex-shrink-0 w-[calc(50%-6px)] md:w-[calc(20%-10px)] snap-start">
      <div className="aspect-square overflow-hidden bg-muted relative group">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${product.images.length > 1 ? "group-hover:opacity-0" : ""}`}
          loading="lazy"
        />
        {product.images.length > 1 && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-3 md:p-5 flex flex-col flex-1 items-center text-center gap-2 md:gap-4">
        <h3 className="font-serif text-foreground font-semibold text-xs md:text-sm line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-auto flex flex-col items-center gap-2 md:gap-4 w-full">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
            {product.weight && (
              <>
                <span className="font-bold text-destructive">{displayWeight}</span>
                <span className="text-muted-foreground">|</span>
              </>
            )}
            <span className="text-accent font-semibold text-sm md:text-lg">
              {product.price ?? "Contact for Price"}
            </span>
          </div>
          <div className="flex justify-center gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-block w-full text-center px-3 py-2 bg-destructive text-destructive-foreground rounded-md text-xs md:text-sm font-medium hover:brightness-90 transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      </div>
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
