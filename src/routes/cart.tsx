import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { inr } from "@/data/products";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [{ title: "Your Cart — Adityahomefurniture" }],
  }),
});

function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">Your cart is currently empty.</p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section className="lg:col-span-7">
              <ul className="divide-y divide-border border-b border-t border-border">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6 sm:py-10">
                    <div className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-md object-cover sm:h-32 sm:w-32"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <h3 className="font-medium text-foreground">{item.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{inr(item.price)}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="rounded-md border border-border p-1 hover:bg-muted"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-4 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="rounded-md border border-border p-1 hover:bg-muted"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="absolute right-0 top-0">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-muted-foreground hover:text-foreground"
                            >
                              <span className="sr-only">Remove</span>
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16 rounded-lg bg-secondary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-border">
              <h2 className="text-lg font-medium text-foreground">Order summary</h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-muted-foreground">Subtotal ({totalItems} items)</dt>
                  <dd className="text-sm font-medium text-foreground">{inr(subtotal)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <dt className="text-base font-medium text-foreground">Order total</dt>
                  <dd className="text-base font-medium text-foreground">{inr(subtotal)}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="block w-full rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 focus:outline-none"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </section>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
