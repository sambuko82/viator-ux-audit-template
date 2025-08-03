import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Play } from "lucide-react";
import bromoImage from "@/assets/bromo-sunrise.jpg";
import ijenImage from "@/assets/ijen-crater.jpg";
import tumpakImage from "@/assets/tumpak-sewu.jpg";
import papumaImage from "@/assets/papuma-beach.jpg";

const javaImages = [
  { src: bromoImage, alt: "Stunning sunrise over Mount Bromo with panoramic views of the volcanic landscape", isVideo: false },
  { src: ijenImage, alt: "Ijen Crater with turquoise acidic lake and blue flames phenomenon", isVideo: false },
  { src: tumpakImage, alt: "Spectacular tiered Tumpak Sewu waterfall cascading through lush green cliffs", isVideo: false },
  { src: papumaImage, alt: "Scenic white-sand Papuma Beach with dramatic rocks and crystal clear waters", isVideo: false },
];

export const JavaTourGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <Card className="relative overflow-hidden shadow-medium">
        <div className="aspect-video bg-muted">
          <img 
            src={javaImages[selectedImage].src} 
            alt={javaImages[selectedImage].alt}
            className="w-full h-full object-cover"
          />
          {javaImages[selectedImage].isVideo && (
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
        {javaImages.map((image, index) => (
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