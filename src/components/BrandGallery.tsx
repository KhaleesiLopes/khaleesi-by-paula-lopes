import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Khaleesi model with pearl jewelry and gold eyeshadow" },
  { src: gallery2, alt: "Dramatic spotlight on hand holding Khaleesi fragrance" },
  { src: gallery3, alt: "Model with pearls holding Khaleesi bottle" },
  { src: gallery4, alt: "Couple sharing a Khaleesi fragrance moment" },
];

export const BrandGallery = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-10">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            @khaleesifragrances
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Live the Khaleesi Lifestyle
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
