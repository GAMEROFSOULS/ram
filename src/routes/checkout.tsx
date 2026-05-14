import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/hooks/useCart";
import { inr } from "@/data/products";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [{ title: "Checkout — Adityahomefurniture" }],
  }),
});

function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Order placed successfully! Thank you for your purchase.");
      clearCart();
      navigate({ to: "/" });
    }, 1500);
  };

  if (items.length === 0 && !isSubmitting) {
    return (
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl">Checkout</h1>
          <p className="mt-6 text-lg text-muted-foreground">Your cart is empty. Please add items before checking out.</p>
          <Link
            to="/products"
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Return to Shop
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl">Checkout</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Checkout Form */}
          <section className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10 border-t border-border pt-8">
              
              {/* Personal Details */}
              <div>
                <h2 className="text-xl font-medium text-foreground">1. Personal Details</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground">First name</label>
                    <div className="mt-2">
                      <input type="text" id="firstName" name="firstName" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground">Last name</label>
                    <div className="mt-2">
                      <input type="text" id="lastName" name="lastName" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">Email address</label>
                    <div className="mt-2">
                      <input type="email" id="email" name="email" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone number</label>
                    <div className="mt-2">
                      <input type="tel" id="phone" name="phone" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-medium text-foreground">2. Shipping Address</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-foreground">Street address</label>
                    <div className="mt-2">
                      <input type="text" id="address" name="address" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground">City</label>
                    <div className="mt-2">
                      <input type="text" id="city" name="city" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-foreground">State / Province</label>
                    <div className="mt-2">
                      <input type="text" id="state" name="state" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-foreground">Postal code</label>
                    <div className="mt-2">
                      <input type="text" id="postalCode" name="postalCode" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-xl font-medium text-foreground">3. Payment Details</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
                  <div className="sm:col-span-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground">Card number</label>
                    <div className="mt-2">
                      <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="expirationDate" className="block text-sm font-medium text-foreground">Expiration date (MM/YY)</label>
                    <div className="mt-2">
                      <input type="text" id="expirationDate" name="expirationDate" placeholder="MM / YY" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-foreground">CVV</label>
                    <div className="mt-2">
                      <input type="text" id="cvv" name="cvv" placeholder="123" required className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground shadow-sm hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : `Pay ${inr(subtotal)}`}
                </button>
              </div>
            </form>
          </section>

          {/* Order Summary */}
          <section className="mt-16 rounded-lg border border-border bg-card px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-foreground">Order summary</h2>
            
            <ul className="mt-6 divide-y divide-border border-b border-border">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <img src={item.image} alt={item.name} className="h-16 w-16 flex-none rounded-md object-cover border border-border" />
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">Qty {item.quantity}</p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-foreground">{inr(item.price * item.quantity)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Subtotal</dt>
                <dd className="text-sm font-medium text-foreground">{inr(subtotal)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Shipping (White-Glove)</dt>
                <dd className="text-sm font-medium text-foreground">Free</dd>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <dt className="text-base font-medium text-foreground">Total</dt>
                <dd className="text-base font-medium text-foreground">{inr(subtotal)}</dd>
              </div>
            </dl>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
