

# Redesign Homepage to Match Reference Layout

## Overview
Restructure the entire homepage to match the reference image exactly. Key changes: bigger text logo, simplified hero without bottle overlay, reordered/removed sections, and cleaner component layouts.

## Changes

### 1. Header — Replace logo image with large text
- Remove `khaleesiLogo` image import
- Replace `<img>` with a styled `<span>` using `font-heading text-2xl lg:text-3xl tracking-wider` (3x bigger than current)
- Text: "Khaleesi" in Cormorant Garamond serif

### 2. HeroSection — Remove bottle, simplify layout
- Keep `hero-perfume.jpg` background
- Remove the `khaleesi-bottle.png` import and floating bottle element entirely
- Center the text content instead of left-aligned
- Simplify text to: "Khaleesi Fragrances" heading, "Luxury Scents for Him & Her" subtitle
- Button text: "Shop Fragrance" with a solid champagne/tan background (not glassmorphic)
- Reduce height from `90vh` to ~`70vh`
- Lighten overlay gradients so the background image is more visible

### 3. Page layout — Remove sections, reorder
Current order: Hero → Signature → GenderCollections → CategoryGrid → Featured → FragranceNotes → About → BrandGallery

New order (matching reference):
- Hero
- GenderCollections
- CategoryGrid
- FeaturedProducts
- AboutSection

Remove: `SignatureFragrance`, `FragranceNotes`, `BrandGallery`

### 4. GenderCollections — Match reference style
- Remove "Curated Collections" / "For Him & For Her" header
- Change titles to "Women's Fragrance" / "Men's Fragrance" (positioned top-left, not bottom)
- Button style: solid background (not glassmorphic), text "Shop Women's Fragrance" / "Shop Men's Fragrance"
- Lighter overlay gradient

### 5. CategoryGrid — Labels below images, no overlay
- Remove gradient overlay and text-on-image
- Show category images clean, with text label centered BELOW the image
- Remove subtitle text, keep just the category name
- Remove section header ("Explore Our World" / "Beauty, Elevated")

### 6. FeaturedProducts — Simplify header
- Change title to just "Featured Fragrances" with a simple divider line
- Remove "Curated Selection" subtitle
- Remove "View All Fragrances" button at bottom

### 7. AboutSection — Simplify copy
- Change heading to "About Khaleesi"
- Shorten description text
- Remove "The Khaleesi Story" label and decorative divider

### 8. Footer — Already close to reference, minor tweaks
- Ensure 4-column layout matches reference (Shop, Company, Legal, Follow Us)

### Files to edit
- `src/components/Header.tsx` — text logo
- `src/components/HeroSection.tsx` — remove bottle, center text
- `src/pages/Index.tsx` — remove 3 sections, reorder
- `src/components/GenderCollections.tsx` — restyle
- `src/components/CategoryGrid.tsx` — labels below images
- `src/components/FeaturedProducts.tsx` — simplify header
- `src/components/AboutSection.tsx` — simplify copy

