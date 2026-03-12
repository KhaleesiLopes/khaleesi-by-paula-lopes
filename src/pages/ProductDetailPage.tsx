import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useShopifyProductByHandle, useShopifyProducts } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { ProductCard } from "@/components/ProductCard";
import { Loader2, Minus, Plus, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading } = useShopifyProductByHandle(handle || "");
  const { data: relatedProducts } = useShopifyProducts(5);
  const addItem = useCartStore(state => state.addItem);
  const cartLoading = useCartStore(state => state.isLoading);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <main className="pt-28 pb-20 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h1 className="font-heading text-3xl font-light text-foreground mb-4">Product not found</h1>
          <Link to="/collection/fragrance" className="font-body text-sm text-primary hover:underline">
            Return to collection
          </Link>
        </div>
      </main>
    );
  }

  const { node } = product;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const filteredRelated = relatedProducts?.filter(p => p.node.handle !== handle)?.slice(0, 4);

  const handleAddToBag = async () => {
    if (!selectedVariant) return;
    for (let i = 0; i < quantity; i++) {
      await addItem({
        product,
        variantId: selectedVariant.id,
        variantTitle: selectedVariant.title,
        price: selectedVariant.price,
        quantity: 1,
        selectedOptions: selectedVariant.selectedOptions || [],
      });
    }
    toast.success("Added to bag", { description: `${node.title} × ${quantity}`, position: "top-center" });
    setQuantity(1);
  };

  return (
    <main className="pt-20 md:pt-24 lg:pt-28 pb-0">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-12 mb-5 md:mb-8 lg:mb-12">
        <Link
          to="/collection/fragrance"
          className="inline-flex items-center gap-1.5 text-xs font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Collection
        </Link>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-card rounded overflow-hidden">
              {images[selectedImageIndex]?.node ? (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-sm">
                  No image available
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-20 h-20 lg:w-24 lg:h-24 rounded overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                      i === selectedImageIndex
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:py-8">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              Khaleesi
            </p>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-4 md:mb-6">
              {node.title}
            </h1>
            <p className="font-heading text-2xl font-light text-foreground mb-8">
              £{parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
            </p>

            <div className="w-12 h-px bg-primary mb-8" />

            <p className="font-body text-sm font-light leading-relaxed tracking-wide text-muted-foreground mb-10">
              {node.description}
            </p>

            {/* Scent Notes Section (for fragrance products) */}
            <div className="bg-card rounded p-6 lg:p-8 mb-8">
              <h3 className="font-heading text-lg font-medium text-foreground mb-4">Scent Profile</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Top</p>
                  <p className="font-heading text-sm italic text-primary">Bergamot · Citrus</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Heart</p>
                  <p className="font-heading text-sm italic text-primary">Jasmine · Vanilla</p>
                </div>
                <div className="text-center">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Base</p>
                  <p className="font-heading text-sm italic text-primary">Sandalwood · Musk</p>
                </div>
              </div>
            </div>

            {/* Options */}
            {node.options.map(option => {
              if (option.name === "Title" && option.values.length === 1 && option.values[0] === "Default Title") return null;
              return (
                <div key={option.name} className="mb-8">
                  <label className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 block">
                    {option.name}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {option.values.map(value => {
                      const variantIdx = variants.findIndex(v =>
                        v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                      );
                      const isSelected = variantIdx === selectedVariantIndex;
                      const variant = variants[variantIdx]?.node;
                      return (
                        <button
                          key={value}
                          onClick={() => variantIdx >= 0 && setSelectedVariantIndex(variantIdx)}
                          disabled={variant && !variant.availableForSale}
                          className={`px-5 py-2.5 border text-sm font-body tracking-wide transition-all duration-200 ${
                            isSelected
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-foreground hover:border-foreground disabled:opacity-40 disabled:cursor-not-allowed disabled:line-through"
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

            {/* Quantity + Add to Bag */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex items-center border border-border">
                <button
                  className="px-4 py-3.5 hover:bg-card transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-body text-sm">{quantity}</span>
                <button
                  className="px-4 py-3.5 hover:bg-card transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToBag}
                disabled={cartLoading || !selectedVariant?.availableForSale}
                className="flex-1 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cartLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Add to Bag"}
              </button>
            </div>

            {selectedVariant && !selectedVariant.availableForSale && (
              <p className="font-body text-xs text-muted-foreground mt-4 tracking-wide">
                This item is currently out of stock.
              </p>
            )}

            {/* Shipping note */}
            <div className="mt-10 pt-8 border-t border-border space-y-3">
              {["Complimentary shipping on orders over £100", "Luxury gift wrapping available", "14-day returns on unopened products"].map(note => (
                <p key={note} className="font-body text-xs text-muted-foreground tracking-wide flex items-center gap-2">
                  <span className="text-primary">✦</span> {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {filteredRelated && filteredRelated.length > 0 && (
        <section className="bg-card mt-12 md:mt-24 lg:mt-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-24">
            <div className="text-center mb-8 md:mb-14">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
                You May Also Love
              </p>
              <h2 className="font-heading text-3xl font-light tracking-wide text-foreground">
                Recommended Fragrances
              </h2>
              <div className="w-12 h-px bg-primary mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredRelated.map(p => (
                <ProductCard key={p.node.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetailPage;
