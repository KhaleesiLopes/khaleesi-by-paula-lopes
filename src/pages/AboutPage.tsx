import aboutBrand from "@/assets/about-brand.jpg";
import ceoPaula from "@/assets/ceo-paula.png";

const AboutPage = () => {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">About Khaleesi</h1>
          <div className="w-16 h-px bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
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

        {/* CEO Section */}
        <div className="max-w-5xl mx-auto">
          <div className="w-16 h-px bg-primary mx-auto mb-10" />
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-sm aspect-[3/4]">
              <img
                src={ceoPaula}
                alt="Paula Lopes — Founder & CEO of Khaleesi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-2">
                Founder & CEO
              </p>
              <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-6">
                Paula Lopes
              </h2>
              <p className="body-elegant text-muted-foreground mb-4 text-base leading-relaxed">
                I created Khalessi by Paula Lopes from a dream that lived in my heart long before it became a brand. As a proud woman from Guiné-Bissau, I always believed that our stories, our beauty, and our ambitions deserve to be seen, celebrated, and valued.
              </p>
              <p className="body-elegant text-muted-foreground mb-4 text-base leading-relaxed">
                At 30 years old, building a Black-owned brand is more than a business to me — it is a statement of courage, identity, and possibility. Khalessi was born from my desire to create something meaningful, something that carries confidence, elegance, and strength in every bottle.
              </p>
              <p className="body-elegant text-muted-foreground mb-4 text-base leading-relaxed">
                My mission goes beyond fragrance. I want Khalessi to be a symbol of inspiration for young African women everywhere — a reminder that our dreams are powerful and that our potential has no limits. No matter where we come from, we have the ability to create, lead, and transform our visions into reality.
              </p>
              <p className="body-elegant text-muted-foreground mb-4 text-base leading-relaxed">
                If my journey can inspire even one young woman to believe in herself and pursue her dreams, then Khalessi is already doing what it was meant to do.
              </p>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mt-6">
                This is only the beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
