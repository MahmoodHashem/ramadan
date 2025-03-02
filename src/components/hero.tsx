const Hero = () => {
    return (
      <section className="container mx-auto p-4 flex flex-col-reverse md:flex-row items-center  justify-between py-16 gap-8 mt-6 ">
           
           <div className="absolute inset-0 z-0 max-w-[200px]">
            <img src="/pattern.png" className="rotate-x-2 opacity-40" alt="pattern" />
           </div>

           <div className="absolute inset-0 opacity-20 bg-[url('/bg-pattern.png')] bg-repeat mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />

        <div className="flex-1 z-10 space-y-6 text-center  md:text-right">
          <h1 className="text-3xl  lg:text-4xl  font-bold leading-tight">
            ماه مبارک رمضان
            <span className="block text-primary mt-2">ماه نزول قرآن</span>
          </h1>
          
          <p className="md:text-xl text-muted-foreground">
            فرصتی برای تزکیه نفس، عبادت و نزدیکی به خداوند
          </p>
  
          <div className="flex justify-center md:justify-start items-center gap-4">
            <button className="px-5 text-sm py-2 sm:px-6 sm:text-lg md:py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition">
              تقویم رمضان
            </button>
            <button className="px-5 text-sm py-2 sm:px-6 sm:text-lg md:py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
  
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full   rounded-lg">
            <img src="/hero.png" className="rounded-lg" alt="hero imag" />
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
  