

# Model Image Placement Plan

Here are the 7 uploaded images and where each fits best across the site:

## Suggested Placements

### 1. Hero Banner (Homepage)
**Image 11** (gold disc backdrop, holding bottle) -- Replace the current `hero-perfume.jpg`. This is the strongest, most editorial shot and sets the luxury tone immediately.

### 2. Women's Fragrance Collection Banner
**Image 10** (dark background, bottle over eye) -- Replace the collection page hero for `/collection/fragrance?gender=women`. Moody, editorial, perfect for a collection header.

### 3. Signature Fragrance Section (Homepage)
**Image 14** (pink tulle, holding Rose bottle) -- Replace `signature-fragrance.jpg`. The soft, feminine styling pairs perfectly with the "Art of Distinction" copy.

### 4. Brand Gallery (Homepage -- 4 images)
Replace the current placeholder gallery images with four of the remaining shots:
- **Image 9** (pearls, gold eyeshadow, eyes closed) -- glamour/beauty
- **Image 12** (dramatic spotlight, hand holding bottle) -- artistic
- **Image 13** (pearls, holding bottle beside face) -- editorial
- **Image 15** (couple, spraying fragrance) -- lifestyle/his-and-hers

### 5. About Page
**Image 10** or a duplicate of **Image 11** -- Replace the current `about-brand.jpg` with one of the stronger model portraits to make the About page feel more personal and on-brand.

## Summary of File Replacements

| Image | Saves to | Replaces | Used in |
|-------|----------|----------|---------|
| image-11 | `src/assets/hero-perfume.jpg` | Hero banner | HeroSection |
| image-10 | `src/assets/womens-fragrance.jpg` | Women's collection hero | GenderCollections, CollectionPage |
| image-14 | `src/assets/signature-fragrance.jpg` | Signature section | SignatureFragrance |
| image-9 | `src/assets/gallery-1.jpg` | Gallery slot 1 | BrandGallery |
| image-12 | `src/assets/gallery-2.jpg` | Gallery slot 2 | BrandGallery |
| image-13 | `src/assets/gallery-3.jpg` | Gallery slot 3 | BrandGallery |
| image-15 | `src/assets/gallery-4.jpg` | Gallery slot 4 | BrandGallery |
| image-11 | `src/assets/about-brand.jpg` | About page photo | AboutPage |

## Technical Approach
- Copy each uploaded image to the corresponding asset path, overwriting the existing file
- No code changes needed -- all components already import these asset filenames
- Update alt text in BrandGallery to reflect the actual model imagery
- The SignatureFragrance component is not currently on the homepage; optionally add it back to Index.tsx between FeaturedProducts and AboutSection for more visual richness

