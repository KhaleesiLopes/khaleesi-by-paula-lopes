import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  useEffect(() => {
    if (open) syncCart();
  }, [open, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      onOpenChange(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-background">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-heading text-2xl font-medium">Your Bag</SheetTitle>
          <SheetDescription className="font-body text-sm">
            {totalItems === 0 ? "Your bag is empty" : `${totalItems} item${totalItems !== 1 ? 's' : ''} in your bag`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-body">Your bag is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-4 pb-6 border-b border-border">
                      <div className="w-20 h-20 bg-card rounded overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img src={item.product.node.images.edges[0].node.url} alt={item.product.node.title} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-base font-medium truncate">{item.product.node.title}</h4>
                        <p className="text-xs font-body text-muted-foreground mt-0.5">
                          {item.selectedOptions.map(o => o.value).join(' · ')}
                        </p>
                        <p className="font-body font-medium text-sm mt-1">
                          {item.price.currencyCode} {parseFloat(item.price.amount).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <button onClick={() => removeItem(item.variantId)} className="text-muted-foreground hover:text-foreground transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="flex items-center gap-2 border border-border rounded">
                          <button className="p-1 hover:bg-card transition-colors" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-body">{item.quantity}</span>
                          <button className="p-1 hover:bg-card transition-colors" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 space-y-4 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-lg">Total</span>
                  <span className="font-heading text-xl font-medium">{items[0]?.price.currencyCode || '£'} {totalPrice.toFixed(2)}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full h-12 font-body text-xs tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={items.length === 0 || isLoading || isSyncing}
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Checkout
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
