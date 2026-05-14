import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Leaf, ShieldCheck, Truck } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { products, inr } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import hero from "@/assets/hero-livingroom.jpg";
import workshop from "@/assets/craft-workshop.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Adityahomefurniture — Handcrafted Indian Oak & Teak" },
      { name: "description", content: "Timeless Indian oak and teak furnishings, hand-built by master artisans. Shop sofas, dining, storage and lounge pieces." },
      { property: "og:title", content: "Adityahomefurniture" },
      { property: "og:description", content: "Handcrafted Indian oak & teak furnishings." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Adityahomefurniture",
        url: "/",
        sameAs: [],
      }),
    }],
  }),
});

function Home() {
  const featured = products.slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Indian oak and teak living room" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-oak-900/55 via-oak-900/40 to-oak-900/85" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" /> New 2026 Atelier Collection
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl text-primary-foreground text-balance sm:text-6xl lg:text-7xl">
            Heirloom furniture, carved from <em className="italic text-teak-300">Indian oak & teak</em>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Sustainably sourced timber. Hand-cut joinery. Pieces that age like a memory — warmer with every season.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition hover:opacity-90">
              Explore the collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/5 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/15">
              Our craft
            </Link>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { Icon: Hammer, t: "Hand-joined", d: "Mortise & tenon, no shortcuts." },
            { Icon: Leaf, t: "Sustainably sourced", d: "FSC-aligned Indian hardwood." },
            { Icon: ShieldCheck, t: "10-year warranty", d: "On every solid-wood piece." },
            { Icon: Truck, t: "White-glove delivery", d: "Pan-India installation included." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-background text-oak-700"><Icon className="h-5 w-5" /></span>
              <div>
                <p className="font-medium text-foreground">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber">Featured</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Pieces of the season</h2>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-sm text-foreground hover:text-oak-700">
            All pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-xl bg-card shadow-soft transition hover:shadow-elevated">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 text-xs font-medium text-accent-foreground">{p.badge}</span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.finish}</p>
                <h3 className="mt-1 font-serif text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium text-foreground">{inr(p.price)}</span>
                  <Link to="/products" className="text-sm text-oak-700 hover:text-oak-900">Details →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Craft band */}
      <section className="bg-oak-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            <img src={workshop} alt="Craftsman working teak" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-oak-700">The making</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-oak-900">Forty hands. One bench. One season.</h2>
            <p className="mt-4 text-base text-oak-900/80">
              Every piece begins as a slab of seasoned Indian hardwood, hand-selected at the mill for grain and weight.
              Our master joiners spend up to twelve weeks shaping, fitting and oil-finishing each design — no veneers, no shortcuts.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-oak-900/85">
              <li><strong className="text-oak-900">Air-dried timber</strong> — 18 to 24 months before the workshop.</li>
              <li><strong className="text-oak-900">Mortise & tenon</strong> — traditional joinery, never glue alone.</li>
              <li><strong className="text-oak-900">Plant-based oil</strong> — finishes that breathe and patina.</li>
            </ul>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-oak-900 px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-oak-700">
              Inside the design house <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber">Voices</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Lived with. Loved long.</h2>
          </div>
          <Link to="/testimonials" className="hidden sm:inline-flex items-center gap-1 text-sm text-foreground hover:text-oak-700">
            Read all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.id} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <blockquote className="font-serif text-lg leading-snug text-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-wood text-sm font-medium text-primary-foreground">{t.initials}</span>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto mb-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-wood p-10 text-primary-foreground sm:p-14">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Designing a home, an office, a campus?</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                We've furnished homes from Hyderabad to Bangalore and institutions including NIT Warangal. Tell us your space.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">Start a project</Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10">See case studies</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
