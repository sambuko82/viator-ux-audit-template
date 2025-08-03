import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "October 2024",
    title: "Absolutely magical day!",
    content: "This tour exceeded all expectations. Our guide was incredibly knowledgeable and the small group made it feel very personal. The views from Eze were breathtaking, and Monaco was pure glamour. Highly recommend!",
    verified: true
  },
  {
    id: 2,
    name: "James R.",
    rating: 5,
    date: "September 2024", 
    title: "Perfect French Riviera experience",
    content: "Everything was perfectly organized. The transportation was comfortable, timing was perfect, and we got to see all the highlights. Cannes was beautiful and Monte Carlo was impressive. Worth every euro!",
    verified: true
  },
  {
    id: 3,
    name: "Maria L.",
    rating: 4,
    date: "September 2024",
    title: "Great tour with amazing sights",
    content: "Wonderful experience seeing the French coast. The medieval village of Eze was the highlight for me. Only small complaint was we could have used a bit more time in each location, but overall fantastic day.",
    verified: true
  }
];

export const ReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const averageRating = 4.8;
  const totalReviews = 1234;

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Customer Reviews & Ratings</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">{averageRating}</span>
            <div>
              <StarRating rating={Math.round(averageRating)} />
              <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
            </div>
          </div>
          
          {/* Rating Distribution */}
          <div className="flex-1 max-w-md">
            {[5, 4, 3, 2, 1].map((stars) => {
              const percentage = stars === 5 ? 78 : stars === 4 ? 18 : stars === 3 ? 3 : 1;
              return (
                <div key={stars} className="flex items-center gap-2 text-sm">
                  <span className="w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-muted-foreground text-xs">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
            <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating} />
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mb-2">{review.title}</h4>
              <p className="text-muted-foreground">{review.content}</p>
            </div>
          ))}
          
          {!showAllReviews && reviews.length > 3 && (
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAllReviews(true)}
                className="gap-2"
              >
                Show More Reviews
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};