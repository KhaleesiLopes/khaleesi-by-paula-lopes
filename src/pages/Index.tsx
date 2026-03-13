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
      <div style={{ background: '#ff0000', color: '#ffffff', textAlign: 'center', padding: '12px', fontSize: '16px', fontWeight: 'bold', letterSpacing: '2px', position: 'relative', zIndex: 9999 }}>
        ✅ BUILD v3 — PUBLISH VERIFIED
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
