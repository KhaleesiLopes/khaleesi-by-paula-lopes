import { Link } from "react-router-dom";
import signatureImg from "@/assets/signature-fragrance.jpg";

export const SignatureFragrance = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded overflow-hidden">
              <img
                src={signatureImg}
                alt="Khaleesi Signature Fragrance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent rounded-full opacity-40 hidden lg:block" />
          </div>

          {/* Copy */}
          <div className="lg:pl-8">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
              The Art of Distinction
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
              Khaleesi
              <span className="block text-3xl md:text-4xl mt-1 italic font-light text-primary">
                Signature
              </span>
            </h2>
            <div className="w-12 h-px bg-primary mb-8" />
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-4">
              A masterful composition that captures the essence of power and grace. Layered with rare botanicals and precious resins, our signature scent lingers like a whispered promise.
            </p>
            <p className="font-body text-sm font-light leading-relaxed tracking-wide text-muted-foreground mb-10">
              From the sun-drenched fields of Grasse to the ancient amber routes of the East, every ingredient tells a story of heritage and artistry.
            </p>
            <Link
              to="/collection/fragrance"
              className="inline-block px-10 py-3.5 border border-foreground text-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-foreground hover:text-background"
            >
              Discover the Scent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
