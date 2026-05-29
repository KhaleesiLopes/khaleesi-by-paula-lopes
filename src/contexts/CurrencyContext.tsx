import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type SupportedCurrency = "USD" | "GBP" | "NGN";
export type SupportedCountry = "US" | "GB" | "NG";

interface CurrencyOption {
  currency: SupportedCurrency;
  country: SupportedCountry;
  label: string;
  symbol: string;
}

export const CURRENCY_OPTIONS: CurrencyOption[] = [
  { currency: "USD", country: "US", label: "United States", symbol: "$" },
  { currency: "GBP", country: "GB", label: "United Kingdom", symbol: "£" },
  { currency: "NGN", country: "NG", label: "Nigeria", symbol: "₦" },
];

const STORAGE_KEY = "khaleesi-currency";
const DEFAULT_CURRENCY: SupportedCurrency = "GBP";

const COUNTRY_TO_CURRENCY: Record<string, SupportedCurrency> = {
  US: "USD",
  GB: "GBP",
  NG: "NGN",
};

interface CurrencyContextValue {
  currency: SupportedCurrency;
  country: SupportedCountry;
  setCurrency: (c: SupportedCurrency) => void;
  options: CurrencyOption[];
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

function currencyToCountry(c: SupportedCurrency): SupportedCountry {
  return (CURRENCY_OPTIONS.find(o => o.currency === c)?.country) || "GB";
}

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<SupportedCurrency>(() => {
    if (typeof window === "undefined") return DEFAULT_CURRENCY;
    const stored = localStorage.getItem(STORAGE_KEY) as SupportedCurrency | null;
    if (stored && ["USD", "GBP", "NGN"].includes(stored)) return stored;
    return DEFAULT_CURRENCY;
  });

  // Auto-detect on first visit only (no stored preference)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        const cc: string | undefined = data?.country_code;
        if (!cc) return;
        const detected = COUNTRY_TO_CURRENCY[cc] || "USD";
        setCurrencyState(detected);
        localStorage.setItem(STORAGE_KEY, detected);
      })
      .catch(() => { /* silent fallback */ })
      .finally(() => clearTimeout(timeoutId));
    return () => { clearTimeout(timeoutId); controller.abort(); };
  }, []);

  const setCurrency = (c: SupportedCurrency) => {
    setCurrencyState(c);
    try { localStorage.setItem(STORAGE_KEY, c); } catch { /* ignore */ }
  };

  const value = useMemo<CurrencyContextValue>(() => ({
    currency,
    country: currencyToCountry(currency),
    setCurrency,
    options: CURRENCY_OPTIONS,
  }), [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
