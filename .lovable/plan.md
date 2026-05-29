## Rebalance Top Navigation

The current layout has 6 links on the left and only 2 on the right, pushing the centered logo off-center and crowding the "Accessories" label against it.

### New layout (4 left · logo · 4 right)

**Left of logo:**
- Home
- Fragrance
- Makeup
- Skincare

**Right of logo:**
- Spa
- Accessories
- Ambassadors
- About

This keeps all category links visible, gives equal visual weight on both sides of the centered "KHALEESI" wordmark, and frees up space so "Accessories" no longer collides with the logo.

### Technical change
- `src/components/Header.tsx`: update `navLinksLeft` and `navLinksRight` arrays per above. No other files affected — mobile menu already renders `allNavLinks` (the concatenation), so it stays correct automatically.