const SourcesSection = () => {
  const sources = [
    {
      category: "کتب حدیث",
      references: [
        {
          id: 1,
          text: "صحیح بخاری، محمد بن اسماعیل بخاری، جلد ۱، کتاب ۲، حدیث ۳۷",
          usedIn: ["hadith-fasting", "hadith-intention"],
        },
        {
          id: 3,
          text:"صحیح مسلم، مسلم بن حجاج نیشابوری، جلد ۲، کتاب ۱۳، حدیث شماره ۱۰۷۹",
          usedIn: ["hadith-rewards"],
        },
      ],
    },
    {
      category: "منابع وب",
      references: [
        {
          id: 2,
          text: "پارس قرآن - ترجمه فارسی قرآن کریم - سوره بقره - آیه ۱۸۵",
          url: "http://www.parsquran.com/data/show.php?sura=2&ayat=185&user=far&lang=far",
          accessDate: "۱۵ اسفند ۱۴۰۳",
        },
        {
          id: 4,
          text: "پارس قرآن - ترجمه فارسی قرآن کریم - سوره قدر آیه ۴",
          url: "http://www.parsquran.com/data/show.php?sura=97&ayat=1&user=far&lang=far&tran=1",
          accessDate: "۱۵ اسفند ۱۴۰۳",
                },
      ],
    },
  ];

  return (
    <section className="container mx-auto px-5 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">منابع و ماخذ</h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="space-y-10">
          {sources.map((section, index) => (
            <div key={index} className="relative">
              <h3 className="text-lg font-semibold mb-4 bg-background pr-4 inline-block relative z-10">
                {section.category}
              </h3>
              <div className="absolute top-3 right-0 w-full h-px bg-primary/10" />

              <ul className="space-y-3 text-right">
                {section.references.map((ref) => (
                  <li
                    key={ref.id}
                    className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="inline-block px-2 py-0.5 bg-primary/5 text-primary text-sm rounded">
                      [{ref.id}]
                    </span>
                    <span>
                      {"url" in ref ? (
                        <a
                         id={`${ref.id}`}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline mr-2"
                        >
                          {ref.text}
                          
                        </a>
                      ) : (
                        <span className="text-muted-foreground">
                          {ref.text}
                        </span>
                      )}
                      {"url" in ref && (
                        <span className="text-sm">
                          (تاریخ دسترسی: {ref.accessDate})
                        </span>
                      )}
                    </span>
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default SourcesSection;
