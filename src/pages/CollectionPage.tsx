import { useParams, useSearchParams } from "react-router-dom";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";
import womensImg from "@/assets/womens-collection-hero.png";
import mensImg from "@/assets/khal-model-1.png";
import categoryFragrance from "@/assets/category-fragrance.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categorySpa from "@/assets/category-spa.jpg";

interface CollectionMeta {
  title: string;
  description: string;
  heroImage: string;
}

const collectionMeta: Record<string, CollectionMeta> = {
  fragrance: {
    title: "Fragrance",
    description: "Discover our collection of luxury fragrances — timeless scents crafted for him and her.",
    heroImage: categoryFragrance,
  },
  makeup: {
    title: "Makeup",
    description: "Premium makeup essentials designed for a flawless, radiant finish.",
    heroImage: categoryMakeup,
  },
  skincare: {
    title: "Skincare",
    description: "Nourish and elevate your skin with our luxury skincare range.",
    heroImage: categorySkincare,
  },
  spa: {
    title: "Spa",
    description: "Indulge in our curated spa collection for ultimate relaxation and renewal.",
    heroImage: categorySpa,
  },
};

const genderMeta: Record<string, { title: string; subtitle: string; heroImage: string }> = {
  women: {
    title: "Women's Fragrance",
    subtitle: "Elegant scents designed for the modern woman.",
    heroImage: womensImg,
  },
  men: {
    title: "Men's Fragrance",
    subtitle: "Bold and refined fragrances for the distinguished gentleman.",
    heroImage: mensImg,
  },
};

const CollectionPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");

  const meta = collectionMeta[handle || ""] || {
    title: handle || "Collection",
    description: "",
    heroImage: categoryFragrance,
  };

  const genderInfo = gender ? genderMeta[gender] : null;

  // Build search query
  let searchQuery: string | undefined;
  if (handle) {
    searchQuery = `product_type:${handle}`;
    if (gender === "women") searchQuery += " AND tag:womens";
    if (gender === "men") searchQuery += " AND tag:men";
  }

  const { data: products, isLoading } = useShopifyProducts(50, searchQuery);

  const displayTitle = genderInfo?.title || meta.title;
  const displayDesc = genderInfo?.subtitle || meta.description;
  const heroImage = genderInfo?.heroImage || meta.heroImage;

  return (
    <main className="pt-16 md:pt-20 pb-0">
      {/* Collection Hero — split layout */}
      <section className="relative grid md:grid-cols-2 min-h-[280px] md:min-h-[400px] lg:min-h-[500px] bg-foreground">
        {/* Text panel */}
        <div className="flex items-end p-5 md:p-8 lg:p-16 pb-8 md:pb-12 lg:pb-16 order-2 md:order-1">
          <div>
            <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-background/60 mb-2 md:mb-3">
              {gender ? "Shop" : "Explore"}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-light tracking-wide text-background mb-3 md:mb-4">
              {displayTitle}
            </h1>
            <p className="font-body text-xs md:text-sm font-light tracking-wide text-background/70 max-w-sm">
              {displayDesc}
            </p>
          </div>
        </div>
        {/* Image panel */}
        <div className="relative min-h-[200px] md:min-h-full order-1 md:order-2 overflow-hidden">
          <img
            src={heroImage}
            alt={displayTitle}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-10 lg:py-16">
        {/* Product count */}
        {!isLoading && products && (
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
            {products.length} {products.length === 1 ? "Product" : "Products"}
          </p>
        )}

        {isLoading && (
          <div className="flex justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        {!isLoading && products && products.length === 0 && (
          <div className="text-center py-24">
            <p className="font-heading text-3xl font-light text-foreground mb-4">
              {handle === "fragrance" ? "No products found" : "Products Coming Soon"}
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              {handle === "fragrance"
                ? "Products will appear here once added to the store."
                : "We're crafting something special. Stay tuned for our upcoming collection."}
            </p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className={`grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16 ${
            products.length === 1 ? "grid-cols-1 max-w-sm mx-auto" :
            products.length === 2 ? "grid-cols-2 max-w-2xl mx-auto" :
            products.length === 3 ? "grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto" :
            "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}>
            {products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default CollectionPage;
