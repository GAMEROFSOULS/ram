import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import workshop from "@/assets/craft-workshop.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Craft & Sourcing — Adityahomefurniture" },
      {
        name: "description",
        content:
          "How Adityahomefurniture sources Indian hardwood and hand-builds heirloom oak and teak furniture.",
      },
      { property: "og:title", content: "Craft & Sourcing — Adityahomefurniture" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const timeline = [
  { y: "Week 1–4", t: "Mill selection", d: "Slabs hand-picked for grain density and figure." },
  { y: "Week 5–8", t: "Joinery", d: "Mortise, tenon, dovetails — fitted dry, then pegged." },
  { y: "Week 9–10", t: "Surface", d: "Sanded through eight grits to a soft satin touch." },
  { y: "Week 11–12", t: "Finish", d: "Plant oil rubbed in by hand; cured under cotton sheets." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative overflow-hidden">
        <img src={workshop} alt="Workshop" className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 bg-oak-900/55" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-amber">Our craft</p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl text-primary-foreground sm:text-6xl">
            A workshop, not a warehouse.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl">From forest floor to your floor.</h2>
          <p className="mt-4 text-muted-foreground">
            Adityahomefurniture began in 2008 with a single bench, hand-cut from a fallen Indian
            oak. Two decades on, we still source the same way: directly from FSC-aligned mills
            across Karnataka and Andhra Pradesh, with traceable provenance for every plank we plane.
          </p>
          <p className="mt-4 text-muted-foreground">
            We don't run a factory. We run a workshop — twenty-three master artisans, three
            apprentices, and a single rule: nothing leaves the door without surviving the touch
            test.
          </p>
        </div>
        <ul className="space-y-6">
          {timeline.map((step, i) => (
            <li key={step.t} className="flex gap-5 rounded-xl bg-card p-5 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-oak-100 font-serif text-lg text-oak-900">
                {i + 1}
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{step.y}</p>
                <h3 className="mt-1 font-serif text-xl">{step.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 sm:grid-cols-3 lg:px-8">
          {[
            { n: "200+", l: "Years combined craft" },
            { n: "12 weeks", l: "Average build time" },
            { n: "10 years", l: "Structural warranty" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-card p-8 text-center shadow-soft">
              <p className="font-serif text-5xl text-oak-900">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
