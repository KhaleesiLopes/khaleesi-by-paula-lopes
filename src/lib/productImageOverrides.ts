import productVelvetBloom from "@/assets/product-velvet-bloom.jpg";
import productInspreazione100ml from "@/assets/product-inspreazione-100ml.jpg";
import productInspirazione50ml from "@/assets/product-inspirazione-50ml.jpg";
import productRose from "@/assets/product-rose.jpg";
import productKhal from "@/assets/product-khal.jpg";

// Map product titles (lowercase) to luxury background images
const imageOverrides: Record<string, string> = {
  "velvet bloom": productVelvetBloom,
  "khaleesi velvet bloom": productVelvetBloom,
  "insprezione 100ml": productInspreazione100ml,
  "khaleesi insprezione eau de parfum - 100ml": productInspreazione100ml,
  "insprezione 50ml": productInspirazione50ml,
  "khaleesi insprezione eau de parfum - 50ml": productInspirazione50ml,
  "rose": productRose,
  "khaleesi rose": productRose,
  "khal eau de parfum 50ml": productKhal,
  "khal eau de parfum": productKhal,
};

export function getProductImageOverride(title: string): string | null {
  const lower = title.toLowerCase().trim();
  
  // Try exact match first
  if (imageOverrides[lower]) return imageOverrides[lower];
  
  // Try partial match
  for (const [key, url] of Object.entries(imageOverrides)) {
    if (lower.includes(key) || key.includes(lower)) return url;
  }
  
  return null;
}
