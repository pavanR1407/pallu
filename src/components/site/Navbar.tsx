import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sarees", to: "/" },
    { label: "Jewelry", to: "/" },
    { label: "Watches", to: "/" },
    { label: "Clutches", to: "/" },
    { label: "Gifts", to: "/" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button className="md:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-xl font-bold tracking-tight md:text-2xl"
          >
            The <span className="italic text-gradient-gold">Pallu</span> Stories
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-[var(--gold)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button aria-label="Search" className="hover:text-[var(--gold)] transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="hidden sm:block hover:text-[var(--gold)] transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="hidden sm:block hover:text-[var(--gold)] transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative hover:text-[var(--gold)] transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--gold)] text-[9px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
