import sofa from "@/assets/product-sofa-oak.jpg";
import dining from "@/assets/product-dining-teak.jpg";
import shelf from "@/assets/product-bookshelf-oak.jpg";
import chair from "@/assets/product-chair-teak.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Seating" | "Tables" | "Storage";
  finish: "Indian Oak" | "Teak";
  price: number;
  image: string;
  blurb: string;
  badge?: string;
  specifications?: {
    dimensions: string;
    material: string;
    weight: string;
    care: string;
  };
};

export const products: Product[] = [
  { 
    slug: "legacy-sofa-oak", 
    name: "Legacy Three-Seater", 
    category: "Seating", 
    finish: "Indian Oak", 
    price: 84999, 
    image: sofa, 
    blurb: "Hand-joined oak frame with linen-down cushions.", 
    badge: "Bestseller",
    specifications: {
      dimensions: "84\" W x 38\" D x 34\" H",
      material: "Solid Indian Oak, Linen-Down upholstery",
      weight: "120 lbs",
      care: "Spot clean cushions. Dust frame with soft dry cloth."
    }
  },
  { 
    slug: "harvest-dining-teak", 
    name: "Harvest Dining Table", 
    category: "Tables", 
    finish: "Teak", 
    price: 119000, 
    image: dining, 
    blurb: "Solid teak slab, six-seater with mortise & tenon legs.",
    specifications: {
      dimensions: "72\" L x 36\" W x 30\" H",
      material: "100% Solid Teak Wood",
      weight: "185 lbs",
      care: "Wipe with damp cloth. Apply teak oil annually."
    }
  },
  { 
    slug: "atelier-bookshelf-oak", 
    name: "Atelier Bookshelf", 
    category: "Storage", 
    finish: "Indian Oak", 
    price: 64500, 
    image: shelf, 
    blurb: "Open-back shelving in quarter-sawn Indian oak.",
    specifications: {
      dimensions: "42\" W x 14\" D x 80\" H",
      material: "Quarter-sawn Indian Oak",
      weight: "95 lbs",
      care: "Avoid direct sunlight. Dust regularly."
    }
  },
  { 
    slug: "veranda-lounge-teak", 
    name: "Veranda Lounge Chair", 
    category: "Seating", 
    finish: "Teak", 
    price: 38900, 
    image: chair, 
    blurb: "Caned back, sculpted teak arms, deep linen seat.", 
    badge: "New",
    specifications: {
      dimensions: "28\" W x 32\" D x 34\" H",
      material: "Solid Teak, Natural Cane, Linen",
      weight: "45 lbs",
      care: "Keep cane dry. Vacuum upholstery."
    }
  },
];

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
