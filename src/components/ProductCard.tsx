import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const { node } = product;
  const firstImage = node.images.edges[0]?.node;
  const secondImage = node.images.edges[1]?.node;
  const firstVariant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToBag = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant) return;

    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success("Added to bag", {
      description: node.title,
      position: "top-center",
    });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      {/* Image with hover swap */}
      <div className="aspect-square bg-card rounded overflow-hidden mb-5 relative">
        {firstImage ? (
          <>
            <img
              src={firstImage.url}
              alt={firstImage.altText || node.title}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                secondImage ? "group-hover:opacity-0" : ""
              }`}
              loading="lazy"
            />
            {secondImage && (
              <img
                src={secondImage.url}
                alt={secondImage.altText || node.title}
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-xs tracking-wide">
            No image
          </div>
        )}

        {/* Hover Add to Bag overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToBag}
            disabled={isLoading || !firstVariant?.availableForSale}
            className="w-full py-3 bg-background/95 backdrop-blur-sm text-foreground text-[10px] font-body font-medium tracking-[0.25em] uppercase transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" /> : "Add to Bag"}
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-heading text-base lg:text-lg font-medium text-foreground mb-1 transition-colors group-hover:text-primary">
        {node.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground">
        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
      </p>

      {/* Mobile Add to Bag (visible only on touch devices) */}
      <button
        onClick={handleAddToBag}
        disabled={isLoading || !firstVariant?.availableForSale}
        className="lg:hidden w-full mt-3 py-2.5 border border-foreground text-foreground text-[10px] font-body font-medium tracking-[0.25em] uppercase transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" /> : "Add to Bag"}
      </button>
    </Link>
  );
};
