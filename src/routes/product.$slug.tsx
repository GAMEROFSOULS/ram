import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { products, inr } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw new Error("Product not found");
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData.name} — Adityahomefurniture` }],
  }),
});

function ProductPage() {
  const product = Route.useLoaderData();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ id: product.slug, name: product.name, price: product.price, image: product.image });
    toast.success("Added to Cart!");
    navigate({ to: "/cart" });
  };

  const handleBuyNow = () => {
    addToCart({ id: product.slug, name: product.name, price: product.price, image: product.image });
    navigate({ to: "/checkout" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Collection
        </Link>
        
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted shadow-soft">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover" 
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 text-xs font-medium text-accent-foreground">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {product.finish} · {product.category}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground">{product.name}</h1>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-medium text-foreground">{inr(product.price)}</p>
            </div>
            
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              {product.blurb}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center rounded-md border border-primary bg-transparent px-8 py-3.5 text-base font-medium text-primary hover:bg-primary/5 transition focus:outline-none"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-soft hover:opacity-90 transition focus:outline-none"
              >
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mt-12 border-t border-border pt-8">
                <h3 className="font-serif text-2xl text-foreground mb-6">Specifications</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-foreground">Dimensions</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{product.specifications.dimensions}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground">Material</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{product.specifications.material}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground">Weight</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{product.specifications.weight}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground">Care</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{product.specifications.care}</dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
