import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export const JavaMobileBookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-strong p-4 md:hidden z-50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-primary">IDR 5,050,000</span>
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            <Shield className="w-3 h-3 mr-1" />
            20% Deposit
          </Badge>
        </div>
        <Button variant="booking" size="lg" className="px-8">
          Check Availability
        </Button>
      </div>
    </div>
  );
};