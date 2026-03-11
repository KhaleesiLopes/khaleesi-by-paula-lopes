import { HeroSection } from "@/components/HeroSection";
import { SignatureFragrance } from "@/components/SignatureFragrance";
import { GenderCollections } from "@/components/GenderCollections";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FragranceNotes } from "@/components/FragranceNotes";
import { AboutSection } from "@/components/AboutSection";
import { BrandGallery } from "@/components/BrandGallery";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <SignatureFragrance />
      <GenderCollections />
      <CategoryGrid />
      <FeaturedProducts />
      <FragranceNotes />
      <AboutSection />
      <BrandGallery />
    </main>
  );
};

export default Index;
