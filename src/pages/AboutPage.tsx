import ceoPaula from "@/assets/ceo-paula.png";

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24 pb-0">
      {/* Hero header */}
      <section className="bg-card">
        <div className="container mx-auto px-5 md:px-6 lg:px-12 py-12 md:py-20 lg:py-24 text-center">
          <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3 md:mb-4">
            Our Heritage
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 md:mb-6">
            About Khaleesi
          </h1>
          <div className="w-14 h-px bg-primary mx-auto" />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background">
        <div className="container mx-auto px-5 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6 md:mb-8">
              Our Story
            </h2>
            <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-4 md:mb-5">
              Khaleesi is a luxury fragrance and beauty brand dedicated to elegance, confidence, and timeless beauty.
            </p>
            <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-4 md:mb-5">
              Our fragrances and cosmetics are designed to elevate your everyday experience, combining the finest ingredients with artisan craftsmanship.
            </p>
            <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground">
              Each scent tells a story — of strength, grace, and the quiet power of self-expression.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card">
        <div className="container mx-auto px-5 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-4xl mx-auto">
            {[
              { title: "Craftsmanship", text: "Every fragrance is meticulously crafted by master perfumers using the finest natural ingredients." },
              { title: "Elegance", text: "Our designs embody timeless sophistication, from the bottle to the scent within." },
              { title: "Sustainability", text: "We are committed to ethical sourcing and environmentally conscious production." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`text-center px-5 md:px-8 py-8 md:py-10 ${
                  i < 2 ? "sm:border-r sm:border-border" : ""
                } ${i < 2 ? "border-b sm:border-b-0 border-border" : ""}`}
              >
                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-xs md:text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="bg-background">
        <div className="container mx-auto px-5 md:px-6 lg:px-12 py-12 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
              {/* Portrait */}
              <div className="overflow-hidden rounded-sm aspect-[3/4]">
                <img
                  src={ceoPaula}
                  alt="Paula Lopes — Founder & CEO of Khaleesi"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center md:py-4 lg:py-8">
                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
                  Founder &amp; CEO
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground mb-2">
                  Paula Lopes
                </h2>
                <div className="w-10 h-px bg-primary my-5 md:my-6" />

                <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-4">
                  I created Khaleesi by Paula Lopes from a dream that lived in my heart long before it became a brand. As a proud woman from Guiné-Bissau, I always believed that our stories, our beauty, and our ambitions deserve to be seen, celebrated, and valued.
                </p>
                <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-4">
                  At 30 years old, building a Black-owned brand is more than a business to me — it is a statement of courage, identity, and possibility. Khaleesi was born from my desire to create something meaningful, something that carries confidence, elegance, and strength in every bottle.
                </p>
                <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-4">
                  My mission goes beyond fragrance. I want Khaleesi to be a symbol of inspiration for young African women everywhere — a reminder that our dreams are powerful and that our potential has no limits.
                </p>
                <p className="font-body text-sm md:text-base font-light leading-[1.8] tracking-wide text-muted-foreground mb-6">
                  If my journey can inspire even one young woman to believe in herself and pursue her dreams, then Khaleesi is already doing what it was meant to do.
                </p>

                <p className="font-heading text-base md:text-lg italic text-primary">
                  This is only the beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;