import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import neginCategory from "@/assets/negin-category.png";
import bunchCategory from "@/assets/bunch-saffron-category.png";
import giftCategory from "@/assets/gift-saffron-category.png";
import barberryCategory from "@/assets/barberry-category.png";
import jujubeCategory from "@/assets/jujube-category.jpg";
import bunchPack from "@/assets/bunch-saffron-pack.png";
import bunchBulk from "@/assets/bunch-saffron-bulk.png";

const categories = [
  { name: "Negin Saffron", image: neginCategory, link: "/products#bunch" },
  { name: "Bunch Saffron", image: bunchCategory, link: "/products#bunch" },
  { name: "Gift Saffron", image: giftCategory, link: "/products#gift" },
  { name: "Barberry", image: barberryCategory, link: "/products" },
  { name: "Jujube", image: jujubeCategory, link: "/products" },
];

const featuredProducts = [
  { name: "Gift Saffron Round Tin", weight: "4.608g", image: giftCategory },
  { name: "Bunch Saffron Dokhtarpich", weight: "4.608g", image: bunchPack },
  { name: "Saffron Root", weight: "2.3g", image: neginCategory },
  { name: "Gift Saffron Wooden Box", weight: "", image: giftCategory },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Premium Iranian Saffron"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/40" />
        </div>
        <div className="relative z-10 section-container text-card">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
              Premium Iranian Saffron
            </h1>
            <p className="text-lg md:text-xl mb-2 opacity-90 leading-relaxed">
              Direct from the farms of Gonabad, Khorasan — registered quality, pure tradition.
            </p>
            <p className="text-base md:text-lg mb-8 opacity-80">
              Buy directly from the farmer.
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-destructive text-destructive-foreground rounded-md text-lg font-medium hover:bg-cta-red transition-colors shadow-lg"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Handpicked selections from our finest collection
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-foreground font-semibold mb-1">
                    {product.name}
                  </h3>
                  {product.weight && (
                    <p className="text-sm text-muted-foreground mb-3">{product.weight}</p>
                  )}
                  <p className="text-sm text-accent font-medium mb-4">Contact for Price</p>
                  <Link
                    to="/contact"
                    className="inline-block w-full text-center px-4 py-2.5 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:bg-cta-red transition-colors"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-16 md:py-24 bg-dark text-cream">
        <div className="section-container text-center max-w-3xl mx-auto">
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
      </section>
    </div>
  );
};

export default Index;
