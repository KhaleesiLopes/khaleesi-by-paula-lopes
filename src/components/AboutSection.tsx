import { Link } from "react-router-dom";
import aboutBrand from "@/assets/about-brand.jpg";

export const AboutSection = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              About Khaleesi
            </h2>
            <div className="w-12 h-px bg-primary mb-8" />
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-4">
              Khaleesi is a luxury fragrance and beauty brand dedicated to elegance, confidence, and timeless beauty.
            </p>
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground mb-10">
              Our fragrances and beauty products are designed to elevate your everyday experience.
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
              alt="About Khaleesi"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
