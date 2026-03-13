

## Problem Analysis

The Featured Fragrances section fails to load on the published site (khaleesi.shop) despite working intermittently in the Lovable preview. The Shopify Storefront API call either times out or errors, leaving users with a spinner or "Unable to load products" message. The fetched live site HTML confirms no product cards render.

## Root Cause

The client-side Shopify API call is unreliable on the published site -- likely due to network conditions, CORS behavior differences, or intermittent Shopify availability. The current code has no fallback: if the API fails, users see nothing.

## Solution: localStorage Product Cache + Improved UX

### 1. Add a localStorage cache layer to `useShopifyProducts`

- On every successful fetch, persist products to `localStorage` under a key like `khaleesi-featured-products`.
- If the API call fails (error state) AND cached data exists, return the cached data instead of showing an error.
- Include a timestamp so stale cache can be identified (but still shown as fallback).

### 2. Redesign `FeaturedProducts` component

- **Loading state**: Show skeleton product cards (image placeholder + text lines) matching the 2-column grid instead of a lone spinner. This feels faster and more polished.
- **Error with cache**: Show cached products normally (no error visible to users).
- **Error without cache**: Show a styled fallback block with "Shop Our Collection" CTA button linking to `/collection/fragrance`, instead of the current plain text error.
- **Remove the temp BUILD v3 marker** from Index.tsx.

### 3. Files to modify

- **`src/hooks/useShopifyProducts.ts`** -- Add localStorage read/write around the query, use `placeholderData` from cache.
- **`src/components/FeaturedProducts.tsx`** -- Replace spinner with skeleton grid, add fallback CTA block for error-without-cache state.
- **`src/pages/Index.tsx`** -- Remove the temporary red banner.

### Technical Detail

```text
Flow:
  Page loads
    ├─ useShopifyProducts fires API call
    │   ├─ Success → render products + save to localStorage
    │   └─ Failure (after 3 retries)
    │       ├─ localStorage has cached products → render cached products
    │       └─ No cache → render "Shop Our Collection" CTA block
    └─ While loading → show skeleton cards (not spinner)
```

The `placeholderData` option in react-query will be used to immediately show cached products while a fresh fetch is attempted in the background, eliminating the loading spinner for repeat visitors entirely.

