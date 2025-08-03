import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-french-riviera.jpg";

const similarTours = [
  {
    id: 1,
    title: "Cinque Terre Day Trip from Milan",
    image: heroImage,
    rating: 4.7,
    reviews: 892,
    duration: "12 hours",
    groupSize: "Small group",
    price: 245,
    originalPrice: 280
  },
  {
    id: 2,
    title: "Lake Como & Bellagio Full Day Tour", 
    image: heroImage,
    rating: 4.9,
    reviews: 1456,
    duration: "9 hours",
    groupSize: "Small group", 
    price: 165,
    originalPrice: null
  },
  {
    id: 3,
    title: "Swiss Alps & St. Moritz from Milan",
    image: heroImage,
    rating: 4.6,
    reviews: 623,
    duration: "13 hours",
    groupSize: "Small group",
    price: 295,
    originalPrice: 330
  },
  {
    id: 4,
    title: "Venice Day Trip with High-Speed Train",
    image: heroImage,
    rating: 4.8,
    reviews: 2134,
    duration: "13 hours",
    groupSize: "Small group",
    price: 189,
    originalPrice: null
  }
];

export const SimilarTours = () => {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-medium">{rating}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">You Might Also Like</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarTours.map((tour) => (
          <Card key={tour.id} className="overflow-hidden hover:shadow-medium transition-smooth cursor-pointer">
            <div className="aspect-[4/3] relative">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              {tour.originalPrice && (
                <Badge className="absolute top-2 left-2 bg-red-500">
                  Save €{tour.originalPrice - tour.price}
                </Badge>
              )}
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-medium mb-2 line-clamp-2">{tour.title}</h3>
              
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={tour.rating} />
                <span className="text-sm text-muted-foreground">({tour.reviews})</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {tour.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {tour.groupSize}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">€{tour.price}</span>
                {tour.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">€{tour.originalPrice}</span>
                )}
                <span className="text-sm text-muted-foreground">per adult</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};