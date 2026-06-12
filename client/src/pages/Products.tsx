import { Link } from "wouter";
import { Phone, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "lubricants",
    title: "Lubricants",
    description:
      "High-performance lubricants formulated for demanding industrial environments. Our lubricant line keeps heavy equipment running efficiently, reduces wear, and extends component life.",
    products: [
      {
        id: "industrial-grease",
        name: "Industrial Grease",
        description:
          "High-temp, extreme pressure multi-purpose lithium grease for heavy equipment bearings, chassis, and pivot points. Resists water washout and oxidation.",
        image: "https://m.media-amazon.com/images/I/71R5-mouDiL.jpg",
        imageAlt: "Industrial bearing grease 35lb pail",
      },
      {
        id: "machine-oil",
        name: "Machine Oil",
        description:
          "Premium mineral-base oil for gears, compressors, pumps, and industrial machinery. ISO-grade formulations available from light spindle oils to heavy gear oils.",
        image: "https://cdn.mscdirect.com/global/images/ProductImages/0547343AA-21.jpg",
        imageAlt: "Industrial machine oil 55 gallon drum",
      },
      {
        id: "chain-cable-lubricant",
        name: "Chain & Cable Lubricant",
        description:
          "Deep-penetrating lubricant for roller chains, wire ropes, cables, and open gear drives. Stays put under heavy loads and high-speed operation.",
        image: "https://m.media-amazon.com/images/I/71HMDae5BKL.jpg",
        imageAlt: "White lithium chain and cable lubricant",
      },
    ],
  },
  {
    id: "chemicals",
    title: "Chemicals",
    description:
      "Industrial-strength cleaning agents, corrosion inhibitors, and surface treatment chemicals. Purpose-formulated for workshops, manufacturing facilities, and fleet maintenance.",
    products: [
      {
        id: "industrial-degreaser",
        name: "Industrial Degreaser",
        description:
          "Heavy-duty solvent-based degreaser for removing grease, oil, and carbon deposits from metal parts, engines, and equipment surfaces. Fast-acting and residue-free.",
        image: "https://m.media-amazon.com/images/I/61K6NhYmKnL.jpg",
        imageAlt: "Industrial degreaser cleaner spray",
      },
      {
        id: "rust-inhibitor",
        name: "Rust Inhibitor",
        description:
          "Long-lasting corrosion protection coating for ferrous metal surfaces, structural steel, and machined components. Displaces moisture and forms a durable protective film.",
        image: "https://www.baronblakeslee.net/wp-content/uploads/2024/12/stock-photo-barrels-of-different-colors.png",
        imageAlt: "Industrial chemical barrels",
      },
      {
        id: "parts-cleaner",
        name: "Parts Cleaner",
        description:
          "Biodegradable aqueous parts washing solution for workshops and garages. Effectively removes grease, grime, and shop dirt without harsh solvents.",
        image: "https://m.media-amazon.com/images/I/71iaRoL7uOL.jpg",
        imageAlt: "Industrial parts washer pump sprayer",
      },
    ],
  },
  {
    id: "industrial-fluids",
    title: "Industrial Fluids",
    description:
      "Precision-engineered fluids for hydraulic systems, metalworking operations, and engine cooling applications. Formulated to protect critical systems and optimize performance.",
    products: [
      {
        id: "hydraulic-fluid",
        name: "Hydraulic Fluid",
        description:
          "Anti-wear hydraulic oil for pumps, cylinders, valves, and hydraulic systems. Premium zinc-based and zinc-free formulations with excellent oxidation stability.",
        image: "https://buysinopec.com/cdn/shop/articles/hydraulic_oil_mmachinery.png?v=1720210406&width=851",
        imageAlt: "Hydraulic machinery and equipment",
      },
      {
        id: "cutting-fluid",
        name: "Cutting Fluid",
        description:
          "Water-soluble metalworking fluid for machining, drilling, milling, and turning operations. Reduces heat and friction while extending tool life.",
        image: "https://www.gtmidatlantic.com/wp-content/uploads/2024/07/01-how-hydraulic-repairs-work-for-heavy-construction-equipment-800x400.jpg",
        imageAlt: "Heavy construction equipment hydraulic systems",
      },
      {
        id: "coolant-antifreeze",
        name: "Coolant / Antifreeze",
        description:
          "Extended-life engine coolant for industrial equipment, fleet vehicles, and heavy-duty engines. OAT and HOAT formulations for modern cooling systems.",
        image: "https://www.fluidall.com/wp-content/uploads/oil-safe-dispenser.jpg",
        imageAlt: "Industrial fluid dispensing containers",
      },
    ],
  },
];

export default function Products() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-3">
            Industrial Supply
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Lubricants, Chemicals &amp; Industrial Fluids
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional-grade industrial products for heavy equipment, manufacturing,
            and fleet maintenance. Bulk and drum quantities available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="link-contact-pricing-hero"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors"
            >
              Contact for Pricing
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:832-226-4018"
              data-testid="link-call-hero-products"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors"
            >
              <Phone className="h-4 w-4" />
              (832) 226-4018
            </a>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          data-testid={`section-${cat.id}`}
          className={catIndex % 2 === 0 ? "bg-white py-20" : "bg-slate-50 py-20"}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="mb-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-10 bg-red-600" />
                <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
                  {cat.title}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                {cat.title}
              </h2>
              <p className="text-lg text-slate-600">{cat.description}</p>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {cat.products.map((product) => (
                <div
                  key={product.id}
                  data-testid={`card-product-${product.id}`}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="h-56 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      data-testid={`button-contact-pricing-${product.id}`}
                      className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors w-full"
                    >
                      Contact for Pricing
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Need Bulk Quantities or Custom Specs?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We supply drum, tote, and bulk quantities to industrial clients, fleets,
            and contractors across the Greater Houston area. Contact us to discuss
            your requirements and volume pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="link-contact-pricing-bottom"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors"
            >
              Get a Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:832-226-4018"
              data-testid="link-call-bottom-products"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors"
            >
              <Phone className="h-4 w-4" />
              (832) 226-4018
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
