import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { productSections, type Product } from "@/data/products";

const saffronProducts = productSections
  .filter((s) => ["negin", "bunch", "root", "gift"].includes(s.id))
  .flatMap((s) => s.products);

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
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {saffronProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

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
      </div>
    </>
  );
};

export default SaffronPrice;
