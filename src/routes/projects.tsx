import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Adityahomefurniture" },
      {
        name: "description",
        content:
          "Institutional and residential case studies — including the NIT Warangal campus project.",
      },
      { property: "og:title", content: "Projects — Adityahomefurniture" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const cases = [
  {
    tag: "Institutional",
    title: "NIT Warangal — Campus benches & study fittings",
    metrics: ["1,200+ pieces", "9-month delivery", "Teak & oak"],
    blurb: "Hard-use seating and library fittings built to outlast a generation of students.",
  },
  {
    tag: "Residential",
    title: "Hyderabad villa — full furnishing",
    metrics: ["18 rooms", "Bespoke joinery", "Indian oak"],
    blurb: "A complete interior in oak and brass for a four-bedroom Jubilee Hills home.",
  },
  {
    tag: "Commercial",
    title: "Bangalore studio — design office",
    metrics: ["Workstations", "Lounge", "Teak"],
    blurb: "Open-plan workstations and a sculpted reception desk in teak slab.",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <header className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-oak-700">Projects</p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl text-oak-900">
            Spaces we've furnished.
          </h1>
          <p className="mt-3 max-w-2xl text-oak-900/75">
            From single rooms to full campuses. We work directly with architects, designers and
            procurement teams.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
        {cases.map((c) => (
          <article
            key={c.title}
            className="grid gap-6 rounded-xl border border-border bg-card p-8 shadow-soft md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber">{c.tag}</p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">{c.title}</h2>
              <p className="mt-2 text-muted-foreground">{c.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Discuss a project <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
