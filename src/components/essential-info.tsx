const EssentialInfo = () => {
  const essentialInfo = [
    {
      title: "تعریف رمضان",
      content: [
        {
          type: "text",
          content: ' رمضان در لغت از "رمضاء" به معناى شدت حرارت گرفته شده و به معناى سوزانیدن مى باشد، زیرا در این ماه گناهان انسان بخشیده مى شود. پیامبر اکرم (ص) مى فرماید: '
        },
        {
          type: "hadith",
          arabic: "إِنَّمَا سُمِّيَ الرَّمَضَانُ لِأَنَّهُ يُرْمِضُ الذُّنُوبَ",
          translation: "ماه رمضان به این نام خوانده شده است، زیرا گناهان را مى‏سوزاند",
          narrator: "پیامبر اکرم (ص)",
          source: "صحیح بخاری",
          reference: 1
        },
        {
          type: "text",
          content: "رمضان نام یکى از ماه‏های قمرى و تنها ماهى است که نامش در قرآن کریم آمده است. همچنین یکی از چهار ماهى است که خداوند جنگ را در آن حرام کرده است (مگر در حالت دفاعی). در این ماه کتاب‏های آسمانى مانند قرآن کریم، انجیل، تورات، صحف و زبور نازل شده‌اند."
        },
        {
          type: "hadith",
          arabic: "ماه رجب، ماه خداست؛ ماه شعبان، ماه من است و ماه رمضان، ماه امت من است",
          translation: "",
          narrator: "پیامبر اکرم (ص)",
          source: "صحیح مسلم",
          reference: 2
        }
      ]
    },
    {
      title: "فضایل ماه رمضان",
      content: [
        {
          type: "text",
          content: "ماه مبارک رمضان به دلیل نزول قرآن کریم و ویژگی‌های منحصر‌به‌فردش، برترین ماه در میان ماه‌های قمری است. قرآن کریم می‌فرماید:"
        },
        {
          type: "ayah",
          arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ",
          translation: "ماه رمضان، ماهی که قرآن در آن نازل شده است، [کتابی که مایه] هدایت مردم است",
          source: "سوره بقره، آیه ۱۸۵",
          reference: 3
        },
        {
          type: "hadith",
          arabic: "ماه خدا با برکت، رحمت و مغفرت به شما روی آورده است. روزهایش برترین روزها، شب‌هایش برترین شب‌ها و ساعاتش برترین ساعات هستند",
          translation: "",
          narrator: "پیامبر اکرم (ص)",
          source: "نهج الفصاحه",
          reference: 4
        }
      ]
    }
  ]
  

  return (
    <section
      id="essential"
      className="container mx-auto px-5 py-12 md:py-24 relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-primary/5 hidden lg:block" />

      {/* Content wrapper */}
      <div className="relative max-w-4xl mx-auto space-y-12 md:space-y-24 px-4 md:px-0">
        {/* Introduction */}
        {essentialInfo.map((info, index) => (
          <article key={index}>
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 border-r-4 border-primary pr-6">
              {info.title}
            </h2>
            <div className="prose prose-lg prose-primary max-w-none text-right space-y-2">
              {info.content.map((item, itemIndex) => {
                if (item.type === "text") {
                  return (
                    <p
                      key={itemIndex}
                      className="text-sm text-justify md:text-lg leading-relaxed"
                    >
                      {item.content}
                    </p>
                  );
                }

                if (item.type === "ayah") {
                  return (
                    <div key={itemIndex} className=" mr-6 relative bg-primary/5 rounded-lg border border-primary/10">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-primary/10 rounded-r-lg" />
                      <div className="pr-6 py-1">
                        <p className="text-xl font-arabic leading-loose text-primary  mb-3">
                          ﴿ {item.arabic} ﴾
                        </p>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.translation}
                        </p>
                
                        <div className="flex items-center gap-2 text-xs text-primary/80">
                          <span>{item.source}</span>
                          <sup>[{item.reference}]</sup>
                        </div>
                      </div>
                    </div>
                  )
                }
                
                if (item.type === "hadith") {
                  return (
                    <div key={itemIndex} className="bg-accent/5 rounded-lg border border-accent/10 mr-6  relative">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 to-accent/10 rounded-r-lg" />
                      <div className="pr-6 py-1">
                        
                        <p className="text-lg font-arabic leading-loose mb-2">
                          " {item.arabic} "
                        </p>
                        
                        <p className="text-sm text-muted-foreground">
                          {item.translation}
                        </p>
                      </div>
                    </div>
                  )
                }
                
                
                
              })}
            </div>
          </article>
        ))}
        {/* Benefits */}
        {/* <div className=" py-6 md:py-12 rounded-2xl">
            <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
              برکات و فضیلت‌های ماه رمضان
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[
                "تقویت ایمان و معنویت",
                "پاکسازی روح و جسم",
                "افزایش صبر و تقوا",
                "تقویت اراده و خودسازی"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-background p-4 md:p-6 rounded-lg">
                  <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary shrink-0" />
                  <span className="text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-xl md:text-4xl font-bold text-center">احکام و شرایط روزه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="space-y-4 p-6 md:p-8 bg-primary/5 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold">شرایط وجوب روزه</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  بلوغ، عقل، قدرت و توانایی روزه گرفتن، مقیم بودن و سلامتی از جمله شرایط واجب شدن روزه است.
                </p>
              </div>
              <div className="space-y-4 p-6 md:p-8 bg-primary/5 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold">مبطلات روزه</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  خوردن و آشامیدن، رساندن غبار غلیظ به حلق، فرو بردن تمام سر در آب و باقی مبطلات که در رساله‌های عملیه ذکر شده است.
                </p>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default EssentialInfo;
