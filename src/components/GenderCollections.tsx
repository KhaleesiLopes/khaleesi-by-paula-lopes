import { Link } from "react-router-dom";
import womensFragrance from "@/assets/womens-fragrance.jpg";
import mensFragrance from "@/assets/mens-fragrance.jpg";

export const GenderCollections = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Curated Collections
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            For Him &amp; For Her
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Women's */}
          <Link
            to="/collection/fragrance?gender=women"
            className="group relative overflow-hidden rounded"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={womensFragrance}
                alt="Women's Fragrance Collection — Floral, Sensual & Bold"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">
                Floral · Sensual · Bold
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-4">
                For Her
              </h3>
              <span className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-white/20">
                Explore Collection
              </span>
            </div>
          </Link>

          {/* Men's */}
          <Link
            to="/collection/fragrance?gender=men"
            className="group relative overflow-hidden rounded"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={mensFragrance}
                alt="Men's Fragrance Collection — Woody, Refined & Commanding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">
                Woody · Refined · Commanding
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-4">
                For Him
              </h3>
              <span className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-white/20">
                Explore Collection
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
