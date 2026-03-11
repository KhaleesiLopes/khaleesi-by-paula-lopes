import { Link } from "react-router-dom";
import heroPerfume from "@/assets/hero-perfume.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-card">
      {/* Background image */}
      <img
        src={heroPerfume}
        alt="Khaleesi Fragrances - Luxury Scents for Him and Her"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 h-full min-h-[90vh] flex items-center">
        <div className="max-w-xl py-20">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Luxury Fragrances &amp; Beauty
          </p>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground mb-3 animate-fade-in">
            Khaleesi
          </h1>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Fragrances
          </p>
          <p className="font-body text-base font-light tracking-wide text-muted-foreground mb-10 max-w-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Luxury Scents for Him &amp; Her
          </p>
          <Link
            to="/collection/fragrance"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-primary/90 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Shop Fragrance
          </Link>
        </div>
      </div>
    </section>
  );
};
