import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Khaleesi Fragrances - Luxury Scents for Him and Her"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
      <div className="relative container mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            Khaleesi
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-muted-foreground font-light">
              Fragrances
            </span>
          </h1>
          <p className="body-elegant text-lg text-muted-foreground mb-8 max-w-md">
            Luxury Scents for Him &amp; Her
          </p>
          <Link
            to="/collection/fragrance"
            className="inline-block px-10 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase transition-colors hover:bg-primary/90"
          >
            Shop Fragrance
          </Link>
        </div>
      </div>
    </section>
  );
};
