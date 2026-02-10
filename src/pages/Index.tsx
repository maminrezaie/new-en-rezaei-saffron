import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import neginCategory from "@/assets/negin-category.png";
import bunchCategory from "@/assets/bunch-saffron-category.png";
import giftCategory from "@/assets/gift-saffron-category.png";
import barberryCategory from "@/assets/barberry-category.png";
import jujubeCategory from "@/assets/jujube-category.jpg";
import bunchPack from "@/assets/bunch-saffron-pack.png";
import bunchBulk from "@/assets/bunch-saffron-bulk.png";
import giftWoodenBox from "@/assets/gift-wooden-box.jpeg";
import khatamNeginSecond from "@/assets/khatam-negin-second.png";
import bunchBulk2 from "@/assets/bunch-saffron-bulk-2.png";
import neginKiloSecond from "@/assets/negin-kilo-second.png";
import giftWoodenBoxSecond from "@/assets/gift-wooden-box-second.jpg";

const categories = [
  { name: "Negin Saffron", image: neginCategory, link: "/products#bunch" },
  { name: "Bunch Saffron", image: bunchCategory, link: "/products#bunch" },
  { name: "Gift Saffron", image: giftCategory, link: "/products#gift" },
  { name: "Barberry", image: barberryCategory, link: "/products" },
  { name: "Jujube", image: jujubeCategory, link: "/products" },
];

const featuredProducts = [
  { name: "Khatam Negin Saffron Pack", weight: "4.608g", image: giftCategory, hoverImage: khatamNeginSecond },
  { name: "Bunch Saffron دخترپیچ", weight: "4.608g", image: bunchPack, hoverImage: bunchBulk2 },
  { name: "Negin Saffron", weight: "1 Kilo", image: neginCategory, hoverImage: neginKiloSecond },
  { name: "Gift Saffron Wooden Box", weight: "", image: giftWoodenBox, hoverImage: giftWoodenBoxSecond },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Premium Iranian Saffron"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50" />
        </div>
        <div className="relative z-10 section-container text-card">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Premium</span>{" "}
              Iranian{" "}
              <span className="text-destructive">Saffron</span>
            </h1>
            <p className="text-base md:text-lg mb-1 opacity-90 leading-relaxed">
              Direct from the farms of Gonabad, Khorasan — registered quality, pure tradition.
            </p>
            <p className="text-sm md:text-base mb-6 opacity-80">
              Buy directly from the farmer.
            </p>
            <Link
              to="/products"
              className="inline-block px-7 py-3 bg-destructive text-destructive-foreground rounded-md text-base font-medium hover:bg-cta-red transition-all shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">
            Our Categories
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our range of premium saffron varieties and dried fruits
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] card-hover"
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
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        {/* Ornamental pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-primary-foreground">
            Featured Products
          </h2>
          <p className="text-center text-primary-foreground/80 mb-12">
            Handpicked selections from our finest collection
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col"
              >
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
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-foreground font-semibold mb-1">
                    {product.name}
                  </h3>
                  {product.weight && (
                    <p className="text-sm text-muted-foreground mb-3">{product.weight}</p>
                  )}
                  <p className="text-sm text-accent font-medium mb-4">Contact for Price</p>
                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="inline-block w-full text-center px-4 py-2.5 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:bg-cta-red transition-colors"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5!2d58.6836!3d34.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDIxJzEwLjEiTiA1OMKwNDEnMDEuMCJF!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rezaei Saffron Location - Isar 1 Street, Gonabad"
                className="rounded-lg"
              />
              <p className="text-sm text-cream/70 mt-3 text-center">
                📍 Isar 1 (ایثار ۱) Street, Gonabad, Razavi Khorasan, Iran
              </p>
            </div>
            <div className="rounded-lg overflow-hidden flex items-center justify-center bg-dark/50">
              <div className="text-center p-8">
                <h3 className="font-serif text-accent text-xl mb-4">Visit Our Shop</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Our shop is located on Isar 1 (ایثار ۱) Street in the heart of Gonabad, 
                  where we've been serving customers since 2012.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
