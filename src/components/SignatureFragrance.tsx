import { Link } from "react-router-dom";
import signatureImg from "@/assets/signature-fragrance.jpg";

export const SignatureFragrance = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Image */}
          <div className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden">
            <img
              src={signatureImg}
              alt="Khaleesi Signature Fragrance"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
              loading="lazy"
            />
          </div>

        {/* Copy */}
        <div className="flex items-center px-8 lg:px-16 py-12 lg:py-16">
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              The Art of Distinction
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-2">
              Khaleesi
            </h2>
            <p className="font-heading text-3xl md:text-4xl italic font-light text-primary mb-6">
              Signature
            </p>
            <div className="w-12 h-px bg-primary mb-6" />
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-3">
              A masterful composition that captures the essence of power and grace. Layered with rare botanicals and precious resins, our signature scent lingers like a whispered promise.
            </p>
            <p className="font-body text-sm font-light leading-relaxed tracking-wide text-muted-foreground mb-8">
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
      </div>
    </section>
  );
};
