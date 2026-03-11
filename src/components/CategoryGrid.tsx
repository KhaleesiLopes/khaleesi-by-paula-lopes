import { Link } from "react-router-dom";

const categories = [
  { label: "Fragrance", to: "/collection/fragrance", emoji: "✦" },
  { label: "Makeup", to: "/collection/makeup", emoji: "✦" },
  { label: "Skincare", to: "/collection/skincare", emoji: "✦" },
  { label: "Spa", to: "/collection/spa", emoji: "✦" },
];

export const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(cat => (
          <Link
            key={cat.label}
            to={cat.to}
            className="group bg-card hover:bg-accent transition-colors rounded p-8 text-center"
          >
            <div className="text-3xl mb-4 text-primary opacity-60">{cat.emoji}</div>
            <h3 className="font-heading text-lg font-medium text-foreground">{cat.label}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
