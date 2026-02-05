import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle } from "lucide-react";

const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  "concrete-driveway-cost-houston": {
    title: "How Much Does a Concrete Driveway Cost in Houston?",
    date: "January 2026",
    readTime: "6 min read",
    category: "Concrete",
    content: [
      "If you're a Houston homeowner considering a new concrete driveway, understanding the real costs is essential. Here's what you need to know about current pricing in our area.",
      "## Current Houston Pricing (2026)",
      "Based on recent projects in the Greater Houston area:",
      "- **Standard concrete driveway:** $9.50-$10.00 per square foot",
      "- **Basic with color or texture:** $15-$22 per square foot",
      "- **Exposed aggregate:** $12-$18 per square foot",
      "- **Stamped or decorative:** $18+ per square foot",
      "- **Minimum project cost:** Around $4,600 (covers fixed costs regardless of size)",
      "## Example Project Costs",
      "- **12' × 30' driveway (360 sq ft):** $2,000-$3,600",
      "- **12' × 40' driveway (480 sq ft):** $2,600-$4,800",
      "- **12' × 50' driveway (600 sq ft):** $3,300-$6,000",
      "Add $1.10-$1.80 per square foot if your old driveway needs demolition and removal.",
      "## Do I Need a Permit in Houston?",
      "**Yes.** Houston requires permits for most concrete driveway work, including new construction, replacements, and extensions. Permit costs range from $50-$300 depending on scope. Inspections are required before AND after concrete placement.",
      "## Why Houston's Clay Soil Matters",
      "Houston's expansive clay soil creates unique challenges. The soil shifts when it gets wet or dry, putting stress on your driveway. This is why proper base preparation, adequate thickness (4-5 inches minimum), and reinforcement are critical here. Cheap contractors skip these steps—and you'll see cracks within a few years.",
      "## How Thick Should My Driveway Be?",
      "- **Standard residential:** 4-5 inches (adequate for cars and SUVs)",
      "- **Heavy vehicles (trucks, RVs):** 6-8 inches",
      "- **City minimum requirement:** 2,500 PSI concrete strength",
      "## What Affects the Final Price?",
      "**Materials (40-50% of cost):** Concrete, reinforcement, base materials",
      "**Labor (50-60% of cost):** Demolition, site prep, forming, pouring, finishing, cleanup",
      "**Houston-specific factors:** Clay soil may require deeper excavation or stabilization",
      "## What's a Good Price? (How to Know You're Not Overpaying)",
      "**Fair price range:** $8-$12 per square foot for basic concrete is competitive in Houston. If someone quotes you $6/sq ft, they're cutting corners. If they quote $15+ for plain concrete, get more bids.",
      "**Red flags:** Quotes way below market usually mean thin concrete, no rebar, or poor base prep. You'll pay more to fix it later.",
      "**Get 3 quotes:** Compare apples to apples—same thickness, same finish, same scope. The cheapest bid is rarely the best value.",
      "## How Long Will It Last?",
      "A properly installed concrete driveway in Houston lasts 20-30 years with basic maintenance. Sealing every few years helps protect against Houston's heat and occasional freeze.",
      "## Get Your Free Estimate",
      "N&P Services has poured driveways across League City, Clear Lake, Pearland, and Greater Houston since 2008. We handle permits, prepare the site properly for our clay soil, and stand behind our work. Text or call (832) 704-5525 for a free quote."
    ]
  },
  "best-time-asphalt-work-texas": {
    title: "Why Does My Houston Parking Lot Keep Cracking?",
    date: "January 2026",
    readTime: "5 min read",
    category: "Asphalt",
    content: [
      "If your parking lot develops cracks that seem to come back no matter how many times you repair them, you're not alone. Houston's unique conditions create specific challenges for asphalt—and understanding them helps you fix the problem for good.",
      "## Houston's Clay Soil Problem",
      "Houston sits on expansive clay soil that swells when wet and shrinks when dry. This constant movement stresses your pavement from underneath, causing cracks that start at the base and work their way up. No amount of surface patching fixes a base problem.",
      "## Water Is Your Parking Lot's Enemy",
      "When cracks form, water seeps through and attacks the asphalt binder chemically while also weakening the base layers. Houston's heavy rains make this worse. Poor drainage leads to standing water, which accelerates deterioration rapidly.",
      "## Why Cheap Repairs Fail",
      "Many contractors pave over problems without addressing root causes. They fill the crack on top while the base continues to fail underneath. Within a year, the same cracks return—often worse than before.",
      "## Signs You Need More Than Patching",
      "- Cracks that keep returning in the same spots",
      "- Multiple potholes and depressions",
      "- Standing water or poor drainage",
      "- Faded, rough surface texture",
      "- Visible settling or sinking areas",
      "## The Right Fix",
      "For recurring problems, we assess the base and subgrade—not just the surface. Sometimes sections need to be removed and rebuilt from the base up. Yes, it costs more upfront, but it actually solves the problem.",
      "## Maintenance That Prevents Cracks",
      "- **Seal coat every 2 years** to protect from UV and water",
      "- **Fill cracks immediately** before water gets in",
      "- **Keep drains clear** so water doesn't pool",
      "- **Address potholes fast** before they grow",
      "## What's a Good Price for Parking Lot Work?",
      "**New asphalt paving:** $3-$7 per square foot depending on thickness and base work",
      "**Seal coating:** $0.15-$0.25 per square foot (budget $300-$600 for a typical small lot)",
      "**Crack filling:** $0.50-$1.50 per linear foot",
      "**Pothole repair:** $100-$400 per pothole depending on size",
      "**Full resurfacing:** $2-$4 per square foot (overlay on existing base)",
      "**Warning:** If a quote is 30%+ below others, they're likely not addressing the real problem. Cheap surface patches over a bad base waste your money.",
      "## How Long Should a Parking Lot Last?",
      "A properly installed and maintained asphalt parking lot lasts 20-30 years. If yours is failing at 10-15 years, something went wrong with the original installation or maintenance was neglected.",
      "## Get an Honest Assessment",
      "N&P Services has been Houston's parking lot and asphalt experts since 2008. We'll tell you honestly whether you need patching, resurfacing, or full replacement. Call or text (832) 704-5525 for a free evaluation."
    ]
  },
  "commercial-construction-permits-houston": {
    title: "Do I Need a Permit for My Houston Commercial Project?",
    date: "December 2025",
    readTime: "6 min read",
    category: "Commercial",
    content: [
      "One of the most common questions Houston business owners ask: Do I really need a permit for this project? Here's what you need to know about Houston's current requirements.",
      "## Projects That Require Permits",
      "In Houston, you need permits for:",
      "- New commercial construction",
      "- Structural modifications (removing or adding walls)",
      "- Electrical, plumbing, and HVAC changes",
      "- Parking lot construction or major repairs",
      "- Signage installation",
      "- Fire safety system changes",
      "- Tenant build-outs that change the space",
      "## Current Building Codes (2026)",
      "As of January 1, 2024, Houston follows the 2021 International Building Codes (IBC, IRC, UPC, UMC) with local amendments. The 2024 codes likely won't be adopted until 2026-2028, so current projects follow 2021 standards.",
      "## What Happens If I Skip the Permit?",
      "Building without permits creates serious problems:",
      "- **Fines and stop-work orders** from the city",
      "- **Insurance issues** if something goes wrong",
      "- **Problems selling the property** later",
      "- **Liability exposure** if work doesn't meet code",
      "- **Required demolition** of unpermitted work",
      "## The Permit Timeline",
      "**Plan review typically takes 2-6 weeks** depending on project complexity. Simple projects move faster; complicated ones take longer. Houston uses the iPermits/ProjectDox electronic system for most submissions.",
      "## Inspections Required",
      "Most commercial projects require multiple inspections at different stages. For concrete work like parking lots, inspections are required before AND after placement. Schedule these in advance—missing an inspection can delay your project.",
      "## How We Help",
      "N&P Services handles the permit process for our commercial clients. We prepare the applications, coordinate with city reviewers, schedule inspections, and keep your project on track. You focus on your business while we handle the paperwork.",
      "## Contact for Permit Questions",
      "Houston Permitting Center: 832-394-8899",
      "Or let us handle it. Call N&P Services at (832) 704-5525."
    ]
  },
  "kitchen-remodel-roi-2026": {
    title: "What Will My Houston Kitchen Remodel Really Cost?",
    date: "December 2025",
    readTime: "6 min read",
    category: "Residential",
    content: [
      "Kitchen remodeling costs in Houston have risen about 15% over the past two years. Here's what you should actually budget for a kitchen renovation in 2026.",
      "## Current Houston Kitchen Costs",
      "Based on recent projects in the Greater Houston area:",
      "- **Minor kitchen refresh:** $15,000-$30,000",
      "- **Mid-range full remodel:** $40,000-$75,000",
      "- **High-end kitchen renovation:** $75,000-$150,000+",
      "- **Combined kitchen + bathroom remodel:** $85,000-$150,000",
      "## Always Budget for Surprises",
      "Here's what experienced Houston homeowners know: **demolition often uncovers hidden problems.** Old plumbing, outdated electrical, or structural issues add unexpected costs. Budget an extra 10-15% contingency for what's hiding behind those walls.",
      "## What Houston's Humidity Means for Your Kitchen",
      "Houston's high humidity requires specific material choices:",
      "**Countertops:** Quartz is ideal (non-porous, no sealing needed). Granite works but needs periodic sealing.",
      "**Flooring:** LVT (luxury vinyl tile) is waterproof and durable. Porcelain tile works well. Avoid solid hardwood in humid areas.",
      "**Cabinets:** Quality materials resist warping in humidity. Cheap particle board fails quickly here.",
      "## Do I Need a Permit?",
      "If you're changing plumbing, electrical, or removing walls—yes. Moving a sink, adding outlets, or structural changes all require permits in Houston. Your contractor should handle this.",
      "## What Adds the Most Value?",
      "**Best ROI updates:**",
      "- Cabinet refacing or painting (vs. full replacement)",
      "- Quartz or granite countertops",
      "- Updated appliances",
      "- Better lighting",
      "- Quality flooring",
      "Smaller, strategic updates often return 75-85% of cost. Full gut renovations return 50-60%.",
      "## What's a Good Price for a Kitchen Remodel?",
      "**Budget refresh ($15K-$30K):** Cabinet painting, new countertops, updated hardware, fresh paint. Good value if cabinets are solid.",
      "**Mid-range remodel ($40K-$75K):** New cabinets, quartz counters, appliance upgrades, new flooring, lighting. Most popular option.",
      "**High-end renovation ($75K-$150K+):** Custom cabinets, premium appliances, layout changes, structural work.",
      "**Price per square foot:** $150-$400/sq ft is typical in Houston depending on finishes.",
      "**Red flag:** Anyone quoting a full kitchen remodel under $20K is using cheap materials or skipping something important.",
      "## Can I Stay in My House During Remodel?",
      "Usually yes, but expect dust, noise, and limited kitchen access. We work with homeowners to minimize disruption and can set up temporary cooking areas.",
      "## Get an Accurate Estimate",
      "Every kitchen is different. N&P Services provides detailed estimates after seeing your space—not vague ranges. Call or text (832) 704-5525 to schedule a consultation."
    ]
  },
  "parking-lot-maintenance-tips": {
    title: "Is My Houston Parking Lot ADA Compliant?",
    date: "November 2025",
    readTime: "5 min read",
    category: "Commercial",
    content: [
      "Every commercial parking lot in Houston must comply with the Americans with Disabilities Act (ADA). Non-compliance exposes you to lawsuits, fines, and—most importantly—prevents customers with disabilities from accessing your business.",
      "## Basic ADA Parking Requirements",
      "The number of accessible spaces required depends on your total parking spaces:",
      "- **1-25 total spaces:** 1 accessible space",
      "- **26-50 spaces:** 2 accessible spaces",
      "- **51-75 spaces:** 3 accessible spaces",
      "- **76-100 spaces:** 4 accessible spaces",
      "At least one of every six accessible spaces must be van-accessible (wider with adjacent access aisle).",
      "## What Makes a Space Compliant?",
      "**Proper dimensions:** Standard accessible spaces are 8 feet wide with a 5-foot access aisle. Van spaces need an 8-foot aisle.",
      "**Signage:** Spaces must have vertical signs (not just ground markings) showing the international symbol of accessibility. Van spaces need additional 'Van Accessible' signs.",
      "**Location:** Accessible spaces must be on the shortest accessible route to the entrance.",
      "**Surface:** Must be firm, stable, and slip-resistant. No slopes greater than 1:48 in any direction.",
      "## Common Violations We See",
      "- Faded striping that's no longer visible",
      "- Missing or damaged signs",
      "- Access aisles blocked by landscaping or shopping carts",
      "- Surfaces with cracks, potholes, or uneven areas",
      "- Spaces too far from accessible entrances",
      "- Missing curb ramps or ramps that are too steep",
      "## The Cost of Non-Compliance",
      "ADA lawsuits are common in Texas. First violations can result in fines up to $75,000. Repeat violations: up to $150,000. Plus attorney fees and required remediation.",
      "## What Does ADA Compliance Work Cost?",
      "**Parking lot striping:** $0.20-$0.50 per linear foot",
      "**ADA-compliant signs:** $50-$150 each installed",
      "**Curb ramp installation:** $1,000-$2,500 per ramp",
      "**Surface repairs:** $3-$8 per square foot for asphalt, $8-$12 for concrete",
      "**Full compliance update:** $2,000-$10,000+ depending on current condition and lot size",
      "**Worth it:** Compare these costs to a $75,000 fine. Proactive compliance is always cheaper than a lawsuit.",
      "## How N&P Services Helps",
      "We assess your parking lot for ADA compliance, handle striping and signage, repair surfaces, and install proper curb ramps. We've helped dozens of Houston businesses get compliant.",
      "Concerned about your lot? Call (832) 704-5525 for a compliance evaluation."
    ]
  },
  "choosing-contractor-houston": {
    title: "What Should I Ask Before Hiring a Houston Contractor?",
    date: "November 2025",
    readTime: "6 min read",
    category: "Tips",
    content: [
      "Choosing the wrong contractor can turn your project into a nightmare. Here are the questions experienced Houston homeowners and business owners ask before signing anything.",
      "## Questions About Their Business",
      "1. How long have you been in business in Houston?",
      "2. Are you licensed for this type of work? (Texas requires licensing for projects over $20,000)",
      "3. Can I see your liability insurance and workers' comp certificates?",
      "4. What's your physical business address?",
      "5. Can you provide references from recent projects like mine?",
      "## Questions About Your Project",
      "1. Have you done projects similar to mine? Can I see examples?",
      "2. Who will be on-site daily managing the work?",
      "3. Will you handle permits and inspections?",
      "4. What's your realistic timeline?",
      "5. How do you handle changes or unexpected issues?",
      "## Questions About Money",
      "1. What's your payment schedule?",
      "2. What exactly is included in this price?",
      "3. What might cost extra?",
      "4. Do you offer any warranties?",
      "## Red Flags That Should Worry You",
      "- **Demands more than 30% upfront** — reputable contractors don't need all your money before starting",
      "- **No written contract** — if it's not in writing, it doesn't exist",
      "- **Pressure to sign today** — legitimate contractors give you time to decide",
      "- **Much lower than other bids** — they're cutting corners somewhere",
      "- **Won't pull permits** — this protects THEM, not you",
      "- **No physical address** — where will they be when you have a problem?",
      "- **Cash only** — usually means they're not reporting income (and won't be around if something goes wrong)",
      "## How to Verify What They Tell You",
      "**Check BBB rating** — look for A+ and read the complaints, not just the rating",
      "**Read Google reviews** — look for patterns in complaints",
      "**Call references** — actually call them and ask about problems, not just praise",
      "**Verify insurance** — call the insurance company directly to confirm coverage",
      "## About N&P Services",
      "We've been serving Greater Houston since 2008. A+ BBB rated. Licensed and insured. Owner Nino Farias personally oversees every project. We're happy to answer any of these questions.",
      "Call (832) 704-5525 or text us to discuss your project."
    ]
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = blogContent[slug];
  const preWrittenMessage = encodeURIComponent("I have a job for you!");

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-bold">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <p key={index} className="font-bold text-slate-800 mb-2">
            {paragraph.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 text-slate-700">
            {paragraph.replace("- ", "").split("**").map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </li>
        );
      }
      if (paragraph.match(/^\d\./)) {
        return (
          <li key={index} className="ml-6 mb-2 text-slate-700 list-decimal">
            {paragraph.replace(/^\d\.\s/, "")}
          </li>
        );
      }
      return (
        <p key={index} className="text-slate-700 mb-4 leading-relaxed">
          {paragraph.split("**").map((part, i) => 
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 cursor-pointer text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </span>
            </Link>
            
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 bg-red-900/30 px-3 py-1 mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-slate-50 border-l-4 border-red-500">
            <p className="font-bold text-slate-900 mb-2">About N&P Services</p>
            <p className="text-slate-600 text-sm mb-4">
              N&P Services has been serving the Greater Houston area since 2008. With an A+ BBB rating and over 17 years of experience, we specialize in residential and commercial construction, concrete work, and asphalt services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`sms:832-704-5525?body=${preWrittenMessage}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Text Us
              </a>
              <a
                href="tel:832-704-5525"
                className="inline-flex items-center gap-2 border-2 border-slate-300 hover:border-slate-900 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4" />
                (832) 704-5525
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
