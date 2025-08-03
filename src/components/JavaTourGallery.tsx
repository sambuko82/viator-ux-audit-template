import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Play } from "lucide-react";

const javaImages = [
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/ijen-bromo-tumpak-sewu-malang-sightseeing-tour-1676526893742/1687320433_IJEN31.webp", 
    alt: "Stunning sunrise over Mount Bromo with panoramic views of the Tengger Caldera and surrounding mountains",
    caption: "Sunrise View Over Mount Bromo"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/bromo11.webp", 
    alt: "Hikers enjoying the incredible views of Ijen Crater's blue lake",
    caption: "Hikers enjoying the incredible views of Ijen Crater's blue lake"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/bromo13.webp", 
    alt: "Young travelers having fun exploring Tumpak Sewu waterfall area",
    caption: "Exploring Tumpak Sewu waterfall and enjoying every moment"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/papuma.webp", 
    alt: "Papuma Beach with white sand and crystal clear waters",
    caption: "Papuma Beach"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/papuma3.webp", 
    alt: "Scenic Papuma Beach coastline with dramatic rocks",
    caption: "Papuma Beach"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/tumpaksewu6.webp", 
    alt: "Spectacular Tumpak Sewu Waterfall cascading down lush cliffs",
    caption: "Tumpak Sewu Waterfall"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/1687447787_WhatsApp Image 2019-05-12 at 2.webp", 
    alt: "Sunrise view over Ijen Crater",
    caption: "Sunrise over Ijen Crater"
  },
  { 
    src: "https://javavolcano-touroperator.com/assets/img/destinations/fb3.jpg", 
    alt: "Majestic Tumpak Sewu waterfall surrounded by tropical vegetation",
    caption: "Tumpak Sewu"
  }
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
          {false && (
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
              {false && (
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