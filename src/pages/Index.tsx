import { JavaTourGallery } from "@/components/JavaTourGallery";
import { JavaBookingWidget } from "@/components/JavaBookingWidget";
import { JavaTourDetails } from "@/components/JavaTourDetails";
import { JavaTermsSection } from "@/components/JavaTermsSection";
import { JavaFAQSection } from "@/components/JavaFAQSection";
import { JavaMobileBookingBar } from "@/components/JavaMobileBookingBar";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, CheckCircle, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Java Volcano Tour</div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-smooth">All Tours</a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">Destinations</a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-smooth">Home</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary transition-smooth">Indonesia</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary transition-smooth">East Java</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary transition-smooth">Surabaya</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary transition-smooth">Regular Package</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">Leisurely Java Nature Trip</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Title & Social Proof */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Leisurely Java Nature Trip: 5D 4N Surabaya - Mount Ijen - Papuma Beach - Tumpak Sewu Waterfall - Mount Bromo
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-gray-300" />
                <span className="font-medium text-muted-foreground">Not Yet Rated</span>
              </div>
              <span className="text-muted-foreground">(0 reviews)</span>
            </div>
            <Badge variant="secondary">Operated by Java Volcano Tour Operator</Badge>
          </div>
          
          {/* Value Proposition Bar */}
          <div className="mt-3 flex items-center gap-4 text-sm">
            <Badge variant="outline" className="gap-1">
              <CheckCircle className="w-3 h-3" />
              Free Rescheduling {'>'}48hrs
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Shield className="w-3 h-3" />
              Reserve Now & Pay Later
            </Badge>
          </div>
        </div>

        {/* Desktop Layout: Two Columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <JavaTourGallery />
            <JavaTourDetails />
            <JavaTermsSection />
            <JavaFAQSection />
          </div>

          {/* Right Column - Booking Widget (Desktop Only) */}
          <div className="hidden lg:block">
            <JavaBookingWidget />
          </div>
        </div>
      </div>

      {/* Mobile Booking Bar */}
      <JavaMobileBookingBar />
    </div>
  );
};

export default Index;
