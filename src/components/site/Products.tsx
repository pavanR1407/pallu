import { motion } from "framer-motion";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export type Product = {
  id: string;
  name: string;
  price: string;
  img: string;
  badge?: string;
};

export const products: Product[] = [
  { id: "1", name: "Lavender Dream Drape", price: "$349", img: p1, badge: "New" },
  { id: "2", name: "Heritage Ruby Choker", price: "$285", img: p2, badge: "Best Seller" },
  { id: "3", name: "Rose Gold Timepiece", price: "$420", img: p3 },
  { id: "4", name: "Blush Zari Saree", price: "$398", img: p4, badge: "Limited" },
  { id: "5", name: "Pearl Filigree Drops", price: "$92", img: p5 },
  { id: "6", name: "Lilac Crystal Clutch", price: "$165", img: p6, badge: "New" },
];

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--blush)]/10">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-md">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-all hover:scale-110 hover:bg-[var(--rose-gold)] hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Hover actions */}
        <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--charcoal)] py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--gold)]">
              <ShoppingBag className="h-3.5 w-3.5" /> Add
            </button>
            <button
              aria-label="Quick view"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--charcoal)] shadow-md transition-transform hover:scale-110"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg leading-tight">{product.name}</h3>
        <p className="whitespace-nowrap font-medium text-[var(--gold)]">{product.price}</p>
      </div>
      <div className="mt-1 flex items-center gap-1 text-[10px] text-foreground/50">
        <span className="text-[var(--gold)]">★★★★★</span>
        <span>(124)</span>
      </div>
    </motion.div>
  );
}

export function Trending() {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-white/40 to-transparent px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--rose-gold)]">
            Must Haves
          </p>
          <h2 className="font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Trending <span className="italic text-gradient-gold">Now</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/60">
            Pieces our community is falling for this season — heirloom-worthy,
            Instagram-worthy, you-worthy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
