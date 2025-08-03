import { TourGallery } from "@/components/TourGallery";
import { BookingWidget } from "@/components/BookingWidget";
import { TourDetails } from "@/components/TourDetails";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { SimilarTours } from "@/components/SimilarTours";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">TourVista</div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-smooth">Tours</a>
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
          <a href="#" className="hover:text-primary transition-smooth">Milan</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary transition-smooth">Day Trips</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">French Coast Tour</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Title & Social Proof */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            The Luxurious French Coast: Eze, Monaco, Monte Carlo & Cannes from Milan
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8</span>
              </div>
              <a href="#reviews" className="text-primary hover:underline">
                (1,234 reviews)
              </a>
            </div>
            <Badge variant="secondary">Operated by Premium Tours</Badge>
          </div>
        </div>

        {/* Desktop Layout: Two Columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <TourGallery />
            <TourDetails />
            <div id="reviews">
              <ReviewsSection />
            </div>
          </div>

          {/* Right Column - Booking Widget (Desktop Only) */}
          <div className="hidden lg:block">
            <BookingWidget />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="mt-12 space-y-12">
          <SimilarTours />
        </div>
      </div>

      {/* Mobile Booking Bar */}
      <MobileBookingBar />
    </div>
  );
};

export default Index;
