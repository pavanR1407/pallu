import { motion } from "framer-motion";
import sarees from "@/assets/cat-sarees.jpg";
import jewelry from "@/assets/cat-jewelry.jpg";
import watches from "@/assets/cat-watches.jpg";
import clutches from "@/assets/cat-clutches.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import gifts from "@/assets/cat-gifts.jpg";

const categories = [
  { name: "Sarees", img: sarees, tint: "bg-[var(--blush)]/30" },
  { name: "Jewelry", img: jewelry, tint: "bg-[var(--rose-gold)]/30" },
  { name: "Watches", img: watches, tint: "bg-[var(--lavender)]/30" },
  { name: "Clutches", img: clutches, tint: "bg-[var(--gold)]/15" },
  { name: "Accessories", img: accessories, tint: "bg-[var(--blush)]/20" },
  { name: "Gift Collections", img: gifts, tint: "bg-[var(--lavender)]/25" },
];

export function Categories() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
              Curated Styles
            </p>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              Shop by <span className="italic text-gradient-gold">Collection</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-[var(--gold)] sm:inline-block"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group block text-center"
            >
              <div
                className={`relative mb-4 aspect-square overflow-hidden rounded-full p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-luxe ${c.tint}`}
              >
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-white/60">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="pointer-events-none absolute inset-3 rounded-full ring-1 ring-inset ring-[var(--gold)]/0 transition-all group-hover:ring-[var(--gold)]/60" />
              </div>
              <p className="font-heading text-base tracking-wide">{c.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
