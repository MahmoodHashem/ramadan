import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const FaqSection = () => {
    const faqs = [
      {
        question: "چه کسانی از روزه گرفتن معاف هستند؟",
        answer: "افراد بیمار، مسافر، سالمندان ناتوان، زنان باردار یا شیرده، و کسانی که روزه برای سلامتی‌شان ضرر دارد از روزه گرفتن معاف هستند."
      },
      {
        question: "چه چیزهایی روزه را باطل می‌کند؟",
        answer: "خوردن و آشامیدن عمدی، استفراغ عمدی، فرو بردن تمام سر در آب، رساندن غبار غلیظ به حلق، و باقی موارد که در رساله‌های عملیه ذکر شده است."
      },
      {
        question: "آیا استفاده از عطر روزه را باطل می‌کند؟",
        answer: "خیر، استفاده از عطر و بوییدن آن روزه را باطل نمی‌کند."
      },
      {
        question: "حکم مسواک زدن در حال روزه چیست؟",
        answer: "مسواک زدن در حال روزه اشکالی ندارد و حتی مستحب است، اما باید مراقب بود که خمیر دندان فرو برده نشود."
      },
      {
        question: "اگر کسی در ماه رمضان مریض شود تکلیفش چیست؟",
        answer: "اگر بیماری به حدی است که روزه برایش ضرر دارد، می‌تواند روزه نگیرد و بعداً قضای آن را به جا آورد."
      }
    ]
  
    return (
      <section className="container mx-auto px-5 py-24 relative">

        <div className="relative max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">سوالات متداول</h2>
            <p className="text-lg text-muted-foreground">پاسخ به سوالات رایج درباره ماه مبارک رمضان</p>
          </div>
  
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} >
                <AccordionTrigger className="text-right font-light text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  export default FaqSection
  