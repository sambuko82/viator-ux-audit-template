import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Play } from "lucide-react";
import heroImage from "@/assets/hero-french-riviera.jpg";
import ezeImage from "@/assets/eze-village.jpg";
import monacoImage from "@/assets/monaco-casino.jpg";
import cannesImage from "@/assets/cannes-croisette.jpg";

const images = [
  { src: heroImage, alt: "French Riviera coastline with Monaco harbor", isVideo: false },
  { src: ezeImage, alt: "Eze medieval village overlooking the Mediterranean", isVideo: false },
  { src: monacoImage, alt: "Monaco Monte Carlo casino and luxury harbor", isVideo: false },
  { src: cannesImage, alt: "Cannes Croisette boulevard and beaches", isVideo: false },
];

export const TourGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <Card className="relative overflow-hidden shadow-medium">
        <div className="aspect-video bg-muted">
          <img 
            src={images[selectedImage].src} 
            alt={images[selectedImage].alt}
            className="w-full h-full object-cover"
          />
          {images[selectedImage].isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button size="lg" variant="floating" className="rounded-full">
                <Play className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Card 
            key={index}
            className={`relative overflow-hidden cursor-pointer transition-smooth ${
              selectedImage === index ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {image.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};