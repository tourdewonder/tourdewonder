import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Send, User, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const JSONBIN_BASE_URL = "https://api.jsonbin.io/v3";
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID as string;
const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY as string;

interface Review {
  id: number;
  text: string;
  name: string;
  country: string;
  date: string;
  rating: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    text: "Amazing experience with Tour De WONDER! The Kashmir trip was beautifully organized. Every detail was taken care of. Highly recommended!",
    name: "Raju",
    country: "India",
    date: "15 Jan 2025",
    rating: 5,
  },
  {
    id: 2,
    text: "We booked the houseboat package and it was magical. The views from Dal Lake at sunset were breathtaking. Thank you Tour De WONDER!",
    name: "Rohit",
    country: "India",
    date: "22 Feb 2025",
    rating: 5,
  },
  {
    id: 3,
    text: "The trek to Great Lakes was the best adventure of my life. Professional guides, great food, and unforgettable scenery. Will book again!",
    name: "Deepak",
    country: "India",
    date: "5 Mar 2025",
    rating: 5,
  },
];

const fetchReviews = async (): Promise<Review[]> => {
  if (!BIN_ID) throw new Error("JSONBin bin ID not configured");
  const response = await fetch(`${JSONBIN_BASE_URL}/b/${BIN_ID}/latest`, {
    headers: { "X-Master-Key": API_KEY },
  });
  if (!response.ok) throw new Error("Failed to fetch reviews");
  const data = await response.json();
  return data.record.reviews || [];
};

const saveReviews = async (reviews: Review[]): Promise<void> => {
  if (!BIN_ID) throw new Error("JSONBin bin ID not configured");
  const response = await fetch(`${JSONBIN_BASE_URL}/b/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify({ reviews }),
  });
  if (!response.ok) throw new Error("Failed to save reviews");
};

const StarRating = ({ 
  rating, 
  onRatingChange, 
  interactive = false,
  size = 18 
}: { 
  rating: number; 
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: number;
}) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${
            interactive 
              ? "cursor-pointer transition-transform hover:scale-110" 
              : ""
          } ${
            star <= rating 
              ? "fill-accent text-accent" 
              : "fill-muted text-muted"
          }`}
          onClick={() => interactive && onRatingChange?.(star)}
        />
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      if (!BIN_ID || !API_KEY) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await fetchReviews();
        setReviews(data.length > 0 ? data : initialReviews);
      } catch {
        setError("Failed to load reviews");
      } finally {
        setIsLoading(false);
      }
    };
    loadReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.text.trim()) return;

    setIsSubmitting(true);
    setError(null);

    const review: Review = {
      id: Date.now(),
      text: newReview.text,
      name: newReview.name,
      country: "India",
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      rating: newReview.rating,
    };

    try {
      const updatedReviews = [review, ...reviews];
      await saveReviews(updatedReviews);
      setReviews(updatedReviews);
      setNewReview({ name: "", text: "", rating: 5 });
    } catch {
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  if (isLoading) {
    return (
      <section id="testimonials" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-accent" size={32} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        {error && (
          <div className="max-w-xl mx-auto mb-6 bg-destructive/10 text-destructive rounded-lg p-3 flex items-center gap-2">
            <AlertCircle size={16} />
            <span className="text-sm font-sans">{error}</span>
          </div>
        )}

        <div className="text-center mb-10">
          <p className="section-title">Testimonial</p>
          <h2 className="section-heading">Regards From Travelers</h2>
          <div className="flex justify-center items-center gap-1 mt-3">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-muted-foreground font-sans text-sm ml-2">
              {averageRating.toFixed(1)} ({reviews.length} reviews)
            </span>
          </div>
        </div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-12 bg-card rounded-2xl p-6 shadow-md border"
        >
          <h3 className="font-sans font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <User size={20} />
            Write a Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="review-name" className="font-sans text-sm text-muted-foreground mb-1 block">
                Your Name
              </label>
              <Input
                id="review-name"
                type="text"
                placeholder="Enter your name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
                className="font-sans"
              />
            </div>
            
            <div>
              <label htmlFor="review-rating" className="font-sans text-sm text-muted-foreground mb-1 block">
                Your Rating
              </label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
                interactive
                size={28}
              />
            </div>

            <div>
              <label htmlFor="review-text" className="font-sans text-sm text-muted-foreground mb-1 block">
                Your Review
              </label>
              <Textarea
                id="review-text"
                placeholder="Share your experience with us..."
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                required
                className="font-sans min-h-[100px] resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-sans"
            >
              <Send size={16} className="mr-2" />
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </motion.div>

        {/* Reviews Display */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <StarRating rating={review.rating} size={14} />
                {review.id === reviews[0]?.id && (
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-sans">
                    New
                  </span>
                )}
              </div>
              <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-5">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-sans font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{review.country} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
