import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import  faqs  from "@/assets/data/faq";

const FaqSection = () => {
 

  return (
    <section id="faq" className="container mx-auto px-5 py-24 relative">
      <div className="relative max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">سوالات متداول</h2>
          <p className="text-lg text-muted-foreground">
            پاسخ به سوالات رایج درباره ماه مبارک رمضان
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right font-light text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
