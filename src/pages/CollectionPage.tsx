import { useParams, useSearchParams } from "react-router-dom";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";
import womensImg from "@/assets/womens-fragrance.jpg";
import mensImg from "@/assets/mens-fragrance.jpg";
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
    if (gender === "women") searchQuery += " AND tag:women";
    if (gender === "men") searchQuery += " AND tag:men";
  }

  const { data: products, isLoading } = useShopifyProducts(50, searchQuery);

  const displayTitle = genderInfo?.title || meta.title;
  const displayDesc = genderInfo?.subtitle || meta.description;
  const heroImage = genderInfo?.heroImage || meta.heroImage;

  return (
    <main className="pt-0 pb-0">
      {/* Collection Hero */}
      <section className="relative h-[40vh] min-h-[300px] lg:h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/20 to-foreground/10" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-12 lg:pb-16">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-background/70 mb-3">
              {gender ? "Shop" : "Explore"}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-background mb-3">
              {displayTitle}
            </h1>
            <p className="font-body text-sm font-light tracking-wide text-background/80 max-w-md">
              {displayDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Product count */}
        {!isLoading && products && (
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12">
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
            <p className="font-heading text-2xl font-light text-foreground mb-3">No products found</p>
            <p className="font-body text-sm text-muted-foreground">
              Products will appear here once added to the Shopify store.
            </p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
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
