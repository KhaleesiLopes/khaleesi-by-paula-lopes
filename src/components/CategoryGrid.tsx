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
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => (
            <Link key={cat.label} to={cat.to} className="group text-center">
              <div className="aspect-square overflow-hidden rounded mb-3">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground">
                {cat.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
