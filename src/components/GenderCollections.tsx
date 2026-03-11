import { Link } from "react-router-dom";
import womensFragrance from "@/assets/womens-fragrance.jpg";
import mensFragrance from "@/assets/mens-fragrance.jpg";

export const GenderCollections = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Women's */}
          <Link
            to="/collection/fragrance?gender=women"
            className="group relative overflow-hidden rounded"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={womensFragrance}
                alt="Women's Fragrance Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-10">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-4">
                Women's Fragrance
              </h3>
              <span className="inline-block px-8 py-3 bg-[hsl(35,30%,55%)] text-white text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-[hsl(35,30%,45%)]">
                Shop Women's Fragrance
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
                alt="Men's Fragrance Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-0 left-0 p-8 lg:p-10">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-4">
                Men's Fragrance
              </h3>
              <span className="inline-block px-8 py-3 bg-[hsl(35,30%,55%)] text-white text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-[hsl(35,30%,45%)]">
                Shop Men's Fragrance
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
