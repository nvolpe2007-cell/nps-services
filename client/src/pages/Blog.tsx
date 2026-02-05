import { Link } from "wouter";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: "concrete-driveway-cost-houston",
    title: "How Much Does a Concrete Driveway Cost in Houston?",
    excerpt: "Current 2026 pricing: $9.50-$10/sq ft for standard concrete. Learn about permits, Houston's clay soil challenges, and why thickness matters for your driveway.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Concrete"
  },
  {
    id: "best-time-asphalt-work-texas",
    title: "Why Does My Houston Parking Lot Keep Cracking?",
    excerpt: "Repairs that keep failing? Houston's clay soil and drainage issues cause cracks from below. Learn why cheap fixes don't work and what actually solves the problem.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Asphalt"
  },
  {
    id: "commercial-construction-permits-houston",
    title: "Do I Need a Permit for My Houston Commercial Project?",
    excerpt: "Houston requires permits for most commercial work. Here's what happens if you skip them, current building codes, and how long the permit process takes.",
    date: "December 2025",
    readTime: "6 min read",
    category: "Commercial"
  },
  {
    id: "kitchen-remodel-roi-2026",
    title: "What Will My Houston Kitchen Remodel Really Cost?",
    excerpt: "Kitchen costs are up 15% in Houston. Get real pricing from $15K-$150K+, learn why humidity affects material choices, and what to budget for hidden surprises.",
    date: "December 2025",
    readTime: "6 min read",
    category: "Residential"
  },
  {
    id: "parking-lot-maintenance-tips",
    title: "Is My Houston Parking Lot ADA Compliant?",
    excerpt: "ADA violations can cost $75,000+ in fines. Learn the required number of accessible spaces, proper signage, and common violations we see across Houston.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Commercial"
  },
  {
    id: "choosing-contractor-houston",
    title: "What Should I Ask Before Hiring a Houston Contractor?",
    excerpt: "The questions experienced Houston homeowners ask before signing: licensing, insurance, payment schedules, and red flags that should make you walk away.",
    date: "November 2025",
    readTime: "6 min read",
    category: "Tips"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[0.15em] uppercase">
              Construction Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            N&P Services Blog
          </h1>
          <div className="h-1 bg-red-500 w-20 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Expert tips, industry insights, and helpful guides from Houston's trusted construction professionals.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white border border-slate-200 hover:border-red-300 transition-all hover:shadow-lg group"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <span className="text-red-600 hover:text-red-700 font-bold text-sm flex items-center gap-1 cursor-pointer">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get a free estimate from Houston's trusted construction experts.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-bold text-sm tracking-wider uppercase transition-all hover:scale-105">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
