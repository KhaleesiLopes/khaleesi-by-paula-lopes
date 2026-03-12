import { useState } from "react";

const faqs = [
  { q: "What are your shipping options?", a: "We offer standard and express shipping worldwide. Orders are typically processed within 1–2 business days." },
  { q: "What is your return policy?", a: "We accept returns within 14 days of delivery for unopened products in their original packaging." },
  { q: "Are your products cruelty-free?", a: "Yes, all Khaleesi products are cruelty-free and never tested on animals." },
  { q: "How do I track my order?", a: "Once your order ships, you will receive a tracking number via email." },
  { q: "Do you offer gift wrapping?", a: "Yes, we offer luxury gift wrapping for a small additional fee at checkout." },
  { q: "How can I contact customer support?", a: "You can reach us via our Contact page or email us at support@khalessi.shop." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="pt-20 md:pt-24 pb-10 md:pb-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-3xl">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">FAQ</h1>
          <p className="body-elegant text-muted-foreground">Frequently asked questions</p>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="font-heading text-lg text-foreground pr-4">{faq.q}</span>
                <span className="text-muted-foreground text-xl flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="body-elegant text-muted-foreground pb-6">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
