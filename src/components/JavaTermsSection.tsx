import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, CreditCard, Calendar, AlertTriangle } from "lucide-react";

export const JavaTermsSection = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Terms & Conditions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Payment Terms */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment Terms
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm"><strong>Deposit:</strong> A 20% deposit of the total tour cost is required to secure your booking</p>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Final Payment Deadlines:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>Credit/Debit Cards: At least 5 days prior to the tour date (allow 5-7 business days for processing)</li>
                <li>Bank Transfers/Wise: At least 3 days prior to the tour date</li>
                <li>Cash: Permitted on the first day only if pre-approved during booking</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Last-Minute Bookings (within 14 days):</strong> Full payment (100%) required at booking</p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Cancellation Policy
          </h4>
          <div className="space-y-3">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Within 48 hours of tour start or No-Shows:</strong> No refund will be issued for cancellations
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Late Payments:</strong> Failure to meet payment deadlines may result in booking cancellation without refund
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Rescheduling Policy */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Rescheduling Policy
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm"><strong>More than 48 hours prior:</strong> Rescheduling incurs no charge</p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Within 48 hours:</strong> Rescheduling possible with no charge, subject to availability</p>
            </div>
          </div>
        </div>

        {/* Group Benefits */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Group Benefits
          </h4>
          <div className="grid md:grid-cols-3 gap-3">
            <Badge variant="secondary" className="p-3 h-auto flex-col items-center">
              <span className="font-medium">18+ People</span>
              <span className="text-xs">1 Person FOC</span>
            </Badge>
            <Badge variant="secondary" className="p-3 h-auto flex-col items-center">
              <span className="font-medium">35+ People</span>
              <span className="text-xs">2 People FOC</span>
            </Badge>
            <Badge variant="secondary" className="p-3 h-auto flex-col items-center">
              <span className="font-medium">50+ People</span>
              <span className="text-xs">3 People FOC + 5% Discount</span>
            </Badge>
          </div>
        </div>

        {/* Safety Record */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Safety & Support
          </h4>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm"><strong>100% Safety Record:</strong> Java Volcano Tour Operator maintains a perfect safety record</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Emergency Contact: WhatsApp +62822-4478-8833 or email javavolcanotouroperator@gmail.com
            </p>
          </div>
        </div>

        {/* Full Terms Link */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            For comprehensive terms and conditions, visit: 
            <a href="https://javavolcano-touroperator.com/terms-and-condition" className="text-primary hover:underline ml-1">
              javavolcano-touroperator.com/terms-and-condition
            </a>
          </p>
        </div>

      </CardContent>
    </Card>
  );
};