import ambassadorDebora from "@/assets/ambassador-debora.jpg";
import ambassadorMary from "@/assets/ambassador-mary.jpg";

const ambassadors = [
  {
    name: "Débora Vanessa Valdez",
    location: "Lisbon, Portugal",
    image: ambassadorMary,
    bio: [
      "Based in Lisbon, Portugal, our ambassador represents the vision and spirit of Khaleesi in one of Europe's most vibrant cities. With a genuine passion for fragrance and creativity, she helps introduce Khaleesi perfumes to new audiences while embodying the elegance, confidence, and individuality behind the brand.",
      "Through her work and presence, she supports Khaleesi's growth by sharing authentic experiences with our fragrances, connecting with the community, and helping build awareness of our collection across Portugal and beyond. Her dedication and influence play an important role in expanding the Khaleesi brand internationally.",
      "From Lisbon, she proudly represents Khaleesi and helps bring the essence of our perfumes to a wider audience.",
    ],
  },
  {
    name: "Mary Ojo",
    location: "Glasgow, Scotland",
    image: ambassadorMary,
    bio: [
      "Based in Glasgow, Scotland, Mary Ojo proudly represents the Khaleesi brand and its vision of confidence, elegance, and individuality. With a strong passion for fragrance and a natural ability to connect with people, she plays an important role in introducing Khaleesi perfumes to new audiences across the UK.",
      "Through her dedication and creativity, Mary helps grow the Khaleesi community by sharing her genuine experiences with our fragrances and building awareness of the brand. Her voice and presence help strengthen Khaleesi's international reach while reflecting the values and identity behind every scent we create.",
      "From Glasgow, Mary continues to support and represent Khaleesi, helping our brand reach new customers and fragrance lovers around the world.",
    ],
  },
];

const AmbassadorsPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            Brand Ambassadors
          </h1>
          <p className="body-elegant text-muted-foreground max-w-xl mx-auto">
            Meet the faces who embody the spirit, elegance, and confidence of Khaleesi around the world.
          </p>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="space-y-24 max-w-5xl mx-auto">
          {ambassadors.map((ambassador, index) => (
            <div
              key={ambassador.name}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 1 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-sm aspect-[3/4]">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">
                  Khaleesi Ambassador
                </p>
                <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-1">
                  {ambassador.name}
                </h2>
                <p className="font-body text-sm text-muted-foreground tracking-wide mb-6">
                  {ambassador.location}
                </p>
                {ambassador.bio.map((paragraph, i) => (
                  <p key={i} className="body-elegant text-muted-foreground mb-4 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AmbassadorsPage;
