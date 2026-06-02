import { createFileRoute } from "@tanstack/react-router";
import "@/lib/fonts";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Trending } from "@/components/site/Products";
import { BestSellers } from "@/components/site/BestSellers";
import { NewArrivals } from "@/components/site/NewArrivals";
import { Reviews } from "@/components/site/Reviews";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { WhyUs } from "@/components/site/WhyUs";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pallu Stories — Pretty Things, Always" },
      {
        name: "description",
        content:
          "Luxury boutique for women — curated sarees, heirloom jewelry, watches and clutches. Pretty things, always.",
      },
      { property: "og:title", content: "The Pallu Stories — Pretty Things, Always" },
      {
        property: "og:description",
        content:
          "Curated heirloom sarees, hand-set jewelry, watches and clutches in a luxe pastel boutique.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Trending />
        <BestSellers />
        <NewArrivals />
        <Reviews />
        <InstagramFeed />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
