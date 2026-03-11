import { Link } from "react-router-dom";

const footerLinks = {
  Shop: [
    { label: "Fragrance", to: "/collection/fragrance" },
    { label: "Makeup", to: "/collection/makeup" },
    { label: "Skincare", to: "/collection/skincare" },
    { label: "Spa", to: "/collection/spa" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms & Conditions", to: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-lg font-medium text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="font-heading text-lg tracking-wider text-foreground mb-2">Khaleesi</p>
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} Khaleesi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
