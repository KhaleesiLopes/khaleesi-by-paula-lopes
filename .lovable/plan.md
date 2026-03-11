

## Problem

The product images are inconsistent sizes with random gaps because `object-contain` preserves each image's natural proportions, leaving empty space around smaller images. The grid looks uneven and not luxurious.

## Plan

**ProductCard.tsx** — Make images uniform and polished:
- Change image container from `aspect-square` to `aspect-[3/4]` (taller, more editorial)
- Switch images from `object-contain` back to `object-cover` so they fill the frame consistently with no gaps
- Add subtle padding inside the image container so product bottles aren't edge-to-edge
- Ensure all cards align perfectly in the grid

**FeaturedProducts.tsx** — Tighten the grid:
- Increase gap slightly for breathing room: `gap-8` on desktop
- Keep `grid-cols-2 md:grid-cols-4` layout

This will produce a clean, uniform 4-column grid where every image is the same size, edge-aligned, with no random whitespace — matching a luxury editorial look.

