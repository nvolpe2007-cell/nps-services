import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

function StarRating({ rating, onRatingChange }: StarRatingProps) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none transition-transform active:scale-90 hover:scale-110 p-1"
          data-testid={`star-${star}`}
        >
          <Star
            className={`h-9 w-9 md:h-8 md:w-8 transition-colors ${
              star <= (hovered || rating)
                ? "fill-accent text-accent"
                : "fill-none text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

const serviceTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Asphalt & Paving",
  "Concrete Work",
  "Remodeling",
  "Other",
];

export function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setMessage({ type: "error", text: "Please select a star rating." });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          rating,
          reviewText,
          serviceType: serviceType || null,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        setName("");
        setRating(0);
        setReviewText("");
        setServiceType("");
      } else {
        setMessage({ type: "error", text: data.message || "Something went wrong." });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to submit review. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto px-4 md:px-0">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Your Name *</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Smith"
          required
          minLength={2}
          data-testid="input-review-name"
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Rating *</label>
        <StarRating rating={rating} onRatingChange={setRating} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Service Type</label>
        <Select value={serviceType} onValueChange={setServiceType}>
          <SelectTrigger data-testid="select-service-type" className="border-gray-300">
            <SelectValue placeholder="Select a service (optional)" />
          </SelectTrigger>
          <SelectContent>
            {serviceTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Your Review *</label>
        <Textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Tell us about your experience..."
          required
          minLength={10}
          rows={4}
          data-testid="textarea-review"
          className="border-gray-300"
        />
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
          data-testid="review-message"
        >
          {message.text}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3"
        data-testid="button-submit-review"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}
