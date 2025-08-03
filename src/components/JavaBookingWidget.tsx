import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Shield } from "lucide-react";

const groupPrices = [
  { size: "1 person", price: 3650000 },
  { size: "2 people", price: 2850000 },
  { size: "3 people", price: 2350000 },
  { size: "4-5 people", price: 1950000 },
  { size: "6-7 people", price: 1750000 },
  { size: "8-10 people", price: 1650000 },
  { size: "11+ people", price: 1550000 }
];

export const JavaBookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(groupPrices[1]); // Default to 2 people

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="sticky top-6 shadow-strong">
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">{formatPrice(selectedGroup.price)}</span>
            <span className="text-muted-foreground">per person</span>
          </div>
          <Badge variant="secondary" className="w-fit">
            <Shield className="w-3 h-3 mr-1" />
            20% Deposit to Secure Booking
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

        {/* Group Size Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Group Size</label>
          <div className="relative">
            <select
              value={selectedGroup.size}
              onChange={(e) => {
                const selected = groupPrices.find(group => group.size === e.target.value);
                if (selected) setSelectedGroup(selected);
              }}
              className="w-full p-3 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              {groupPrices.map((group) => (
                <option key={group.size} value={group.size}>
                  {group.size} - {formatPrice(group.price)}
                </option>
              ))}
            </select>
            <Users className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <p className="text-xs text-muted-foreground">
            Price per person decreases with larger groups
          </p>
        </div>

        {/* CTA Button */}
        <Button variant="booking" size="xl" className="w-full">
          Check Availability
        </Button>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Free rescheduling {'>'}48hrs
          </p>
          <p className="text-xs text-muted-foreground">
            No refund for cancellations within 48 hours
          </p>
        </div>
      </CardContent>
    </Card>
  );
};