const CalendarSection = () => {
  // // const toPersianNumbers = (num: number) => {
  // //   return new Intl.NumberFormat('fa-IR').format(num)
  // // }

  //   const prayerTimes = [
  //     { name: "اذان صبح", time: "04:30" },
  //     { name: "طلوع آفتاب", time: "06:15" },
  //     { name: "اذان ظهر", time: "13:00" },
  //     { name: "غروب آفتاب", time: "19:45" },
  //     { name: "اذان مغرب", time: "20:00" },
  //   ]

  return (
    <section id="calendar" className="container mx-auto px-5 py-24 relative">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
       */}
      <div className="relative max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-4xl font-bold">
            تقویم ماه مبارک رمضان
          </h2>
          <p className="text-lg text-muted-foreground">
            اوقات شرعی به افق هرات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prayer Times */}
          <div className=" rounded-2xl p-6 bg-card space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-center">
              اوقات شرعی امروز
            </h3>
            <iframe
              className="w-full h-[358px] rounded-xl"
              scrolling="no"
              src="https://www.islamicfinder.org/prayer-widget/"
            >
             
            </iframe>
          </div>

          {/* Countdown */}
          <div className="bg-card rounded-2xl p-6 space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-center">
              تا افطار امروز
            </h3>
            
              <iframe
                id="h2gFrame"
                title="islamic-calendar"
                className="w-full h-[358px] rounded-xl"
                
                scrolling="no"
                src="https://www.islamicfinder.org/islamic-calendar/widgetGregorian?type=Hijri"
              >
               
              </iframe>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalendarSection;
