import { motion } from "framer-motion";
import { products } from "./Products";

export function NewArrivals() {
  // Masonry style with varied row spans
  const spans = [
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-1",
    "row-span-1",
  ];
  return (
    <section className="bg-[var(--blush)]/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
              Fresh Picks
            </p>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              New <span className="italic text-gradient-gold">Arrivals</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60">
            Hand-spun pieces dropping weekly. Pin them, save them, make them yours.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm ${spans[i % spans.length]}`}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {p.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[var(--charcoal)] backdrop-blur">
                  {p.badge}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-heading text-sm text-white">{p.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--blush)]">
                  {p.price}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
