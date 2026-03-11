import { Link } from "react-router-dom";
import categoryFragrance from "@/assets/category-fragrance.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categorySpa from "@/assets/category-spa.jpg";

const categories = [
  { label: "Fragrance", to: "/collection/fragrance", image: categoryFragrance },
  { label: "Makeup", to: "/collection/makeup", image: categoryMakeup },
  { label: "Skincare", to: "/collection/skincare", image: categorySkincare },
  { label: "Spa", to: "/collection/spa", image: categorySpa },
];

export const CategoryGrid = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Beauty Categories
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.label}
              to={cat.to}
              className="group relative overflow-hidden rounded"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-center">
                <h3 className="font-heading text-lg md:text-xl font-medium text-background">
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
