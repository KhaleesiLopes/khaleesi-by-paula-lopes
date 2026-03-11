import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const { data: products, isLoading, error } = useShopifyProducts(10);

  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Featured Fragrances
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <p className="text-center text-muted-foreground font-body">
            Unable to load products at this time.
          </p>
        )}

        {!isLoading && !error && products && products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted-foreground text-lg mb-2">No products found</p>
            <p className="font-body text-muted-foreground text-sm">
              Products will appear here once added to the Shopify store.
            </p>
          </div>
        )}

        {products && products.length > 0 && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {products.map(product => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
