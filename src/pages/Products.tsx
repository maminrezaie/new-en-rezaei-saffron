import { Link } from "react-router-dom";
import bunchPack from "@/assets/bunch-saffron-pack.png";
import bunchBulk from "@/assets/bunch-saffron-bulk.png";
import neginCategory from "@/assets/negin-category.png";
import giftCategory from "@/assets/gift-saffron-category.png";

interface Product {
  name: string;
  weight?: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover">
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-serif text-foreground font-semibold mb-1">{product.name}</h3>
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
);

const sections = [
  {
    id: "bunch",
    title: "Bunch Saffron (Dokhtarpich)",
    products: [
      { name: "Bunch Saffron — Pack", weight: "4.6g", image: bunchPack },
      { name: "Bunch Saffron — Bulk", image: bunchBulk },
    ],
  },
  {
    id: "root",
    title: "Saffron Root",
    products: [
      { name: "Saffron Root — Bulk", image: neginCategory },
    ],
  },
  {
    id: "gift",
    title: "Gift Saffron",
    products: [
      { name: "Gift Saffron — Round Tin", weight: "4.6g", image: giftCategory },
      { name: "Gift Saffron — Wooden Gift Box", image: giftCategory },
    ],
  },
];

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
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="py-8 md:py-12">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 pb-3 border-b-2 border-accent inline-block">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
