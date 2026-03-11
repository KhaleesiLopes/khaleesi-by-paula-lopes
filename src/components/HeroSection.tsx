import { Link } from "react-router-dom";
import heroPerfume from "@/assets/hero-perfume.jpg";
import khaleesiBottle from "@/assets/khaleesi-bottle.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-card">
      {/* Background image */}
      <img
        src={heroPerfume}
        alt="Khaleesi Fragrances - Luxury Scents for Him and Her"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay gradient — rich and cinematic */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 h-full min-h-[90vh] flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left — Text */}
          <div className="max-w-xl py-20">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-white/70 mb-6 animate-fade-in">
              Luxury Fragrances &amp; Beauty
            </p>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-white mb-3 animate-fade-in">
              Khaleesi
            </h1>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Fragrances
            </p>
            <p className="font-body text-base font-light tracking-wide text-white/70 mb-10 max-w-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Where Elegance Meets Essence — Timeless Scents Crafted for Royalty
            </p>
            <Link
              to="/collection/fragrance"
              className="inline-block px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-white/20 hover:border-white/50 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Explore the Collection
            </Link>
          </div>

          {/* Right — Khaleesi Bottle */}
          <div className="hidden md:flex items-center justify-center flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <img
              src={khaleesiBottle}
              alt="Khaleesi Inspirazione Perfume"
              className="h-[55vh] lg:h-[65vh] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
