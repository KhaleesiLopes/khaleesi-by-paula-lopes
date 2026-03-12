import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "Fragrance", to: "/collection/fragrance" },
    { label: "Makeup", to: "/collection/makeup" },
    { label: "Skincare", to: "/collection/skincare" },
    { label: "Spa", to: "/collection/spa" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Ambassadors", to: "/ambassadors" },
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
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-lg font-medium text-foreground mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm font-body font-light text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-5">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-heading text-2xl tracking-wider text-foreground mb-3">Khaleesi</p>
          <p className="text-xs font-body font-light text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Khaleesi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
