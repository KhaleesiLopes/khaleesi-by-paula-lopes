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
      <HeroSection />
      <FeaturedProducts />
      <GenderCollections />
      <CategoryGrid />
      <SignatureFragrance />
      <BrandGallery />
      <AboutSection />
      <NewsletterSignup />
    </main>
  );
};

export default Index;
