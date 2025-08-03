import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Ticket, Users, Globe, MapPin, CheckCircle, X } from "lucide-react";

export const TourDetails = () => {
  return (
    <div className="space-y-6">
      {/* Key Info Bar */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">12 hours</p>
                <p className="text-xs text-muted-foreground">Duration</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Mobile ticket</p>
                <p className="text-xs text-muted-foreground">Ticket type</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Small group</p>
                <p className="text-xs text-muted-foreground">Max 8 people</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">English</p>
                <p className="text-xs text-muted-foreground">Language</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Highlights */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Explore the medieval village of Eze with its exotic garden",
              "Visit the glamorous principality of Monaco and Monte Carlo",
              "Walk along the famous Croisette in Cannes",
              "Professional driver-guide with local expertise",
              "Small group experience with personalized attention",
              "Comfortable air-conditioned transportation"
            ].map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Included
              </h4>
              <ul className="space-y-2">
                {[
                  "Professional driver-guide",
                  "Air-conditioned vehicle",
                  "Hotel pickup and drop-off",
                  "Fuel and parking fees",
                  "All taxes and service charges"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-700 mb-3 flex items-center gap-2">
                <X className="w-4 h-4" />
                Not Included
              </h4>
              <ul className="space-y-2">
                {[
                  "Entrance fees to attractions",
                  "Meals and beverages",
                  "Personal expenses",
                  "Gratuities (optional)",
                  "Travel insurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <X className="w-4 h-4 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Itinerary */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>What To Expect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                stop: "Stop 1: Milan Departure",
                duration: "30 minutes",
                description: "Begin your luxurious journey with pickup from your Milan hotel. Meet your professional driver-guide and settle into your comfortable, air-conditioned vehicle for the scenic drive to the French Riviera."
              },
              {
                stop: "Stop 2: Eze Village",
                duration: "90 minutes", 
                description: "Explore this magical medieval village perched high above the Mediterranean. Wander through narrow cobblestone streets, visit the famous Exotic Garden, and enjoy breathtaking panoramic views of the coastline."
              },
              {
                stop: "Stop 3: Monaco & Monte Carlo",
                duration: "2 hours",
                description: "Discover the glamorous principality of Monaco. Visit the legendary Monte Carlo casino, walk through the luxurious harbor filled with superyachts, and explore the old town of Monaco-Ville."
              },
              {
                stop: "Stop 4: Cannes",
                duration: "90 minutes",
                description: "Stroll along the world-famous Croisette boulevard, see the Palais des Festivals where the Cannes Film Festival takes place, and enjoy some free time for shopping or refreshments."
              },
              {
                stop: "Return to Milan",
                duration: "3.5 hours",
                description: "Relax during the comfortable journey back to Milan, reflecting on your unforgettable day exploring the highlights of the French Riviera."
              }
            ].map((stop, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="w-0.5 h-12 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{stop.stop}</h4>
                    <Badge variant="secondary">{stop.duration}</Badge>
                  </div>
                  <p className="text-muted-foreground">{stop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Meeting & Pickup */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Meeting & Pickup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Pickup Details</h4>
              <p className="text-muted-foreground">
                Pickup is available from most hotels in central Milan. Please provide your hotel details during booking. 
                For locations outside the pickup area, we'll arrange a convenient meeting point nearby.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Pickup Time</h4>
              <p className="text-muted-foreground">
                Pickup time is approximately 7:00 AM. The exact time will be confirmed 24 hours before your tour date.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};