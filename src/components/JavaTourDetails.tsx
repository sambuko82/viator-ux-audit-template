import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Ticket, Users, Globe, MapPin, CheckCircle, X, Calendar, Bed } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const JavaTourDetails = () => {
  return (
    <div className="space-y-6">
      {/* Quick Overview */}
      <Card className="shadow-soft">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-3">Quick Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Embark on an exciting 5-day journey through East Java's most iconic landscapes. This adventure is perfect for nature enthusiasts and explorers eager to witness breathtaking sights including the mystical blue flames of Ijen Crater, the spectacular sunrise over Mount Bromo, the magnificent Tumpak Sewu waterfall, and the pristine beauty of Papuma Beach.
          </p>
        </CardContent>
      </Card>

      {/* Key Info Bar */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">5 Days 4 Nights</p>
                <p className="text-xs text-muted-foreground">Duration</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Free Rescheduling</p>
                <p className="text-xs text-muted-foreground">{'>'}48hrs notice</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Private Group</p>
                <p className="text-xs text-muted-foreground">All group sizes</p>
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
              "Iconic sunrise viewpoint and hike to Bromo crater across sea of sand",
              "Scenic white-sand beach, dramatic rocks, sunrise/sunset spot",
              "Spectacular tiered waterfall with a trek to the base and panoramic view",
              "Enjoy comfortable accommodations in authentic local homestays",
              "Benefit from private transportation throughout the journey",
              "Guided by experienced English-speaking guides"
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
                  "Private Transport with driver (fuel, tolls, parking)",
                  "Experienced English-speaking guides",
                  "Daily mineral water & complimentary travel T-shirt",
                  "4 nights quality hotel accommodation with daily breakfast",
                  "All Entrance Fees & Permits",
                  "4x Breakfast, 2x Lunch, 1x Dinner",
                  "Private 4WD Jeep for Mount Bromo sunrise tour",
                  "Medical Check-up for Ijen hike",
                  "Trekking Equipment (gas masks, poles, headlamps)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
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
                  "International/Domestic Air Tickets",
                  "Indonesian VISA",
                  "Travel Insurance",
                  "Meals Not Stated in Itinerary",
                  "Personal Expenses & Tips",
                  "Optional Activities (Bromo horse ride, Ijen trolley)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
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
          <CardTitle>What To Expect (Itinerary)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                day: "Day 1",
                title: "Arrival in Surabaya and Journey to Bondowoso",
                description: "Your adventure begins with a pickup at Surabaya Airport and a 5-hour drive to Bondowoso. Check in at Riverside Homestay for an authentic local experience surrounded by nature."
              },
              {
                day: "Day 2", 
                title: "Ijen Crater Adventure and Papuma Beach Sunset",
                description: "Your day starts early at midnight with a drive to Paltuding, the base of Ijen Crater. Witness the mystical blue flames and turquoise acidic lake. Later, relax at the scenic Papuma Beach for a beautiful sunset."
              },
              {
                day: "Day 3",
                title: "Tumpak Sewu Waterfall and Journey to Bromo",
                description: "Our journey begins early at 4:00 AM as we check out and head to Tumpak Sewu Waterfall. Experience the spectacular tiered waterfall with a trek to the base. Then travel to Bromo area for the night."
              },
              {
                day: "Day 4",
                title: "Bromo Sunrise Adventure and Return to Surabaya",
                description: "Prepare for an early morning adventure starting at 2:00 AM for stargazing and sunrise at Mount Bromo. Take a private 4WD jeep across the sea of sand and hike to the crater rim. Return to Surabaya for the night."
              },
              {
                day: "Day 5",
                title: "Departure from Surabaya",
                description: "After breakfast, you will be transferred to Juanda International Airport for your flight back home, carrying unforgettable memories of East Java's natural wonders."
              }
            ].map((day, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="w-0.5 h-16 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{day.day}: {day.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accommodation Details */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            Accommodation Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { day: "Day 1", name: "Riverside Homestay (Bondowoso)", type: "Nature Retreat Homestay" },
              { day: "Day 2", name: "Doho Homestay (Jember)", type: "Garden Style Family Homestay" },
              { day: "Day 3", name: "Joglo Kecombrang Bromo (Bromo Area)", type: "Javanese-Style Mountain Lodge" },
              { day: "Day 4", name: "Holiday Inn Express Surabaya Centerpoint", type: "Modern City Hotel" }
            ].map((accommodation, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="font-medium text-primary">{accommodation.day}</div>
                <div className="font-medium">{accommodation.name}</div>
                <div className="text-sm text-muted-foreground">{accommodation.type}</div>
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
                Pickup is offered from Juanda International Airport (SUB) or your hotel in the Surabaya city area. 
                Best arrival time is before noon on Day 1. You will be greeted by a guide holding a sign with your name.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Meeting Point</h4>
              <p className="text-muted-foreground">
                Juanda International Airport (SUB) - Arrival Terminal
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="requirements">
              <AccordionTrigger>Mandatory Requirements for Ijen</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li>• Medical check-up is required before the Ijen hike</li>
                  <li>• Gas masks will be provided for safety</li>
                  <li>• Minimum age requirement: 12 years old</li>
                  <li>• Good physical condition required for volcanic terrain</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="packing">
              <AccordionTrigger>Recommended Packing List</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li>• Warm jacket for early morning temperatures</li>
                  <li>• Comfortable hiking boots with good grip</li>
                  <li>• Headlamp or flashlight (provided but backup recommended)</li>
                  <li>• Personal water bottle and snacks</li>
                  <li>• Camera with extra batteries</li>
                  <li>• Personal medications</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="physicality">
              <AccordionTrigger>Physical Requirements</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Moderate fitness level required. Involves early morning treks to volcanic craters, 
                  navigating slippery paths at waterfalls, and some steep inclines. Not recommended 
                  for those with heart conditions or mobility issues.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Cancellation Policy */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm"><strong>No refund</strong> will be issued for cancellations within 48 hours of the tour start or for no-shows.</p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm">Late payments may result in booking cancellation without refund.</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm"><strong>Free rescheduling</strong> available with more than 48 hours notice.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};