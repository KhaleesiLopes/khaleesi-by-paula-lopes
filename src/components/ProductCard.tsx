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
      <div className="aspect-square bg-card rounded overflow-hidden mb-4">
        {firstImage ? (
          <img
            src={firstImage.url}
            alt={firstImage.altText || node.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-sm">
            No image
          </div>
        )}
      </div>
      <h3 className="font-heading text-lg font-medium text-foreground mb-1">{node.title}</h3>
      <p className="font-body text-sm text-muted-foreground mb-3">
        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
      </p>
      <button
        onClick={handleAddToBag}
        disabled={isLoading || !firstVariant?.availableForSale}
        className="w-full py-2.5 border border-foreground text-foreground text-xs font-body font-medium tracking-widest uppercase transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Add to Bag"}
      </button>
    </Link>
  );
};
