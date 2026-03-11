import { Link } from "react-router-dom";
import aboutBrand from "@/assets/about-brand.jpg";

export const AboutSection = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              About Khaleesi
            </h2>
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-6">
              Khaleesi was founded on the belief that fragrance is the most intimate form of self-expression. Every bottle we craft is a love letter to confidence, femininity, and unapologetic beauty.
            </p>
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-10">
              From sourcing the world's rarest ingredients to designing each detail by hand, we pour artistry into every drop.
            </p>
            <Link
              to="/about"
              className="inline-block px-10 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-primary/90"
            >
              Discover Our Story
            </Link>
          </div>
          <div className="rounded overflow-hidden">
            <img
              src={aboutBrand}
              alt="The art of Khaleesi perfumery"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
