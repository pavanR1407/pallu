import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft pastel orbs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[var(--blush)] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--lavender)] opacity-40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--rose-gold)]/40 bg-white/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--rose-gold)] backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-[var(--gold)]" /> The Autumn Edit
          </motion.span>

          <h1 className="mt-6 font-heading text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Pretty Things,
            <br />
            <span className="italic text-gradient-gold">Always</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
            Curated heirloom sarees, hand-set jewelry and timepieces — for the woman
            who turns every ordinary moment into a love letter.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="shimmer-gold group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--charcoal)] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--cream)] shadow-luxe transition-colors hover:bg-[var(--gold)]"
            >
              <span className="relative z-10">Shop Now</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <button className="inline-flex items-center gap-2 rounded-full border border-[var(--rose-gold)]/60 bg-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur transition-colors hover:bg-white/60">
              View Lookbook
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-widest text-foreground/50">
            <div>
              <p className="font-heading text-2xl text-[var(--gold)]">12k+</p>
              <p>Happy Patrons</p>
            </div>
            <div className="h-10 w-px bg-foreground/15" />
            <div>
              <p className="font-heading text-2xl text-[var(--gold)]">4.9★</p>
              <p>Boutique Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[520px] sm:h-[600px] lg:h-[680px]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-t-[200px] border-[10px] border-white/50 shadow-luxe">
            <img
              src={heroModel}
              alt="Model in pastel pink silk saree with gold jewelry"
              className="h-full w-full object-cover"
              width={896}
              height={1280}
            />
          </div>

          {/* Floating product chip 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 top-16 w-44 animate-float"
          >
            <div className="glass rounded-2xl p-3 shadow-luxe">
              <img
                src={p2}
                alt="Pearl choker"
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                Trending
              </p>
              <p className="text-xs font-medium">Heritage Choker</p>
            </div>
          </motion.div>

          {/* Floating product chip 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 bottom-16 w-44 animate-float [animation-delay:1.2s]"
          >
            <div className="glass rounded-2xl p-3 shadow-luxe">
              <img
                src={p3}
                alt="Rose gold watch"
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--rose-gold)]">
                Just In
              </p>
              <p className="text-xs font-medium">Rose Gold Timepiece</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
