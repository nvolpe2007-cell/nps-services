import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { blogContent } from "@/data/blogContent";
import { trackCall, trackText } from "@/lib/tracking";

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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </article>

          <div className="mt-12 p-6 bg-slate-50 border-l-4 border-red-500">
            <p className="font-bold text-slate-900 mb-2">About N&P Services</p>
            <p className="text-slate-600 text-sm mb-4">
              N&P Services has been serving the Greater Houston area since 2008. With an A+ BBB rating and over 17 years of experience, we specialize in residential and commercial construction, concrete work, and asphalt services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`sms:832-704-5525?body=${preWrittenMessage}`}
                onClick={() => trackText("blog_text")}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Text Us
              </a>
              <a
                href="tel:832-704-5525"
                onClick={() => trackCall("blog")}
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
