import { HeroSection } from "@/components/HeroSection";
import { GenderCollections } from "@/components/GenderCollections";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { SignatureFragrance } from "@/components/SignatureFragrance";
import { BrandGallery } from "@/components/BrandGallery";
import { AboutSection } from "@/components/AboutSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <main>
      {/* TEMP MARKER — remove after verifying publish */}
      <div className="bg-red-600 text-white text-center py-2 text-xs font-bold tracking-widest z-50">
        ✅ BUILD v2 — PUBLISH VERIFIED
      </div>
      <HeroSection />
      <GenderCollections />
      <CategoryGrid />
      <FeaturedProducts />
      <SignatureFragrance />
      <BrandGallery />
      <AboutSection />
      <NewsletterSignup />
    </main>
  );
};

export default Index;
