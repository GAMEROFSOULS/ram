import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Adityahomefurniture" },
      {
        name: "description",
        content: "Visit our Design House or start a project with Adityahomefurniture.",
      },
      { property: "og:title", content: "Contact — Adityahomefurniture" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber">Contact</p>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Tell us about the room.</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            We respond within one working day. For B2B and institutional briefs, attach plans or
            moodboards directly.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-oak-700" />
              <div>
                <p className="font-medium">Design House</p>
                <p className="text-sm text-muted-foreground">
                  Kamalapur road, Narsampet, Warangal district
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-oak-700" />
              <p className="text-sm">+91 8686002901</p>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-oak-700" />
              <p className="text-sm">sales@adityahomefurniture.net</p>
            </li>
          </ul>

          <div
            id="catalog"
            className="mt-12 rounded-2xl border border-border bg-oak-50/50 p-6 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-foreground">Request a Catalog</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download our latest collection catalog or request a physical copy for your
              institutional needs.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = new FormData(form).get("catalogEmail");

                window.location.href = `mailto:sales@adityahomefurniture.net?subject=Catalog Request&body=Please send a catalog to: ${email}`;
                form.reset();
                toast.success("Opening your email client...");
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                name="catalogEmail"
                placeholder="Your Email Address"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Request
              </button>
            </form>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const name = formData.get("name");
            const city = formData.get("city");
            const email = formData.get("email");
            const phone = formData.get("phone");
            const message = formData.get("message");

            const subject = encodeURIComponent(`New Project Enquiry from ${name}`);
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCity: ${city || "N/A"}\n\nProject Details:\n${message}`,
            );

            window.location.href = `mailto:sales@adityahomefurniture.net?subject=${subject}&body=${body}`;

            setSent(true);
            form.reset();
          }}
          className="rounded-2xl border border-border bg-card p-7 shadow-soft"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="City" name="city" />
            <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
            <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-medium text-foreground">Tell us about your project</span>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Send enquiry
          </button>
          {sent && (
            <p className="mt-4 text-sm text-herb">
              Thank you — we'll be in touch within a working day.
            </p>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </label>
  );
}
