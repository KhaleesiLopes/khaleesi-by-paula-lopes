import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const navLinksLeft = [
  { label: "Home", to: "/" },
  { label: "Fragrance", to: "/collection/fragrance" },
  { label: "Makeup", to: "/collection/makeup" },
  { label: "Skincare", to: "/collection/skincare" },
  { label: "Spa", to: "/collection/spa" },
];

const navLinksRight = [
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const allNavLinks = [...navLinksLeft, ...navLinksRight];

interface HeaderProps {
  onCartOpen: () => void;
}

export const Header = ({ onCartOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const totalItems = useCartStore(state => state.items.reduce((sum, item) => sum + item.quantity, 0));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/97 backdrop-blur-md border-b border-border/50"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left nav — desktop */}
          <nav className="hidden lg:flex items-center gap-7 flex-1">
            {navLinksLeft.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] font-body font-medium tracking-[0.2em] uppercase transition-colors duration-200 hover:text-primary relative ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-foreground"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-2xl lg:text-[28px] font-medium tracking-[0.15em] text-foreground"
          >
            Khaleesi
          </Link>

          {/* Right nav — desktop */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
            {navLinksRight.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] font-body font-medium tracking-[0.2em] uppercase transition-colors duration-200 hover:text-primary relative ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
            <div className="flex items-center gap-5 ml-6 pl-6 border-l border-border">
              <button
                onClick={onCartOpen}
                className="relative p-1 text-foreground hover:text-primary transition-colors"
                aria-label="Open bag"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="p-1 text-foreground hover:text-primary transition-colors" aria-label="Account">
                <User className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          {/* Mobile icons */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative p-1 text-foreground"
              aria-label="Open bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-0">
            {allNavLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-body font-medium tracking-[0.2em] uppercase py-4 transition-colors border-b border-border/50 ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
