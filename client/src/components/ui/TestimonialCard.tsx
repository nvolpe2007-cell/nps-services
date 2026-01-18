import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
}

export function TestimonialCard({ name, role = "Client", content, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-slate-50 border-none shadow-sm h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <Quote className="h-8 w-8 text-primary/20" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 mb-6 italic leading-relaxed">"{content}"</p>
        <div>
          <h4 className="font-bold font-heading text-slate-900">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
