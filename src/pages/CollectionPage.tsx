import { useParams } from "react-router-dom";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";

const collectionMeta: Record<string, { title: string; description: string }> = {
  fragrance: { title: "Fragrance", description: "Discover our collection of luxury fragrances for him and her." },
  makeup: { title: "Makeup", description: "Premium makeup essentials for a flawless finish." },
  skincare: { title: "Skincare", description: "Nourish your skin with our luxury skincare range." },
  spa: { title: "Spa", description: "Indulge in our spa collection for ultimate relaxation." },
};

const CollectionPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const meta = collectionMeta[handle || ""] || { title: handle || "Collection", description: "" };
  
  // Use product_type or tag query matching the collection
  const searchQuery = handle ? `product_type:${handle}` : undefined;
  const { data: products, isLoading } = useShopifyProducts(50, searchQuery);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">{meta.title}</h1>
          <p className="body-elegant text-muted-foreground max-w-lg mx-auto">{meta.description}</p>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {!isLoading && products && products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted-foreground text-lg">No products found</p>
            <p className="font-body text-muted-foreground text-sm mt-2">
              Products will appear here once added to the Shopify store.
            </p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CollectionPage;
