import aboutBrand from "@/assets/about-brand.jpg";

const AboutPage = () => {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">About Khaleesi</h1>
          <div className="w-16 h-px bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-12">
          <div>
            <h2 className="heading-serif text-2xl text-foreground mb-6">Our Story</h2>
            <p className="body-elegant text-muted-foreground mb-4">
              Khaleesi is a luxury fragrance and beauty brand dedicated to elegance, confidence, and timeless beauty.
            </p>
            <p className="body-elegant text-muted-foreground mb-4">
              Our fragrances and cosmetics are designed to elevate your everyday experience, combining the finest ingredients with artisan craftsmanship.
            </p>
            <p className="body-elegant text-muted-foreground">
              Each scent tells a story — of strength, grace, and the quiet power of self-expression.
            </p>
          </div>
          <div className="rounded overflow-hidden">
            <img src={aboutBrand} alt="About Khaleesi" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Craftsmanship", text: "Every fragrance is meticulously crafted by master perfumers using the finest natural ingredients." },
            { title: "Elegance", text: "Our designs embody timeless sophistication, from the bottle to the scent within." },
            { title: "Sustainability", text: "We are committed to ethical sourcing and environmentally conscious production." },
          ].map(item => (
            <div key={item.title} className="text-center p-8">
              <h3 className="heading-serif text-xl text-foreground mb-4">{item.title}</h3>
              <p className="body-elegant text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
