import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of tours do you offer?",
    answer: "All tour packages are private and structured as all-inclusive packages. We specialize in East Java's natural wonders including volcanic craters, waterfalls, and pristine beaches."
  },
  {
    question: "Can I customize my tour?",
    answer: "Yes, minor adjustments to the itinerary are allowed based on your preferences and group needs. Please discuss customization options during booking."
  },
  {
    question: "What happens if the weather is bad?",
    answer: "Java Volcano Tour Operator continuously monitors weather conditions. Tours may be adjusted for safety, but most activities can proceed with proper preparation and equipment."
  },
  {
    question: "Is the tour suitable for children?",
    answer: "The tour has a minimum age requirement of 12 years for the Ijen crater hike due to volcanic gases and challenging terrain. Other activities are family-friendly."
  },
  {
    question: "What fitness level is required?",
    answer: "Moderate fitness level is required. The tour involves early morning hikes, volcanic terrain, and some steep inclines. Not recommended for those with heart conditions."
  },
  {
    question: "Are meals included?",
    answer: "Yes, the package includes 4x breakfast, 2x lunch, and 1x dinner. Additional meals and snacks can be purchased during the tour."
  },
  {
    question: "What should I bring?",
    answer: "Warm jacket for early mornings, comfortable hiking boots, personal water bottle, camera, and personal medications. Trekking equipment is provided."
  },
  {
    question: "How do I get to the meeting point?",
    answer: "Pickup is available from Juanda International Airport (SUB) or Surabaya city hotels. Best arrival time is before noon on Day 1."
  }
];

export const JavaFAQSection = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};