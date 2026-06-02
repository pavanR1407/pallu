import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Iyer",
    role: "Verified Patron",
    text: "The drape of my Banarasi silk was breathtaking. It feels like wearing a piece of family history.",
    color: "var(--blush)",
  },
  {
    name: "Priya Sharma",
    role: "Bridal Customer",
    text: "My wedding choker was the talk of the evening. Premium craft, even more premium service.",
    color: "var(--lavender)",
  },
  {
    name: "Meera Kapoor",
    role: "Loyal Shopper",
    text: "Every piece arrives wrapped like a love letter. I have never had a packaging experience this thoughtful.",
    color: "var(--rose-gold)",
  },
];

export function Reviews() {
  return (
    <section className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lavender)]/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
            Love Letters
          </p>
          <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
            Stories from Our <span className="italic text-gradient-gold">Patrons</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 shadow-luxe"
            >
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="font-heading text-lg italic leading-relaxed text-foreground/85">
                “{r.text}”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="h-11 w-11 rounded-full ring-2 ring-white/80"
                  style={{ background: r.color }}
                />
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
