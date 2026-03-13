import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw } from "lucide-react";

const ProductSkeleton = () => (
  <div className="flex flex-col">
    <Skeleton className="aspect-[3/4] w-full mb-3 md:mb-5" />
    <Skeleton className="h-4 w-3/4 mb-2" />
    <Skeleton className="h-3 w-1/3" />
  </div>
);

const FallbackCTA = ({ onRetry }: { onRetry?: () => void }) => (
  <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center">
    <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mb-3">
      Discover Our Collection
    </h3>
    <p className="font-body text-sm text-muted-foreground mb-8 max-w-md">
      Explore our curated selection of luxury fragrances, crafted to captivate.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <Link
        to="/collection/fragrance"
        className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-foreground text-[11px] font-body font-medium tracking-[0.25em] uppercase transition-colors hover:bg-foreground hover:text-background"
      >
        Shop Fragrances
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-body font-medium tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Retry
        </button>
      )}
    </div>
  </div>
);

export const FeaturedProducts = () => {
  const { data: products, isLoading, refetch } = useShopifyProducts(8);

  const hasProducts = products && products.length > 0;
  const showSkeletons = isLoading && !hasProducts;

  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Featured Fragrances
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {showSkeletons && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {!showSkeletons && !hasProducts && (
          <FallbackCTA onRetry={() => refetch()} />
        )}

        {hasProducts && (
          <div className={`grid gap-4 md:gap-8 ${
            products.length === 1 ? "grid-cols-1 max-w-xs" :
            products.length === 2 ? "grid-cols-2 max-w-2xl" :
            products.length === 3 ? "grid-cols-2 md:grid-cols-3 max-w-4xl" :
            "grid-cols-2 md:grid-cols-4"
          } mx-auto`}>
            {products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
