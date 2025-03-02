const SourcesSection = () => {
  const sources = [
    {
      category: "کتب حدیث",
      references: [
        {
          id: 1,
          text: "صحیح بخاری، محمد بن اسماعیل بخاری، جلد ۳، ص ۱۲۸-۱۳۰، حدیث ۱۹۰۳",
          usedIn: ["hadith-fasting", "hadith-intention"],
        },
        {
          id: 2,
          text: "صحیح مسلم، مسلم بن حجاج، باب الصیام، حدیث ۱۱۵۱",
          usedIn: ["hadith-rewards"],
        },
      ],
    },
    {
      category: "تفاسیر قرآن",
      references: [
        {
          id: 3,
          text: "تفسیر نمونه، آیت‌الله مکارم شیرازی، جلد ۲، ص ۲۴۵-۲۴۷",
          usedIn: ["surah-baqarah-183"],
        },
      ],
    },
    {
      category: "منابع وب",
      references: [
        {
          id: 8,
          text: "IslamWeb - Ramadan Fasting Rules",
          url: "https://www.islamweb.net/en/article/135339/",
          accessDate: "۱۵ اسفند ۱۴۰۲",
        },
        {
          id: 9,
          text: "Islamic Finder - Prayer Times API",
          url: "https://www.islamicfinder.org/",
          accessDate: "۱۰ اسفند ۱۴۰۲",
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

                        {
                            ref.url ? (
                                <a
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
                            )
                        }
                        {ref.url && (
                          <span className="text-sm">
                            (تاریخ دسترسی: {ref.accessDate})
                          </span>
                        )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            برای مشاهده منبع هر مطلب، به شماره‌های مرجع در متن [۱]، [۲] و...
            مراجعه کنید
          </p>
        </div>
      </div>
    </section>
  );
};

export default SourcesSection;
