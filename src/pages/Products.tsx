import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { productSections, type Product } from "@/data/products";

const allProducts = productSections.flatMap((s) => s.products);

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
        <div className="flex justify-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent fill-accent" />
          ))}
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

const Products = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="section-container mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Products</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our selection of premium saffron, sourced directly from the farms of Gonabad, Khorasan.
        </p>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
