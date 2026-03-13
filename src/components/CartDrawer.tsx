import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, X, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { normalizeCheckoutUrl } from "@/lib/shopify";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  const formatCurrency = (amount: number) => `£${amount.toFixed(2)}`;

  useEffect(() => {
    if (open) syncCart();
  }, [open, syncCart]);

  const handleCheckout = async () => {
    await syncCart();
    const checkoutUrl = getCheckoutUrl();
    if (!checkoutUrl) {
      toast.error("Unable to proceed to checkout", {
        description: "Please try clearing your bag and adding items again.",
        position: "top-center",
      });
      return;
    }

    const safeCheckoutUrl = normalizeCheckoutUrl(checkoutUrl);
    const checkoutWindow = window.open(safeCheckoutUrl, '_blank', 'noopener,noreferrer');
    if (!checkoutWindow) {
      window.location.assign(safeCheckoutUrl);
    }

    onOpenChange(false);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Bag cleared", { position: "top-center" });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l border-border p-0">
        {/* Header */}
        <SheetHeader className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading text-2xl font-light tracking-wide">
              Your Bag
            </SheetTitle>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {totalItems} {totalItems === 1 ? "Item" : "Items"}
            </span>
          </div>
        </SheetHeader>

        {/* Content */}
        <div className="flex flex-col flex-1 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground/40 mx-auto mb-5" />
                <p className="font-heading text-xl font-light text-foreground mb-2">Your bag is empty</p>
                <p className="font-body text-xs text-muted-foreground tracking-wide mb-8">
                  Discover our collection of luxury fragrances
                </p>
                <Link
                  to="/collection/fragrance"
                  onClick={() => onOpenChange(false)}
                  className="inline-block px-8 py-3 border border-foreground text-foreground text-xs font-body tracking-[0.2em] uppercase transition-all hover:bg-foreground hover:text-background"
                >
                  Shop Fragrance
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto min-h-0 px-6 py-6">
                <div className="space-y-0">
                  {items.map((item, idx) => (
                    <div
                      key={item.variantId}
                      className={`flex gap-4 py-6 ${idx !== items.length - 1 ? "border-b border-border" : ""}`}
                    >
                      {/* Image */}
                      <Link
                        to={`/product/${item.product.node.handle}`}
                        onClick={() => onOpenChange(false)}
                        className="w-20 h-24 bg-card rounded overflow-hidden flex-shrink-0"
                      >
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </Link>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              to={`/product/${item.product.node.handle}`}
                              onClick={() => onOpenChange(false)}
                              className="font-heading text-base font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                            >
                              {item.product.node.title}
                            </Link>
                            <button
                              onClick={() => removeItem(item.variantId)}
                              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5"
                              aria-label="Remove item"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          {item.selectedOptions.some(o => o.value !== "Default Title") && (
                            <p className="text-[11px] font-body text-muted-foreground mt-1">
                              {item.selectedOptions.filter(o => o.value !== "Default Title").map(o => o.value).join(" · ")}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-border">
                            <button
                              className="px-2.5 py-1.5 hover:bg-card transition-colors"
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-body">{item.quantity}</span>
                            <button
                              className="px-2.5 py-1.5 hover:bg-card transition-colors"
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          {/* Price */}
                          <p className="font-body text-sm font-medium text-foreground">
                            {formatCurrency(parseFloat(item.price.amount) * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 px-6 py-6 border-t border-border bg-background space-y-5">
                <div className="flex justify-between items-baseline">
                  <span className="font-heading text-lg font-light">Subtotal</span>
                  <span className="font-heading text-xl font-medium">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
                <p className="font-body text-[11px] text-muted-foreground tracking-wide">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={() => void handleCheckout()}
                  className="w-full py-4 bg-primary text-primary-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-primary/90 disabled:opacity-50"
                  disabled={items.length === 0 || isLoading || isSyncing}
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>
                <button
                  onClick={() => onOpenChange(false)}
                  className="w-full py-3 text-xs font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
