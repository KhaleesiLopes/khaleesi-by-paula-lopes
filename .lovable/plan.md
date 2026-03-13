
Goal: restore Featured Fragrances on khaleesi.shop immediately and prevent this from recurring.

What I found
- Current codebase already has skeleton/cached fallback logic.
- Preview network logs show Shopify product API returning 200 with products.
- Live-domain snapshots still show old behavior at times (spinner/debug-banner variants), which indicates deployment/domain cache drift and/or production config mismatch, not just a UI bug.

Implementation plan (ASAP)
1) Harden Shopify config in `src/lib/shopify.ts`
- Add safe fallbacks for domain/token using the connected store values:
  - domain: `fcd20t-gd.myshopify.com`
  - token: `c77d699c04a81dd1db8183c0c1ef4cb7`
- Keep env vars as first priority; use fallback only if env is missing.
- Add explicit 401/403 error mapping (“Storefront token/domain authorization issue”) for faster diagnosis.

2) Remove “stuck loading” behavior in `src/hooks/useShopifyProducts.ts`
- In `queryFn`, on failure return cached products (if present) instead of throwing.
- Reduce long perceived wait by tuning retry/timeout behavior to fail fast into fallback UX.
- Keep existing localStorage persistence and placeholder data.

3) Ensure Featured section never appears broken in `src/components/FeaturedProducts.tsx`
- Keep 2-column mobile grid.
- Show skeletons briefly, then fallback CTA with a visible “Retry” action if no products.
- Use `refetch` on retry so users can recover without full page reload.

4) Publish/domain consistency check
- Republish frontend update.
- Verify both URLs serve identical latest bundle behavior:
  - `https://khaleesi-by-lopes.lovable.app`
  - `https://khaleesi.shop`
- If mismatch persists: purge CDN/domain cache and confirm domain is pointing to the active Lovable deployment.

5) Final production validation
- Confirm on khaleesi.shop:
  - Featured products render from Shopify on first visit.
  - If Shopify fails, cached products (or CTA) render instead of infinite loading.
  - Add-to-bag and checkout still function.

Technical notes
```text
Load flow after fix:
Shopify fetch succeeds -> render products + update cache
Shopify fetch fails + cache exists -> render cached products
Shopify fetch fails + no cache -> render CTA + Retry (no infinite spinner)
```
