import { motion } from "framer-motion";
import { products } from "./Products";

export function BestSellers() {
  // Auto-scrolling marquee row
  const items = [...products, ...products];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
          Cult Classics
        </p>
        <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
          Best <span className="italic text-gradient-gold">Sellers</span>
        </h2>
      </div>

      <div className="relative">
        {/* edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--cream)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--cream)] to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {items.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="group relative w-72 shrink-0 overflow-hidden rounded-3xl bg-white shadow-luxe transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[var(--gold)] font-semibold">{p.price}</span>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/50">
                    Best Seller
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
