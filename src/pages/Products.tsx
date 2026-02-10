import { Link } from "react-router-dom";
import { productSections, type Product } from "@/data/products";

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
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-serif text-foreground font-semibold mb-1 text-sm md:text-base">
        {product.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
        {product.shortDescription}
      </p>
      {product.weight && (
        <p className="text-xs text-muted-foreground mb-2">{product.weight}</p>
      )}
      <p className="text-sm text-accent font-medium mb-4">
        {product.price ?? "Contact for Price"}
      </p>
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

const Products = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Page Header */}
      <div className="section-container mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Products</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our selection of premium saffron, sourced directly from the farms of Gonabad, Khorasan.
        </p>
      </div>

      {/* Product Sections */}
      {productSections.map((section) => (
        <section key={section.id} id={section.id} className="py-8 md:py-12">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 pb-3 border-b-2 border-accent inline-block">
              {section.title}
            </h2>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {section.products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
