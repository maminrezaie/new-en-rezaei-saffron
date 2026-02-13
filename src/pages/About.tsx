import shopImage from "@/assets/storefront3.png";
import managerPortrait from "@/assets/manager-portrait.jpg";
import PersianStoreCTA from "@/components/PersianStoreCTA";

const About = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Hero */}
      <section className="section-container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">About Rezaei Saffron</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in Gonabad in 2012 (1391 Iranian calendar), Rezaei Saffron & Dried Fruits has been 
              dedicated to providing the purest saffron, sourced directly from our family farms. Located on 
              Sa'di Street (Isar), our mission is to bring the world the finest saffron — direct from farmer to you.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={shopImage} alt="Rezaei Saffron storefront in Gonabad" className="w-full max-h-[350px] object-cover object-bottom" />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-muted py-16">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-foreground mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Negin Saffron", desc: "The highest grade of saffron with long, thick threads and deep red color." },
              { title: "Bunch Saffron (Dokhtarpich)", desc: "Traditional bundled saffron, handpicked and tied with the root intact." },
              { title: "Saffron Root", desc: "The root portion of the saffron crocus, valued for its unique properties." },
              { title: "Gift Saffron", desc: "Elegantly packaged in round tins or handcrafted Khatam-kari wooden boxes." },
              { title: "Barberry (from Qaen)", desc: "Premium dried barberry sourced from the renowned fields of Qaen." },
              { title: "Jujube (from Birjand)", desc: "Sun-dried jujube fruit from the orchards of South Khorasan." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 shadow-sm card-hover">
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Manager */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-serif text-foreground mb-6">About the Manager</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={managerPortrait}
              alt="Mohammad Amin Rezaie"
              className="w-28 h-28 rounded-full object-cover shadow-md flex-shrink-0"
            />
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Mohammad Amin Rezaie</strong> — A graduate in English Language and Literature, 
              Mohammad Amin works as a teacher and translator (English–Persian), bringing a unique bridge between 
              Iranian saffron culture and the global market. His passion for quality and authenticity drives every 
              aspect of Rezaei Saffron.{" "}
              <a
                href="https://maminrezaie.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                View his CV
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-dark text-cream py-16">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl font-serif text-accent mb-6">Our Commitment</h2>
          <p className="text-lg leading-relaxed opacity-80">
            Every gram of our saffron is sourced from the historic farms of Gonabad. Our products are 
            officially registered and we guarantee their authenticity. When you choose Rezaei Saffron, 
            you choose purity, tradition, and trust — direct from the farm to your table.
          </p>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-serif text-foreground mb-6">Our Location</h2>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5!2d58.6836!3d34.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDIxJzEwLjEiTiA1OMKwNDEnMDEuMCJF!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rezaei Saffron Location - Isar 1 (Imam Sadeq Street), Gonabad"
              className="rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              📍 Isar 1 (Imam Sadeq Street / ایثار ۱), Gonabad, Razavi Khorasan, Iran
            </p>
          </div>
        </div>
      </section>

      {/* Persian Shop CTA */}
      <PersianStoreCTA />
    </div>
  );
};

export default About;
