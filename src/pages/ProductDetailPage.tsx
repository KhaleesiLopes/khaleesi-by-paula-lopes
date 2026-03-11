import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShopifyProductByHandle } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading } = useShopifyProductByHandle(handle || "");
  const addItem = useCartStore(state => state.addItem);
  const cartLoading = useCartStore(state => state.isLoading);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (isLoading) {
    return (
      <main className="pt-24 pb-20 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h1 className="heading-display text-3xl text-foreground">Product not found</h1>
        </div>
      </main>
    );
  }

  const { node } = product;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;

  const handleAddToBag = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Added to bag", { description: node.title, position: "top-center" });
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div>
            <div className="aspect-square bg-card rounded overflow-hidden mb-4">
              {images[selectedImageIndex]?.node && (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || node.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                      i === selectedImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="heading-display text-3xl md:text-4xl text-foreground mb-4">{node.title}</h1>
            <p className="font-heading text-2xl text-foreground mb-6">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
            </p>

            <p className="body-elegant text-muted-foreground mb-8 leading-relaxed">{node.description}</p>

            {/* Options */}
            {node.options.map(option => {
              if (option.name === "Title" && option.values.length === 1 && option.values[0] === "Default Title") return null;
              return (
                <div key={option.name} className="mb-6">
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3 block">
                    {option.name}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map(value => {
                      const variantIdx = variants.findIndex(v =>
                        v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                      );
                      const isSelected = variantIdx === selectedVariantIndex;
                      return (
                        <button
                          key={value}
                          onClick={() => variantIdx >= 0 && setSelectedVariantIndex(variantIdx)}
                          className={`px-4 py-2 border text-sm font-body transition-colors ${
                            isSelected
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-foreground hover:border-foreground"
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <button
              onClick={handleAddToBag}
              disabled={cartLoading || !selectedVariant?.availableForSale}
              className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {cartLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Add to Bag"}
            </button>

            {selectedVariant && !selectedVariant.availableForSale && (
              <p className="font-body text-sm text-muted-foreground mt-3">Currently out of stock</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
