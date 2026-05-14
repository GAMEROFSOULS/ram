import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { products, inr } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Collection — Adityahomefurniture" },
      {
        name: "description",
        content:
          "Browse the Adityahomefurniture collection: oak and teak sofas, dining tables, storage and lounge pieces.",
      },
      { property: "og:title", content: "Collection — Adityahomefurniture" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const finishes = ["All", "Indian Oak", "Teak"] as const;
const cats = ["All", "Seating", "Tables", "Storage"] as const;

function ProductsPage() {
  const [finish, setFinish] = useState<(typeof finishes)[number]>("All");
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filtered = products.filter(
    (p) => (finish === "All" || p.finish === finish) && (cat === "All" || p.category === cat),
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <header className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-oak-700">Collection</p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl text-oak-900">The whole atelier</h1>
          <p className="mt-3 max-w-2xl text-oak-900/75">
            Filter by wood and use. Every piece is made-to-order in our South India workshop.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-6 border-b border-border pb-6">
          <FilterRow label="Wood" options={finishes} value={finish} onChange={setFinish} />
          <FilterRow label="Type" options={cats} value={cat} onChange={setCat} />
          <span className="ml-auto text-sm text-muted-foreground">{filtered.length} pieces</span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-xl bg-card shadow-soft transition hover:shadow-elevated"
            >
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="block overflow-hidden bg-muted"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 text-xs font-medium text-accent-foreground">
                    {p.badge}
                  </span>
                )}
              </Link>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.finish} · {p.category}
                  </p>
                  <span className="text-sm font-medium">{inr(p.price)}</span>
                </div>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="hover:underline">
                  <h2 className="mt-2 font-serif text-xl">{p.name}</h2>
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <button
                  onClick={() => {
                    addToCart({ id: p.slug, name: p.name, price: p.price, image: p.image });
                    toast.success("Added to Cart!");
                    navigate({ to: "/cart" });
                  }}
                  className="mt-5 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
              value === o
                ? "border-oak-900 bg-oak-900 text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-oak-300"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
