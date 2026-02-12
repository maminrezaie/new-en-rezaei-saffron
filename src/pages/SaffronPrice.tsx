import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { productSections, type Product } from "@/data/products";
import neginBulk from "@/assets/negin-bulk.png";
import saffronRootBulk from "@/assets/saffron-root-bulk.jpg";
import neginKiloSecond from "@/assets/negin-kilo-second.png";
import gonabadFields from "@/assets/gonabad-saffron-fields.png";
import { useState } from "react";

const saffronProducts = productSections
  .filter((s) => ["negin", "bunch", "root", "gift", "economy"].includes(s.id))
  .flatMap((s) => s.products);

const bulkNeginImages = [neginBulk, neginKiloSecond];
const bulkRootImages = [saffronRootBulk, gonabadFields];

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

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col h-full">
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
    <div className="p-5 flex flex-col flex-1 items-center text-center gap-4">
      <h3 className="font-serif text-foreground font-semibold text-sm md:text-base">
        {product.name}
      </h3>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {product.shortDescription}
      </p>
      <div className="mt-auto flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-center gap-2 text-sm">
          {product.weight && (
            <>
              <span className="font-bold text-destructive">{product.weight}</span>
              <span className="text-muted-foreground">|</span>
            </>
          )}
          <span className="text-accent font-semibold text-base md:text-lg">
            {product.price ?? "Contact for Price"}
          </span>
        </div>
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

const SaffronPrice = () => {
  return (
    <>
      <Helmet>
        <title>Saffron Price Today — Iranian Saffron Price in US Dollars | Rezaei Saffron</title>
        <meta
          name="description"
          content="Check today's saffron price in US dollars. Premium Iranian saffron and Persian saffron prices direct from Gonabad farms. Negin, Bunch, and Gift saffron pricing."
        />
        <meta
          name="keywords"
          content="saffron price today, Iranian saffron price, saffron Persian price, saffron price in US dollars, Persian saffron cost, buy Iranian saffron"
        />
        <link rel="canonical" href="https://rezaei-saffron.com/saffron-price" />
      </Helmet>

      <div className="py-12 md:py-20">
        <div className="section-container mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Saffron Price Today
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Current prices for premium Iranian saffron in US dollars, sourced directly from the farms of Gonabad, Khorasan.
          </p>
        </div>

        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {saffronProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {/* Bulk Saffron Purchase */}
        <section className="py-12 md:py-20 bg-muted mt-12">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-serif text-center text-primary mb-1">
              Bulk Saffron Purchase
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-sm">
              Wholesale pricing for premium Iranian saffron
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <BulkImageCard images={bulkNeginImages} alt="Negin Saffron Bulk" />
                <div className="p-6">
                  <h3 className="font-serif text-foreground text-lg font-semibold mb-2">Negin Saffron — Grade I</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Iranian Negin saffron is the highest grade of saffron, prized for its thick, uniformly red stigma threads.
                    Highest crocin content (260+), intense aroma, and rich flavor. ISO 3632 Grade I.
                    <br /><strong className="text-primary">Fresh — product of the current year's harvest.</strong>
                  </p>
                  <span className="text-accent font-bold text-xl">$1,300 / kg</span>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <BulkImageCard images={bulkRootImages} alt="White Saffron Bulk" />
                <div className="p-6">
                  <h3 className="font-serif text-foreground text-lg font-semibold mb-2">White Saffron</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Saffron root is valued for its health benefits. Rich in antioxidants, supports immune function,
                    and is traditionally brewed as calming herbal tea.
                    <br /><strong className="text-primary">Fresh — product of the current year's harvest.</strong>
                  </p>
                  <span className="text-accent font-bold text-xl">$160 / kg</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <a href="tel:+989150616788" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call</span>
                </a>
                <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:info@rezaei-saffron.ir" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO content section */}
        <div className="section-container mt-16 md:mt-24">
          <article className="max-w-3xl mx-auto prose prose-stone">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Iranian Saffron Price Trends in the Global Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Iranian saffron dominates the global spice trade, accounting for nearly 90% of the world's production, which makes Iran the single most influential player in determining the global saffron price. Known for its deep color, strong aroma, and high crocin content, Iranian saffron is widely used in culinary, pharmaceutical, and cosmetic industries across Europe, Asia, and North America.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Globally, saffron price varies dramatically depending on quality, origin, and supply chain transparency. High-grade Iranian saffron typically sells between $500 and $30,000 per kilogram, with retail prices per gram ranging from $0.30 to $1.50. Factors such as harvest yield, climate conditions in Iran, export regulations, and international sanctions all play a major role in these fluctuations. Premium saffron threads with verified origin and purity consistently command the highest prices in global markets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Despite periodic price drops caused by oversupply or export challenges, Iranian saffron remains the benchmark for quality worldwide. As global demand for natural spices and functional foods grows, experts expect the saffron price—especially for top-tier Iranian varieties—to remain strong over the long term, with buyers increasingly focused on authenticity, grading, and direct-from-source purchasing.
            </p>
          </article>
        </div>

        {/* Custom CTA */}
        <section className="bg-accent/10 py-16 mt-12">
          <div className="section-container max-w-3xl text-center">
            <a
              href="https://rezaei-saffron.ir/saffron-today-price/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              قیمت زعفران مشهد
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaffronPrice;
