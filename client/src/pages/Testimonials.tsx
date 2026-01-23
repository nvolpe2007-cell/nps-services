import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { ReviewsDisplay } from "@/components/reviews/ReviewsDisplay";

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    company: "Johnson Properties LLC",
    role: "Property Manager",
    rating: 5,
    text: "N&P Services completely transformed our commercial parking lot. The attention to detail was exceptional, and Nino personally made sure everything was done right. We've had zero issues since completion.",
    project: "Commercial Parking Lot",
    date: "November 2025"
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Santos Family",
    role: "Homeowner",
    rating: 5,
    text: "Our kitchen remodel exceeded all expectations. Nino and his team were professional, clean, and finished ahead of schedule. The craftsmanship is outstanding - everyone who visits compliments our new kitchen!",
    project: "Kitchen Remodel",
    date: "October 2025"
  },
  {
    id: 3,
    name: "David Chen",
    company: "Chen's Auto Center",
    role: "Business Owner",
    rating: 5,
    text: "Best decision we made was hiring N&P for our concrete work. The 20,000 sq ft slab they poured for our new facility is flawless. Professional crew, great communication, and competitive pricing.",
    project: "Commercial Concrete Slab",
    date: "September 2025"
  },
  {
    id: 4,
    name: "Jennifer Williams",
    company: "Williams Residence",
    role: "Homeowner",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, working with Nino was a pleasure. He truly cares about delivering quality work. Our outdoor kitchen is now the centerpiece of our backyard!",
    project: "Outdoor Kitchen",
    date: "August 2025"
  },
  {
    id: 5,
    name: "Michael Thompson",
    company: "Thompson RV Resort",
    role: "Owner",
    rating: 5,
    text: "N&P handled our entire RV park development - excavation, utilities, grading, everything. Their expertise saved us time and money. Highly recommend for any commercial site work.",
    project: "RV Park Development",
    date: "July 2025"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
  { icon: Award, value: "A+", label: "BBB Rating" },
  { icon: Clock, value: "17+", label: "Years Experience" }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
      }`}
    >
      <Quote className="w-12 h-12 text-primary/20 mb-4" />
      <StarRating rating={testimonial.rating} />
      <p className="text-lg text-slate-700 mt-4 mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      <div className="border-t pt-4">
        <p className="font-bold text-slate-900">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
            {testimonial.project}
          </span>
          <span className="text-xs text-muted-foreground">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Client Reviews
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with N&P Services.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold font-heading text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div className="overflow-hidden">
            <TestimonialCard testimonial={testimonials[activeIndex]} isActive={true} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* All Reviews Grid */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-4">
            More Reviews
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Browse through all our client testimonials and see why we maintain an A+ BBB rating.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                data-testid={`card-review-${testimonial.id}`}
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-slate-700 mt-3 mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-4">
            Customer Reviews
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See what our customers are saying about their experience with N&P Services.
          </p>
          <ReviewsDisplay />
        </div>
      </div>

      {/* Submit Review Form */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-4">
            Share Your Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We'd love to hear about your project! Leave a review to help others learn about our work.
          </p>
          <ReviewForm />
        </div>
      </div>

      {/* BBB Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-heading mb-4">
              A+ BBB Rated Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              N&P Services maintains an A+ rating with the Better Business Bureau, reflecting our commitment to quality workmanship and customer satisfaction.
            </p>
            <a
              href="https://www.bbb.org/us/tx/league-city/profile/construction-services/n-p-services-0915-90009898"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="link-bbb-profile"
            >
              View Our BBB Profile
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Join our growing list of satisfied clients. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-slate-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
            data-testid="link-contact-cta"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}
