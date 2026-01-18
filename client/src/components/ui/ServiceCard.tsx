import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

export function ServiceCard({ title, description, icon, image, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-white/90 p-2 rounded-lg shadow-sm">
          {icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-heading text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={link}>
          <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-accent font-semibold group-hover:translate-x-1 transition-transform">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
