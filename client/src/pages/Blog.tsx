import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top Trends in Home Remodeling for 2026",
      excerpt: "From sustainable materials to smart home integration, discover what's shaping residential construction this year.",
      date: "Oct 15, 2025",
      author: "Margarito Garcia",
      category: "Remodeling"
    },
    {
      id: 2,
      title: "The Importance of Professional Parking Lot Maintenance",
      excerpt: "Why regular seal coating and striping can save your business thousands in long-term repair costs.",
      date: "Sep 22, 2025",
      author: "N&P Team",
      category: "Commercial"
    },
    {
      id: 3,
      title: "How to Choose a Reliable Construction Contractor",
      excerpt: "5 red flags to watch out for and the key questions you should ask before signing a contract.",
      date: "Aug 10, 2025",
      author: "Margarito Garcia",
      category: "Tips"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-heading text-center mb-6">Construction Insights</h1>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Expert advice, industry news, and updates from the N&P Services team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden">
              <div className="h-48 bg-slate-200 relative">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </div>
                {/* Placeholder for blog image */}
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  Image Placeholder
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</div>
                  <div className="flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</div>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 hover:text-primary cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                  Read Full Article &rarr;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
