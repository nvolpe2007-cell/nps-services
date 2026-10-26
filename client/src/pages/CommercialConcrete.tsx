import { Link } from "wouter";
import {
  Phone,
  ChevronRight,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Home as HomeIcon,
} from "lucide-react";
import { trackCall } from "@/lib/tracking";
import { usePageSeo } from "@/hooks/usePageSeo";
import { clientGroups } from "@/components/home/WhoWeServe";

// Cities inside the ~50-mile radius from League City that the site's schema
// already declares. Confirm the list with the owner before adding city pages.
const serviceCities = [
  "Houston", "League City", "Pearland", "Friendswood", "Clear Lake", "Webster",
  "Pasadena", "Dickinson", "Texas City", "Galveston", "Baytown", "Sugar Land",
];

// Every service here is one N&P already lists elsewhere on the site
// (Services, the concrete/commercial landing pages, replit.md). Don't add
// services, certifications or project claims the owner hasn't confirmed.
const services = [
  {
    title: "Commercial Concrete Slabs",
    text: "Slabs for retail, office, warehouse and multi-family sites, formed, reinforced, poured and finished.",
  },
  {
    title: "Parking Lots",
    text: "New concrete and asphalt parking lots, plus resurfacing of worn lots.",
  },
  {
    title: "Sidewalks & Walkways",
    text: "Sidewalks and walkways that connect your lot to your entrances.",
  },
  {
    title: "Concrete Repair & Resurfacing",
    text: "Repair and resurfacing for cracked, settled or worn concrete.",
  },
  {
    title: "Striping & Seal Coating",
    text: "Asphalt striping and seal coating to protect a lot and keep it marked.",
  },
  {
    title: "Site Work & Grading",
    text: "Land clearing, grading and drainage to prepare the ground before the pour.",
  },
  {
    title: "Detention Ponds & Utilities",
    text: "Detention ponds and utility installation as part of commercial site development.",
  },
  {
    title: "RV Parks",
    text: "RV park construction, from site work to pads and drives.",
  },
];

const steps = [
  { title: "Site visit", text: "We look at the site, take measurements and talk through what you need." },
  { title: "Written bid", text: "You get a free, itemized bid for the work." },
  { title: "Schedule", text: "We set a start date and plan the work with you." },
  { title: "Prep", text: "Clearing, grading, base, forms and reinforcement." },
  { title: "Pour & finish", text: "Concrete is placed, finished and left to cure." },
  { title: "Stripe & clean up", text: "Striping where needed, then a clean site handed back to you." },
];

const faqs = [
  {
    q: "Do you give free bids?",
    a: "Yes. Call or text (832) 226-4018 and we'll set up a time to look at the site.",
  },
  {
    q: "Do you bid public projects for cities, counties and schools?",
    a: "Send us the plans and specs. We'll review the scope and requirements and come back to you with a bid.",
  },
  {
    q: "Concrete or asphalt for a parking lot?",
    a: "Concrete usually costs more up front but lasts longer and needs less upkeep. Asphalt costs less to install but needs seal coating and restriping over time. We do both, and we'll tell you which fits your site and budget.",
  },
  {
    q: "How soon can we drive on new concrete?",
    a: "As a general rule, foot traffic after a day or two, cars after about a week, and full strength around 28 days. Mix, thickness and weather all change this, so we'll give you a timeline for your job.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in League City and work across Houston and the surrounding cities, from Pearland and Friendswood to Pasadena, Baytown, Galveston and Sugar Land.",
  },
];

export default function CommercialConcrete() {
  usePageSeo({
    title: "Commercial Concrete Contractor in Houston | N&P Services",
    description:
      "Commercial concrete slabs, parking lots, sidewalks, concrete repair, striping and site work across Greater Houston. 17+ years, A+ BBB rated. Free bids.",
    path: "/commercial-concrete",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-900 overflow-hidden">
        <img
          src="/video/hero-pour.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <div className="relative container mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 mb-6">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">
                Commercial Concrete
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Commercial Concrete Contractor in Houston
            </h1>
            <div className="h-1 bg-red-500 w-24 mb-6" />
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              N&P Services pours commercial slabs, parking lots and sidewalks, repairs worn
              concrete, and handles the site work and striping around them. One company, from
              bare ground to a striped lot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold tracking-wider uppercase transition-colors"
              >
                Request a Bid
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:832-226-4018"
                onClick={() => trackCall("commercial_concrete")}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 font-bold tracking-wider uppercase transition-colors hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                (832) 226-4018
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" /> A+ BBB Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" /> 17+ Years in Business
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" /> League City & Greater Houston
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Commercial concrete and paving services
            </h2>
            <p className="text-lg text-slate-600">
              Everything a commercial site needs on the ground, from the first grade to the last
              stripe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-6 border-l-4 border-red-500 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 max-w-3xl">
            Who we work with
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientGroups.map((a) => (
              <div key={a.title}>
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-5">
                  <a.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{a.title}</h3>
                <p className="text-slate-600 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a project works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-3xl">How a project works</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-red-500 pt-5">
                <div className="text-red-400 font-bold text-sm tracking-widest mb-2">
                  STEP {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Where we work</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl">
            Based in League City, working across Houston and the surrounding cities.
          </p>
          <ul className="flex flex-wrap gap-3">
            {serviceCities.map((city) => (
              <li
                key={city}
                className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 font-medium text-slate-800"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Common questions</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-slate-900">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-slate-600">
            <HomeIcon className="inline w-4 h-4 text-red-500 mr-2 -mt-0.5" />
            Need work at home instead? We still do driveways, patios and remodels.{" "}
            <Link href="/services" className="text-red-600 font-semibold hover:underline">
              See all services (Residential tab)
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a bid for your next pour</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Tell us about the site and we'll come out, measure and send you a free bid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-slate-100 px-10 py-5 font-bold tracking-wider uppercase transition-colors"
            >
              Request a Bid
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:832-226-4018"
              onClick={() => trackCall("commercial_concrete_footer")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 font-bold tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (832) 226-4018
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
