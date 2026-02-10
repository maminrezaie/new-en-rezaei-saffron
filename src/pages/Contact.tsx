import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    lines: ["info@rezaei-saffron.ir", "m.amin.rezai@gmail.com"],
    links: ["mailto:info@rezaei-saffron.ir", "mailto:m.amin.rezai@gmail.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+98 51 5722 2610", "+98 915 061 6788"],
    links: ["tel:+985157222610", "tel:+989150616788"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Chat with us on WhatsApp"],
    links: ["https://wa.me/qr/ERDSPOB6INRHP1"],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:info@rezaei-saffron.ir?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-12 md:py-20">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Get in touch with us for inquiries, orders, or any questions about our products.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card) => (
            <div key={card.title} className="bg-card rounded-lg p-6 shadow-md card-hover text-center">
              <card.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{card.title}</h3>
              {card.lines.map((line, i) => (
                <a
                  key={i}
                  href={card.links[i]}
                  target={card.links[i].startsWith("http") ? "_blank" : undefined}
                  rel={card.links[i].startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors mb-1"
                >
                  {line}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="bg-card rounded-lg p-6 shadow-md mb-16 flex items-start gap-3">
          <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground">Sa'di Street, Gonabad, Razavi Khorasan, Iran</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif text-foreground mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-destructive text-destructive-foreground rounded-md font-medium hover:bg-cta-red transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="font-serif text-lg text-foreground mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/rezaei-saffron" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="https://t.me/+t12NMZ8XCBswNGVK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              Telegram
            </a>
            <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
