import { Play, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const PrayersSection = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedPrayer, setSelectedPrayer] = useState<(typeof duas)[0] | null>(
    null
  );

  const duas = [
    {
      title: "دعای افطار",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",
      translation:
        "خدایا برای تو روزه گرفتم و با روزی تو افطار کردم و بر تو توکل نمودم، به نام خداوند بخشنده مهربان، ای دارنده مغفرت گسترده مرا بیامرز",
      category: "دعاهای روزانه",
      audio: "/audio/dua-iftar.mp3",
    },

    {
      title: "دعای افطار",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",
      translation:
        "خدایا برای تو روزه گرفتم و با روزی تو افطار کردم و بر تو توکل نمودم، به نام خداوند بخشنده مهربان، ای دارنده مغفرت گسترده مرا بیامرز",
      category: "دعاهای روزانه",
      audio: "/audio/dua-iftar.mp3",
    },
    {
      title: "دعای افطار",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",
      translation:
        "خدایا برای تو روزه گرفتم و با روزی تو افطار کردم و بر تو توکل نمودم، به نام خداوند بخشنده مهربان، ای دارنده مغفرت گسترده مرا بیامرز",
      category: "دعاهای روزانه",
      audio: "/audio/dua-iftar.mp3",
    },
    {
      title: "دعای افطار",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",
      translation:
        "خدایا برای تو روزه گرفتم و با روزی تو افطار کردم و بر تو توکل نمودم، به نام خداوند بخشنده مهربان، ای دارنده مغفرت گسترده مرا بیامرز",
      category: "دعاهای روزانه",
      audio: "/audio/dua-iftar.mp3",
    },
    {
      title: "دعای افطار",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",
      translation:
        "خدایا برای تو روزه گرفتم و با روزی تو افطار کردم و بر تو توکل نمودم، به نام خداوند بخشنده مهربان، ای دارنده مغفرت گسترده مرا بیامرز",
      category: "دعاهای روزانه",
      audio: "/audio/dua-iftar.mp3",
    },
  ];

  const surahs = [
    {
      title: "سوره قدر",
      arabic:
        "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      translation: "ما آن [قرآن] را در شب قدر نازل کردیم",
      category: "سوره‌های قرآن",
      audio: "/audio/surah-qadr.mp3",
    },

    {
      title: "سوره قدر",
      arabic:
        "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      translation: "ما آن [قرآن] را در شب قدر نازل کردیم",
      category: "سوره‌های قرآن",
      audio: "/audio/surah-qadr.mp3",
    },
    {
      title: "سوره قدر",
      arabic:
        "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      translation: "ما آن [قرآن] را در شب قدر نازل کردیم",
      category: "سوره‌های قرآن",
      audio: "/audio/surah-qadr.mp3",
    },
    {
      title: "سوره قدر",
      arabic:
        "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      translation: "ما آن [قرآن] را در شب قدر نازل کردیم",
      category: "سوره‌های قرآن",
      audio: "/audio/surah-qadr.mp3",
    },
    {
      title: "سوره قدر",
      arabic:
        "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      translation: "ما آن [قرآن] را در شب قدر نازل کردیم",
      category: "سوره‌های قرآن",
      audio: "/audio/surah-qadr.mp3",
    },
  ];

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="container mx-auto px-5 py-24 relative">
      <div className="relative max-w-4xl mx-auto space-y-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">دعاهای ماه رمضان</h3>

          <Carousel
            opts={{
              align: "start",
              direction: "rtl",
            }}
          >
            <CarouselContent className="-mr-4">
              {duas.map((dua, index) => (
                <CarouselItem
                  key={index}
                  className="pr-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card rounded-2xl p-6 h-full hover:shadow-lg transition">
                    <div
                      key={index}
                      className="group bg-gradient-to-b from-background via-accent/5 to-background backdrop-blur-sm border border-primary/10 rounded-2xl p-8 relative transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                      onClick={() => setSelectedPrayer(dua)}
                    >
                      <h3 className="text-lg text-center font-semibold">
                        {dua.title}
                      </h3>

                      <div className="space-y-4 mt-6">
                        <p className="text-sm font-arabic leading-loose text-primary text-justify  tracking-wider line-clamp-6">
                          {dua.arabic}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                          <Play className="w-4 h-4" />
                          پخش صوت
                        </button>

                        <button
                          onClick={() => handleCopy(dua.arabic, index)}
                          className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {copiedId === index ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">سوره های مهم</h3>

          <Carousel
            opts={{
              align: "start",
              direction: "rtl",
            }}
          >
            <CarouselContent className="-mr-4">
              {surahs.map((surah, index) => (
                <CarouselItem
                  key={index}
                  className="pr-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card rounded-2xl p-6 h-full hover:shadow-lg transition">
                    <div
                      key={index}
                      className="group bg-gradient-to-b from-background via-accent/5 to-background backdrop-blur-sm border border-primary/10 rounded-2xl p-8 relative transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                      onClick={() => setSelectedPrayer(surah)}
                    >
                      <h3 className="text-lg text-center font-semibold">
                        {surah.title}
                      </h3>

                      <div className="space-y-4 mt-6">
                        <p className="text-sm font-arabic leading-loose text-primary text-justify  tracking-wider line-clamp-6">
                          {surah.arabic}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                          <Play className="w-4 h-4" />
                          پخش صوت
                        </button>

                        <button
                          onClick={() => handleCopy(surah.arabic, index)}
                          className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {copiedId === index ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <Dialog
        open={!!selectedPrayer}
        onOpenChange={() => setSelectedPrayer(null)}
      >
        <DialogContent className="max-w-[95vw] md:max-w-2xl p-4 md:p-6 max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold">
              {selectedPrayer?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto my-4 md:my-6 pr-2">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-arabic leading-loose text-primary/90 text-right tracking-wider">
                {selectedPrayer?.arabic}
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-right">
                {selectedPrayer?.translation}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-4 border-t">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Play className="w-5 h-5" />
                پخش صوت
              </button>

              <button
                onClick={() => handleCopy(selectedPrayer?.arabic || "", -1)}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {copiedId === -1 ? "کپی شد" : "کپی متن"}
                {copiedId === -1 ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PrayersSection;
