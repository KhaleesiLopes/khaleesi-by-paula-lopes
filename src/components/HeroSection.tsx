import { Link } from "react-router-dom";
import heroPerfume from "@/assets/hero-perfume.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-card">
      <img
        src={heroPerfume}
        alt="Khaleesi Fragrances - Luxury Scents for Him and Her"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container mx-auto px-6 lg:px-12 h-full min-h-[70vh] flex items-end justify-start text-left pb-16 lg:pb-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-4 animate-fade-in">
            Khaleesi Fragrances
          </h1>
          <p className="font-body text-sm md:text-base tracking-[0.25em] uppercase text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Luxury Scents for Him &amp; Her
          </p>
          <Link
            to="/collection/fragrance"
            className="inline-block px-12 py-4 bg-[hsl(35,30%,55%)] text-white text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-[hsl(35,30%,45%)] animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Shop Fragrance
          </Link>
        </div>
      </div>
    </section>
  );
};
