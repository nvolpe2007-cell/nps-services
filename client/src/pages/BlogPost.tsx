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
    readTime: "5 min read",
    category: "Concrete",
    content: [
      "If you're a Houston homeowner considering a new concrete driveway, understanding the costs involved is essential for planning your project. At N&P Services, we believe in transparent pricing and helping our customers make informed decisions.",
      "## Factors That Affect Driveway Cost",
      "Several factors influence the final price of your concrete driveway:",
      "**Size and Square Footage** - The larger the driveway, the higher the cost. Most Houston driveways range from 400 to 800 square feet for a standard two-car garage.",
      "**Concrete Thickness** - Standard residential driveways use 4-inch thick concrete, but heavier vehicles may require 5-6 inches for durability.",
      "**Site Preparation** - If your existing driveway needs removal, or if grading and excavation are required, this adds to the total cost.",
      "**Finishing Options** - Basic broom finish is most affordable, while stamped, stained, or exposed aggregate finishes cost more but add significant curb appeal.",
      "## Houston Price Ranges (2026)",
      "For a standard concrete driveway in the Greater Houston area, expect these approximate ranges:",
      "- **Basic concrete driveway:** $6-$10 per square foot",
      "- **Colored or stamped concrete:** $12-$18 per square foot",
      "- **Decorative or premium finishes:** $15-$25 per square foot",
      "For a typical 500 square foot driveway, this means a range of $3,000 to $12,500 depending on your choices.",
      "## Why Choose N&P Services",
      "With over 17 years of experience in Houston, we've poured thousands of driveways across League City, Clear Lake, Pearland, and the surrounding areas. Our A+ BBB rating reflects our commitment to quality work and customer satisfaction.",
      "Ready for a free estimate? Text or call us today at (832) 704-5525."
    ]
  },
  "best-time-asphalt-work-texas": {
    title: "Best Time of Year for Asphalt Work in Texas",
    date: "January 2026",
    readTime: "4 min read",
    category: "Asphalt",
    content: [
      "Texas weather can be unpredictable, but timing your asphalt project right makes a huge difference in quality and longevity. As Houston's parking lot and asphalt experts, we've learned exactly when to schedule different types of asphalt work.",
      "## The Ideal Temperature Range",
      "Asphalt needs specific conditions to cure properly:",
      "- **Hot mix asphalt** works best when ground temperatures are above 50°F",
      "- **Seal coating** requires at least 50°F and rising, with no rain expected for 24 hours",
      "- **Asphalt repairs** can be done year-round with cold patch, but hot mix repairs last longer",
      "## Best Months for Asphalt in Houston",
      "**Spring (March-May):** Excellent conditions. Moderate temperatures and typically drier weather make this ideal for new installations and major repairs.",
      "**Fall (September-November):** Another prime window. Cooler temperatures than summer but still warm enough for proper curing. Less rain than spring in many years.",
      "**Summer (June-August):** Asphalt work is possible, but extreme heat can make fresh asphalt too soft. Early morning pours work best. Seal coating cures quickly in heat.",
      "**Winter (December-February):** Limited window for hot mix work. Cold patches and minor repairs are still possible. Some seal coating on warmer days.",
      "## Planning Your Project",
      "For commercial parking lots, we recommend scheduling major work in spring or fall. This avoids the extreme summer heat and ensures your lot is ready for the busy holiday season.",
      "Need to schedule your asphalt project? Contact N&P Services at (832) 704-5525 for a free consultation."
    ]
  },
  "commercial-construction-permits-houston": {
    title: "Understanding Commercial Construction Permits in Houston",
    date: "December 2025",
    readTime: "6 min read",
    category: "Commercial",
    content: [
      "Navigating the permit process is one of the most challenging aspects of commercial construction. Whether you're building a new warehouse, renovating retail space, or developing an RV park, understanding Houston's permit requirements saves time and money.",
      "## When Do You Need a Permit?",
      "In Houston and surrounding areas, permits are typically required for:",
      "- New commercial construction",
      "- Structural modifications",
      "- Electrical, plumbing, and HVAC work",
      "- Signage installation",
      "- Parking lot construction or major repairs",
      "- Changes affecting fire safety systems",
      "## The Permit Process",
      "**Step 1: Plan Submission** - Submit detailed construction plans to the permitting office. Houston uses an electronic system for most submissions.",
      "**Step 2: Plan Review** - City reviewers check for code compliance. This can take 2-6 weeks depending on project complexity.",
      "**Step 3: Revisions (if needed)** - Address any comments or required changes from reviewers.",
      "**Step 4: Permit Issuance** - Once approved, you receive your permit and can begin work.",
      "**Step 5: Inspections** - Schedule required inspections at various stages of construction.",
      "## How N&P Services Helps",
      "We've completed hundreds of commercial projects across Greater Houston. Our team handles permit applications, coordinates with inspectors, and ensures your project stays on schedule and compliant.",
      "Planning a commercial project? Let's discuss your needs. Call (832) 704-5525."
    ]
  },
  "kitchen-remodel-roi-2026": {
    title: "Kitchen Remodel ROI: Is It Worth the Investment in 2026?",
    date: "December 2025",
    readTime: "5 min read",
    category: "Residential",
    content: [
      "The kitchen is often called the heart of the home, and it's also one of the most valuable rooms when it comes to resale value. But with rising material costs, is a kitchen remodel still worth the investment in 2026?",
      "## Current ROI Statistics",
      "According to recent remodeling reports, kitchen renovations continue to offer strong returns:",
      "- **Minor kitchen remodel:** 75-85% ROI",
      "- **Major kitchen remodel (midrange):** 50-60% ROI",
      "- **Major kitchen remodel (upscale):** 45-55% ROI",
      "Interestingly, smaller updates often provide better percentage returns than complete gut renovations.",
      "## High-ROI Kitchen Upgrades",
      "If you're looking for the best bang for your buck, focus on these updates:",
      "**Cabinet refacing or painting** - Dramatically changes the look at a fraction of replacement cost",
      "**Countertop upgrades** - Quartz and granite remain popular and add perceived value",
      "**New appliances** - Stainless steel, energy-efficient models appeal to buyers",
      "**Lighting improvements** - Under-cabinet lighting and modern fixtures brighten the space",
      "**Flooring** - Durable, attractive flooring like luxury vinyl or tile",
      "## Beyond Resale Value",
      "ROI isn't just about resale. Consider the daily enjoyment of a beautiful, functional kitchen. If you're staying in your home for years, the quality of life improvement matters too.",
      "Ready to discuss your kitchen remodel? N&P Services has transformed countless Houston kitchens. Call us at (832) 704-5525 for a free estimate."
    ]
  },
  "parking-lot-maintenance-tips": {
    title: "5 Parking Lot Maintenance Tips That Save Money",
    date: "November 2025",
    readTime: "4 min read",
    category: "Commercial",
    content: [
      "Your parking lot is often the first impression customers have of your business. A well-maintained lot signals professionalism, while cracks and potholes suggest neglect. More importantly, regular maintenance prevents expensive repairs.",
      "## 1. Schedule Regular Seal Coating",
      "Seal coating every 2-3 years protects your asphalt from UV rays, water damage, and oil spills. This simple treatment extends your parking lot's life by years and costs far less than repaving.",
      "## 2. Fill Cracks Promptly",
      "Small cracks become big problems. Water seeps in, freezes (yes, even in Houston some winters), and expands the crack. Annual crack filling prevents this cycle of damage.",
      "## 3. Maintain Proper Drainage",
      "Standing water is asphalt's enemy. Ensure drains are clear, grade slopes away from buildings, and address low spots where water collects.",
      "## 4. Keep Up with Striping",
      "Fresh striping isn't just aesthetic—it's safety. Clear markings prevent accidents, maximize parking efficiency, and show customers you care about details.",
      "## 5. Address Potholes Immediately",
      "Potholes grow quickly and create liability risks. A small pothole repair costs a fraction of what you'll pay if it damages a customer's vehicle or causes an injury.",
      "## The Cost of Neglect",
      "A well-maintained asphalt parking lot lasts 25-30 years. A neglected one may need complete replacement in 15 years or less. The math is simple: maintenance pays for itself many times over.",
      "N&P Services offers comprehensive parking lot maintenance for Houston businesses. Contact us at (832) 704-5525."
    ]
  },
  "choosing-contractor-houston": {
    title: "How to Choose a Reliable Contractor in Houston",
    date: "November 2025",
    readTime: "7 min read",
    category: "Tips",
    content: [
      "Hiring a contractor is a significant decision. Whether you're planning a home renovation or commercial construction project, choosing the right partner determines your project's success. Here's what to look for—and what to avoid.",
      "## Essential Qualifications",
      "**Licensing and Insurance** - Verify the contractor is properly licensed for your type of project. Ask for proof of liability insurance and workers' compensation. This protects you from liability if something goes wrong.",
      "**Established Track Record** - Look for contractors with years of experience in your specific project type. A great kitchen remodeler may not be the best choice for commercial site work.",
      "**References and Reviews** - Check Google reviews, BBB ratings, and ask for references. A reputable contractor happily provides past customer contacts.",
      "## Red Flags to Avoid",
      "- Demands large upfront payments (more than 30%)",
      "- No written contract or vague scope of work",
      "- Pressure to sign immediately",
      "- No physical business address",
      "- Unwilling to pull permits",
      "- Significantly lower bids than competitors (often means cutting corners)",
      "## Questions to Ask",
      "Before signing, ask potential contractors:",
      "1. How long have you been in business?",
      "2. Can you provide references from similar projects?",
      "3. Who will be on-site managing my project daily?",
      "4. What's your payment schedule?",
      "5. How do you handle changes or unexpected issues?",
      "6. What warranties do you offer?",
      "## Why Customers Choose N&P Services",
      "With 17+ years serving Greater Houston, an A+ BBB rating, and hundreds of successful projects, N&P Services has earned the trust of homeowners and businesses alike. Owner Nino Farias personally oversees every project.",
      "Ready to discuss your project with a contractor you can trust? Call (832) 704-5525 or text us today."
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
