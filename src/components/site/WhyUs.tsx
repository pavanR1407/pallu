import { motion } from "framer-motion";
import { Award, Truck, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Hand-curated from heritage weavers and artisan jewelers across India.",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    desc: "Carefully packaged and shipped worldwide in elegant boutique boxes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "256-bit encrypted checkout with easy returns within 14 days.",
  },
  {
    icon: Sparkles,
    title: "Handmade Selection",
    desc: "Every piece tells a story — limited drops, never mass-produced.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-[var(--blush)]/10 to-transparent px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
            The Pallu Promise
          </p>
          <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
            Why You'll <span className="italic text-gradient-gold">Love Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:shadow-luxe"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--lavender)] text-[var(--charcoal)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl">{it.title}</h3>
              <p className="mt-3 text-sm text-foreground/65">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
