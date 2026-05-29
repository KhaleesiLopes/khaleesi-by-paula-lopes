// Locale-aware money formatter. Always use Shopify's returned currencyCode —
// never hardcode a symbol.

const LOCALE_BY_CURRENCY: Record<string, string> = {
  USD: "en-US",
  GBP: "en-GB",
  NGN: "en-NG",
  EUR: "en-IE",
};

export function formatMoney(amount: number | string, currencyCode = "GBP"): string {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  if (!Number.isFinite(value)) return "";
  const locale = LOCALE_BY_CURRENCY[currencyCode] || "en-US";
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      // NGN amounts are commonly large — keep two decimals for consistency
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currencyCode} ${value.toFixed(2)}`;
  }
}
