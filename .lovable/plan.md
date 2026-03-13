

## Diagnosis

The Shopify API is working correctly (200 response, 5 products returned). The published site loads fine. The issues are likely:

1. **Slow loading** — Many large images are bundled as static imports (hero, collections, gallery, 5 product override images). This increases initial bundle size significantly.
2. **Products "not showing"** — Products are in the 4th section below the fold. Users may not scroll far enough.
3. **Ordering issues** — Potentially a stale/expired cart in localStorage causing checkout failures.

## Plan

### 1. Optimize image loading for speed
- Convert static image imports in non-critical sections (`CategoryGrid`, `BrandGallery`, `AboutSection`, `SignatureFragrance`) to use `loading="lazy"` (already done in some places, verify all).
- Add `loading="lazy"` to product override images in `ProductCard`.
- Consider moving the `FeaturedProducts` section higher on the homepage (e.g., right after `GenderCollections`, before `CategoryGrid`).

### 2. Move products higher on the homepage
- Reorder `Index.tsx` sections: `HeroSection` → `FeaturedProducts` → `GenderCollections` → `CategoryGrid` → rest. This ensures products are visible sooner.

### 3. Add cart error recovery
- In `CartDrawer`, if checkout URL is null after sync, show an error message instead of silently failing.
- Add a "clear cart" fallback button so users can reset a stale cart.

### 4. Re-publish the site
- After changes, the site needs to be re-published for the client to see updates on the live URL.

## Technical Details

**Files to modify:**
- `src/pages/Index.tsx` — reorder sections to show products earlier
- `src/components/CartDrawer.tsx` — add error state for failed checkout
- `src/components/ProductCard.tsx` — ensure lazy loading on override images

These are lightweight changes that should noticeably improve perceived speed and product visibility.

