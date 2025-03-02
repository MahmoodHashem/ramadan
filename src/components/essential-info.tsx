const EssentialInfo = () => {
    return (
      <section className="container mx-auto px-5 py-12 md:py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-primary/5 hidden lg:block" />
        
        {/* Content wrapper */}
        <div className="relative max-w-4xl mx-auto space-y-12 md:space-y-24 px-4 md:px-0">
          {/* Introduction */}
          <article className="">
              <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 border-r-4 border-primary pr-6">
                ماه مبارک رمضان چیست؟
              </h2>
              <div className="prose prose-lg prose-primary max-w-none text-right space-y-6">
                <p className="text-sm text-justify  md:text-lg leading-relaxed">
                  رمضان نهمین ماه از تقویم قمری و ماه نزول قرآن است. این ماه مبارک، فرصتی ارزشمند برای مسلمانان جهت تزکیه نفس، عبادت و نزدیکی به خداوند متعال است.
                </p>
                <p className="text-sm text-justify md:text-lg leading-relaxed">
                  در این ماه، مسلمانان با روزه‌داری، تلاوت قرآن و انجام اعمال عبادی، به تقویت ایمان و تقوای خود می‌پردازند.
                </p>
              </div>
          

          </article>
  
          {/* Benefits */}
          <div className=" py-6 md:py-12 rounded-2xl">
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
  
          {/* Rules and Conditions */}
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
          </div>
        </div>
      </section>
    )
  }
  
  export default EssentialInfo
  