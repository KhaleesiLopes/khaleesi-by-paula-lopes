import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Fragrance", to: "/collection/fragrance" },
  { label: "Makeup", to: "/collection/makeup" },
  { label: "Skincare", to: "/collection/skincare" },
  { label: "Spa", to: "/collection/spa" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left nav - desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-body font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl lg:text-3xl font-medium tracking-wider text-foreground">
            Khaleesi
          </Link>

          {/* Right nav - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(5).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-body font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button onClick={onCartOpen} className="relative p-1 text-foreground hover:text-primary transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-body font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="p-1 text-foreground hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile right icons */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={onCartOpen} className="relative p-1 text-foreground">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-body font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-body font-medium tracking-widest uppercase py-2 transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
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
