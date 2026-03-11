import { Link } from "react-router-dom";
import womensFragrance from "@/assets/womens-fragrance.jpg";
import mensFragrance from "@/assets/mens-fragrance.jpg";

export const GenderCollections = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/collection/fragrance?gender=women" className="group relative overflow-hidden rounded">
          <div className="aspect-[4/3]">
            <img
              src={womensFragrance}
              alt="Women's Fragrance Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-background/10" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-3">
              Women's Fragrance
            </h3>
            <span className="inline-block px-6 py-2.5 bg-background/90 text-foreground text-xs font-body font-medium tracking-widest uppercase">
              Shop Women's Fragrance
            </span>
          </div>
        </Link>
        <Link to="/collection/fragrance?gender=men" className="group relative overflow-hidden rounded">
          <div className="aspect-[4/3]">
            <img
              src={mensFragrance}
              alt="Men's Fragrance Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-background/10" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-3">
              Men's Fragrance
            </h3>
            <span className="inline-block px-6 py-2.5 bg-background/90 text-foreground text-xs font-body font-medium tracking-widest uppercase">
              Shop Men's Fragrance
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
