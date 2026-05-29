## Goal
Show prices in USD, GBP, or NGN based on visitor location, with a header dropdown to override. Use Shopify's native multi-currency (`@inContext`) so checkout also charges in the selected currency.

## Prerequisite (client action in Shopify admin)
For accurate prices and matching checkout, the store's **Markets** must have USD, GBP, and NGN enabled as presentment currencies:
- Shopify Admin → Settings → Markets → enable regions covering US (USD), UK (GBP), Nigeria (NGN), or add them as presentment currencies on the primary market.

If a currency is not configured in Markets, Shopify falls back to the shop's base currency. We'll handle that gracefully (show whatever Shopify returns).

## Implementation

### 1. Currency context (`src/contexts/CurrencyContext.tsx`)
- Supported: `USD | GBP | NGN`. Map to country codes (`US | GB | NG`) for `@inContext(country: ...)`.
- On first load:
  1. Read `localStorage.khaleesi-currency` — if set, use it.
  2. Otherwise call `https://ipapi.co/json/` (free, no key) once, map country → currency (`NG → NGN`, `GB → GBP`, default `USD`).
  3. Cache result in localStorage.
- Expose `{ currency, country, setCurrency, symbol }`.
- Wrap app in `App.tsx` above `BrowserRouter`.

### 2. Shopify queries with `@inContext`
In `src/lib/shopify.ts`:
- Add `country: CountryCode!` variable + `@inContext(country: $country)` to `STOREFRONT_PRODUCTS_QUERY` and `STOREFRONT_PRODUCT_BY_HANDLE_QUERY`. Shopify returns `priceRange.minVariantPrice` and `variants.price` already converted to the matching presentment currency.
- `storefrontApiRequest` already accepts variables — callers will pass `country`.
- Cart mutations: add `@inContext(country: $country)` to `cartCreate` so the cart/checkout is created in that currency. Pass the current country through `createShopifyCart`.

### 3. Hooks update
- `src/hooks/useShopifyProducts.ts`: read `country` from CurrencyContext, include in React Query key, pass to query variables. Refetch on currency change.
- `ProductDetailPage` product fetch: same treatment.
- `cartStore.addItem`: accept a `country` param (passed from the call site that has access to context) so `cartCreate` is contextualized.

### 4. Price formatting
- New helper `formatMoney(amount, currencyCode)` using `Intl.NumberFormat` with the right locale (`en-US`, `en-GB`, `en-NG`) and currency. Replace all hardcoded `£` symbols in:
  - `ProductCard.tsx`, `ProductDetailPage.tsx`, `CartDrawer.tsx`, `FeaturedProducts.tsx`, anywhere else GBP `£` is printed.
- Always render the symbol returned by Shopify's `currencyCode`, not a hardcoded one.

### 5. Currency switcher UI (header)
- New `CurrencySwitcher.tsx`: small shadcn `DropdownMenu` trigger showing current code + chevron (e.g. `GBP ▾`). Items: `$ USD · United States`, `£ GBP · United Kingdom`, `₦ NGN · Nigeria`. Selecting updates context + localStorage and triggers refetch.
- Place in `Header.tsx` desktop right cluster (left of cart icon) and inside mobile menu at the top.

### 6. Memory update
- Update `mem://index.md` Core: replace "Pricing in GBP (£) with hardcoded symbols" with "Pricing localized via Shopify @inContext — USD/GBP/NGN; never hardcode currency symbols, use `formatMoney`."
- Add a memory file `mem://features/currency-localization` documenting the flow and Markets requirement.

## Technical notes
- `CountryCode` scalar in Storefront API is the ISO 3166-1 alpha-2 code.
- Shopify silently returns base-currency prices if the country's presentment currency isn't configured — UI still works, just no conversion.
- ipapi.co free tier: 1000 req/day, no key. Fallback to `USD` if it fails.
- Cart cannot change currency after creation; if user switches currency with items in cart, we keep the cart but show a toast: "Currency change applies to new items. Clear bag to recheckout in {NEW}." (Optional: provide clear-bag link.)

## Out of scope
- Translating product copy.
- Tax/region-specific compliance copy.
- Persisting currency per Shopify customer account.
