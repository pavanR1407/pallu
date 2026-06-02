import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
import { products } from "./Products";
import heroModel from "@/assets/hero-model.jpg";
import sarees from "@/assets/cat-sarees.jpg";
import gifts from "@/assets/cat-gifts.jpg";

const feed = [
  { img: heroModel, video: true },
  { img: products[0].img },
  { img: sarees },
  { img: products[1].img, video: true },
  { img: gifts },
  { img: products[4].img },
];

export function InstagramFeed() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
              <Instagram className="h-3 w-3" /> @thepallustories
            </p>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              As Seen on <span className="italic text-gradient-gold">Instagram</span>
            </h2>
          </div>
          <a
            href="#"
            className="rounded-full border border-[var(--rose-gold)]/50 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:bg-[var(--rose-gold)]/10"
          >
            Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {feed.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={item.img}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {item.video && (
                <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur">
                  <Play className="h-3 w-3 fill-current" />
                </div>
              )}
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-widest">
                  Shop the look
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
