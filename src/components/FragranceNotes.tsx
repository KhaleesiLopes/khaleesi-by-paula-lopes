export const FragranceNotes = () => {
  const notes = [
    {
      title: "Top Notes",
      ingredients: ["Bergamot", "Pink Pepper", "Italian Lemon"],
      description: "A luminous opening — effervescent citrus and spice that awaken the senses instantly.",
    },
    {
      title: "Heart Notes",
      ingredients: ["Turkish Rose", "Jasmine Sambac", "Orris"],
      description: "The beating heart — an intoxicating floral bouquet that embodies feminine power and allure.",
    },
    {
      title: "Base Notes",
      ingredients: ["Mysore Sandalwood", "White Musk", "Amber"],
      description: "The lasting imprint — a velvety warmth that wraps around you like liquid gold.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Crafted with Intention
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground">
            The Anatomy of a Scent
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {notes.map((note) => (
            <div key={note.title} className="text-center">
              <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                {note.title}
              </h3>
              <p className="font-heading text-lg italic text-primary mb-4">
                {note.ingredients.join(" · ")}
              </p>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {note.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mt-16 gap-4">
          <div className="w-16 h-px bg-border" />
          <span className="text-primary text-lg">✦</span>
          <div className="w-16 h-px bg-border" />
        </div>
      </div>
    </section>
  );
};
