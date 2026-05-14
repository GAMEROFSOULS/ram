export type Testimonial = {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "amar",
    name: "Amar",
    location: "Hyderabad",
    role: "Homeowner",
    initials: "A",
    quote:
      "The oak finish transformed our living room — sturdy build and warm tones that age beautifully.",
  },
  {
    id: "keerthi",
    name: "Keerthi",
    location: "Chennai",
    role: "Interior Designer",
    initials: "K",
    quote:
      "Meticulous joinery and a warm teak tone — clients loved the finish and craftsmanship detail.",
  },
  {
    id: "ajay",
    name: "Ajay",
    location: "Bangalore",
    role: "Homeowner",
    initials: "Aj",
    quote:
      "Durable, premium feel — delivered on time and installed with care. Highly recommend the teak pieces.",
  },
  {
    id: "revanth",
    name: "Revanth",
    location: "Bangalore",
    role: "Architect",
    initials: "R",
    quote:
      "The wood tones and textures matched our spec perfectly; excellent communication through the process.",
  },
  {
    id: "nit-warangal",
    name: "NIT Warangal",
    location: "Warangal",
    role: "Institutional Project",
    initials: "NIT",
    quote:
      "High-quality benches and fittings — durable finishes and timely execution for our campus project.",
  },
];
