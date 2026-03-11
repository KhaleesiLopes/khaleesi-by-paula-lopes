import { HeroSection } from "@/components/HeroSection";
import { GenderCollections } from "@/components/GenderCollections";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <GenderCollections />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
    </main>
  );
};

export default Index;
