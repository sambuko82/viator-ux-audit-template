import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Shield } from "lucide-react";

export const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });

  return (
    <Card className="sticky top-6 shadow-strong">
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">€285</span>
            <span className="text-muted-foreground">per adult</span>
          </div>
          <Badge variant="secondary" className="w-fit">
            <Shield className="w-3 h-3 mr-1" />
            Lowest Price Guarantee
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Date Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Date</label>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Traveler Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Travelers</label>
          <div className="flex items-center gap-4 p-3 border border-input rounded-md bg-background">
            <Users className="w-5 h-5 text-muted-foreground" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm">Adults</span>
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setTravelers(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                    className="h-8 w-8 p-0"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{travelers.adults}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setTravelers(prev => ({ ...prev, adults: prev.adults + 1 }))}
                    className="h-8 w-8 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">Children (0-12)</span>
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setTravelers(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                    className="h-8 w-8 p-0"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{travelers.children}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setTravelers(prev => ({ ...prev, children: prev.children + 1 }))}
                    className="h-8 w-8 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button variant="booking" size="xl" className="w-full">
          Check Availability
        </Button>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Reserve now & pay later
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Free cancellation up to 24 hours before
          </p>
        </div>
      </CardContent>
    </Card>
  );
};