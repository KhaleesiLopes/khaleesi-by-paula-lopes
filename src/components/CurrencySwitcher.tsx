import { ChevronDown, Check } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface CurrencySwitcherProps {
  variant?: "header" | "mobile";
}

export const CurrencySwitcher = ({ variant = "header" }: CurrencySwitcherProps) => {
  const { currency, setCurrency, options } = useCurrency();
  const items = useCartStore(state => state.items);

  const handleSelect = (next: typeof currency) => {
    if (next === currency) return;
    setCurrency(next);
    if (items.length > 0) {
      toast.info(`Currency changed to ${next}`, {
        description: "Items already in your bag keep their original currency. Clear the bag to checkout in the new currency.",
        position: "top-center",
      });
    }
  };

  const triggerClass = variant === "header"
    ? "flex items-center gap-1 text-[11px] font-body font-medium tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
    : "flex items-center gap-2 py-3 text-sm font-body font-medium tracking-[0.2em] uppercase text-foreground";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClass} aria-label="Select currency">
        <span>{currency}</span>
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[12rem] bg-background border border-border">
        {options.map(opt => (
          <DropdownMenuItem
            key={opt.currency}
            onSelect={() => handleSelect(opt.currency)}
            className="flex items-center justify-between text-xs font-body tracking-[0.15em] uppercase cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="w-4 inline-block text-center">{opt.symbol}</span>
              <span>{opt.currency}</span>
              <span className="text-muted-foreground normal-case tracking-normal text-[11px]">· {opt.label}</span>
            </span>
            {currency === opt.currency && <Check className="w-3 h-3 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
