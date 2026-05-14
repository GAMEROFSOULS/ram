import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-gradient-wood text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl">Aditya Home Furniture</h3>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Handcrafted Indian oak & teak furnishings, built to outlive trends. Sourced sustainably,
            finished by master artisans across South India.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:sales@adityahomefurniture.net"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/products" className="hover:text-primary-foreground">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-foreground">
                Craft & Sourcing
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-primary-foreground">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact#catalog" className="hover:text-primary-foreground">
                Request a Catalog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg">Studio</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>Kamalapur road, Narsampet, Warangal district</li>
            <li>+91 8686002901</li>
            <li>sales@adityahomefurniture.net</li>
            <li>
              <Link to="/contact" className="hover:text-primary-foreground">
                Visit the design house →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Aditya Home Furniture. Crafted in India.
        </p>
      </div>
    </footer>
  );
}
