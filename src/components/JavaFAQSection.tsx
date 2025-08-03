import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of tours do you offer?",
    answer: "All tour packages are private and structured as all-inclusive packages. We provide personalized experiences with dedicated guides and transportation."
  },
  {
    question: "Can I customize my tour?",
    answer: "Yes, minor adjustments and \"micro-tweaks\" to the itinerary are allowed. However, major detours from the planned route are discouraged to ensure the best experience and safety."
  },
  {
    question: "How do I confirm my booking?",
    answer: "A deposit of 20% is required to confirm your booking. The remaining balance must be paid 3 days before the tour begins. If you book less than 24 hours in advance, 100% upfront payment is required."
  },
  {
    question: "What payment methods are accepted?",
    answer: "Payment can be made via cash, bank transfer, or other Wise-approved channels. We accept major credit cards, bank transfers, and cash (pre-approved)."
  },
  {
    question: "What happens if the weather is bad?",
    answer: "JVTO continuously monitors weather conditions. For safety reasons, we may adjust itineraries during extreme weather (heavy rain, thick fog). Tours typically continue in light rain. If major attractions are completely inaccessible due to weather, we'll provide alternative activities when possible."
  },
  {
    question: "Is this tour suitable for children or elderly people?",
    answer: "This tour requires good physical fitness due to early starts, hiking, and potentially challenging conditions. Children under 12 and elderly individuals with mobility issues should carefully consider their abilities. The Ijen trek is not suitable for those with respiratory conditions due to sulfur exposure."
  },
  {
    question: "Do you cater to dietary restrictions?",
    answer: "Yes, we can accommodate most dietary requirements including vegetarian, vegan, halal, and basic food allergies. Please inform us of any dietary restrictions during booking so we can arrange appropriate meals. Some remote locations may have limited options."
  },
  {
    question: "What about transportation and group size?",
    answer: "Transportation is by private air-conditioned vehicle (MPV for 1-3 guests, Toyota Hiace Van for 4-11 guests) with professional driver. For Bromo, we use private 4WD jeeps. Group sizes are typically small (2-11 people) for personalized service and safety."
  },
  {
    question: "What languages do the guides speak?",
    answer: "All our guides are experienced and speak English fluently. For groups of 2-3 guests, you'll have a driver-guide. For 4+ guests, we provide separate local guides at each main destination for more detailed explanations and cultural insights."
  },
  {
    question: "What benefits are there for large groups?",
    answer: "Group Benefits: 18+ pax: 1 person travels free of charge (FOC). 35+ pax: 2 people travel FOC. 50+ pax: 3 people travel FOC, plus a 5% discount on the total price."
  },
  {
    question: "What is your safety record?",
    answer: "The company has a 100% safety record. The team consists of dedicated and respectful local crew who provide extra care for children. Immediate assistance is provided in case of medical issues. A nurse visit can be arranged to obtain the Ijen health certificate for a fee of IDR 30,000-50,000."
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