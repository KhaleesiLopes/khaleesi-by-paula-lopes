const ContactPage = () => {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">Contact</h1>
          <p className="body-elegant text-muted-foreground">We'd love to hear from you</p>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-serif text-xl text-foreground mb-4">Get in Touch</h2>
            <p className="body-elegant text-muted-foreground mb-6">
              For enquiries, partnerships, or customer support, please reach out using the form or contact details below.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                <p className="font-body text-foreground">support@khalessi.shop</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={5}
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-10 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
