import { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartSync } from "@/hooks/useCartSync";
import { useCartStore } from "@/stores/cartStore";
import Index from "./pages/Index";
import CollectionPage from "./pages/CollectionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const items = useCartStore(state => state.items);
  const prevItemCount = useRef(items.length);
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout>>();
  useCartSync();

  // Auto-open cart when items are added, auto-close after 3s
  useEffect(() => {
    if (items.length > prevItemCount.current) {
      setCartOpen(true);
      clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = setTimeout(() => setCartOpen(false), 3000);
    }
    prevItemCount.current = items.length;
    return () => clearTimeout(autoCloseTimer.current);
  }, [items.length]);

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collection/:handle" element={<CollectionPage />} />
        <Route path="/product/:handle" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
