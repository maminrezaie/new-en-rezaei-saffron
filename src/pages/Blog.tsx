import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="py-12 md:py-20 min-h-[60vh] flex items-center">
      <div className="section-container text-center max-w-2xl mx-auto">
        <div className="bg-card rounded-lg p-12 shadow-md">
          <h1 className="text-4xl font-serif text-foreground mb-4">Blog</h1>
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-2xl font-serif text-accent mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We're preparing exciting articles about saffron recipes, health benefits, 
            cultivation insights, and the rich history of Gonabad's saffron tradition. 
            Stay tuned!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-accent text-card rounded-md font-medium hover:bg-gold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
