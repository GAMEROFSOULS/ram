import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { testimonials } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Voices — Adityahomefurniture" },
      { name: "description", content: "Real homes, designers and institutions on living with Adityahomefurniture pieces." },
      { property: "og:title", content: "Voices — Adityahomefurniture" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  const cities = ["All", ...Array.from(new Set(testimonials.map((t) => t.location)))];
  const [city, setCity] = useState("All");
  const list = testimonials.filter((t) => city === "All" || t.location === city);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <header className="border-b border-border bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-oak-700">Voices</p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl text-oak-900">Words from the rooms our pieces live in.</h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <span className="mr-2 text-xs uppercase tracking-wider text-muted-foreground">Region</span>
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                city === c ? "border-oak-900 bg-oak-900 text-primary-foreground" : "border-border bg-background hover:border-oak-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((t) => (
            <figure key={t.id} id={t.id} className="rounded-xl border border-border bg-card p-7 shadow-soft scroll-mt-24">
              <blockquote className="font-serif text-xl leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-wood text-sm font-medium text-primary-foreground">{t.initials}</span>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
