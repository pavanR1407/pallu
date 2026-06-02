import { Mail } from "lucide-react";

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 22v-8h2.7l.4-3.2H13V8.7c0-.9.3-1.6 1.7-1.6H16V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H7V14h2.8v8H13z" />
  </svg>
);
const Twitter = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.86l-4.78-6.26L4.8 22H2l7-8.01L2 2h6.94l4.32 5.71L18.24 2zm-1.2 18h1.83L7.05 4H5.1l11.94 16z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-[var(--rose-gold)]/20 bg-[var(--cream)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-heading text-2xl font-bold">
            The <span className="italic text-gradient-gold">Pallu</span> Stories
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/65">
            Crafting a legacy of beauty, one drape at a time. We celebrate the
            intersection of heritage textiles and contemporary feminine grace.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rose-gold)]/40 text-foreground/70 transition-colors hover:bg-[var(--rose-gold)] hover:text-white"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">Shop</h4>
          <ul className="space-y-3 text-sm text-foreground/65">
            <li><a href="#" className="hover:text-[var(--gold)]">Sarees</a></li>
            <li><a href="#" className="hover:text-[var(--gold)]">Jewelry</a></li>
            <li><a href="#" className="hover:text-[var(--gold)]">Watches</a></li>
            <li><a href="#" className="hover:text-[var(--gold)]">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">The Gazette</h4>
          <p className="mb-4 text-sm text-foreground/65">
            Join the inner circle for exclusive previews & styling notes.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-full border border-[var(--rose-gold)]/30 bg-white/60 px-4 py-2.5 text-sm outline-none focus:border-[var(--gold)]"
            />
            <button className="rounded-full bg-[var(--charcoal)] px-5 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[var(--gold)]">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[var(--rose-gold)]/15 pt-6 text-[10px] uppercase tracking-widest text-foreground/45 sm:flex-row">
        <p>© 2026 The Pallu Stories. Handcrafted with love.</p>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
