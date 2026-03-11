import { useState } from "react";
import { toast } from "sonner";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thank you for subscribing!", {
      description: "You'll be the first to know about new releases.",
    });
    setEmail("");
  };

  return (
    <section className="bg-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-primary-foreground/60 mb-4">
          Stay in the Know
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-primary-foreground mb-3">
          Join the Khaleesi World
        </h2>
        <p className="font-body text-sm font-light text-primary-foreground/70 max-w-md mx-auto mb-8">
          Be the first to discover new fragrances, exclusive offers, and behind-the-scenes stories.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm tracking-wide focus:outline-none focus:border-primary-foreground/50 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground text-xs font-body font-medium tracking-[0.25em] uppercase transition-all hover:bg-primary/80"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
