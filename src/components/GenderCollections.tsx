import { Link } from "react-router-dom";
import womensFragrance from "@/assets/womens-fragrance.jpg";
import mensFragrance from "@/assets/mens-fragrance.jpg";

export const GenderCollections = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
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
            <div className="absolute bottom-0 left-0 p-5 md:p-8 lg:p-10">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-white mb-3 md:mb-4">
                Women's Fragrance
              </h3>
              <span className="inline-block px-5 md:px-8 py-2.5 md:py-3 bg-[hsl(35,30%,55%)] text-white text-[10px] md:text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-[hsl(35,30%,45%)]">
                Shop Women's
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
            <div className="absolute bottom-0 left-0 p-5 md:p-8 lg:p-10">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-white mb-3 md:mb-4">
                Men's Fragrance
              </h3>
              <span className="inline-block px-5 md:px-8 py-2.5 md:py-3 bg-[hsl(35,30%,55%)] text-white text-[10px] md:text-xs font-body font-medium tracking-[0.2em] uppercase transition-all group-hover:bg-[hsl(35,30%,45%)]">
                Shop Men's
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
