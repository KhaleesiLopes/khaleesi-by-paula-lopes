import { Link } from "react-router-dom";
import aboutBrand from "@/assets/about-brand.jpg";

export const AboutSection = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">About Khaleesi</h2>
            <p className="body-elegant text-muted-foreground mb-4">
              Khaleesi is a luxury fragrance and beauty brand dedicated to elegance, confidence, and timeless beauty.
            </p>
            <p className="body-elegant text-muted-foreground mb-8">
              Our fragrances and cosmetics are designed to elevate your everyday experience.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase transition-colors hover:bg-primary/90"
            >
              Discover Our Story
            </Link>
          </div>
          <div className="rounded overflow-hidden">
            <img src={aboutBrand} alt="About Khaleesi" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
