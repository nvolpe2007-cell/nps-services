import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import type { Review } from "@shared/schema";

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-accent text-accent" : "fill-none text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const formattedDate = review.createdAt 
    ? new Date(review.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100" />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <span className="text-accent font-bold text-lg">
            {review.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          {review.serviceType && (
            <p className="text-xs text-gray-500">{review.serviceType}</p>
          )}
        </div>
      </div>
      <StarDisplay rating={review.rating} />
      <p className="mt-4 text-gray-600 leading-relaxed">{review.reviewText}</p>
      {formattedDate && (
        <p className="mt-4 text-xs text-gray-400">{formattedDate}</p>
      )}
    </div>
  );
}

export function ReviewsDisplay() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse text-gray-400">Loading reviews...</div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
