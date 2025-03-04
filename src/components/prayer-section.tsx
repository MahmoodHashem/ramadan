import { Play, Pause, Copy, Check, CircleDashed } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

import surahs from "@/assets/data/surahs";
import duas from "@/assets/data/duas";

const PrayersSection = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedPrayer, setSelectedPrayer] = useState<(typeof duas)[0] | null>(
    null
  );

  const [playingDuaId, setPlayingDuaId] = useState<number | null>(null);
  const [playingSurahId, setPlayingSurahId] = useState<number | null>(null);
  const [duaAudioElements, setDuaAudioElements] = useState<{
    [key: number]: HTMLAudioElement;
  }>({});
  const [surahAudioElements, setSurahAudioElements] = useState<{
    [key: number]: HTMLAudioElement;
  }>({});

  const toPersianNumbers = (num: number) => {
    return new Intl.NumberFormat("fa-IR").format(num);
  };

  useEffect(() => {
    // Initialize duas audio
    const duaElements = duas.reduce((acc, dua, index) => {
      const audio = new Audio(dua.audio);
      audio.onended = () => setPlayingDuaId(null);
      return { ...acc, [index]: audio };
    }, {});

    // Initialize surahs audio
    const surahElements = surahs.reduce((acc, surah, index) => {
      const audio = new Audio(surah.audio);
      audio.onended = () => setPlayingSurahId(null);
      return { ...acc, [index]: audio };
    }, {});

    setDuaAudioElements(duaElements);
    setSurahAudioElements(surahElements);

    return () => {
      Object.values(duaElements).forEach((audio) => {
        if (audio instanceof HTMLAudioElement) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      Object.values(surahElements).forEach((audio) => {
        if (audio instanceof HTMLAudioElement) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  const handleDuaPlay = (index: number) => {
    const audio = duaAudioElements[index];

    if (playingDuaId === index) {
      audio.pause();
      setPlayingDuaId(null);
    } else {
      if (playingDuaId !== null) {
        duaAudioElements[playingDuaId].pause();
        duaAudioElements[playingDuaId].currentTime = 0;
      }
      audio.play();
      setPlayingDuaId(index);
    }
  };

  // Handle surah audio
  const handleSurahPlay = (index: number) => {
    const audio = surahAudioElements[index];

    console.log(index);

    if (playingSurahId === index) {
      audio.pause();
      setPlayingSurahId(null);
    } else {
      if (playingSurahId !== null) {
        surahAudioElements[playingSurahId].pause();
        surahAudioElements[playingSurahId].currentTime = 0;
      }
      audio.play();
      setPlayingSurahId(index);
    }
  };

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // "اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ، يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِي",

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
                        <p className="text-sm font-neirizi leading-loose text-primary text-justify  tracking-wider line-clamp-6">
                          {dua.arabic?.map((item, index) => (
                            <>
                              <span key={index} className="text-primary">
                                {item.arabic}
                              </span>
                            </>
                          ))}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <button className="flex items-center gap-2 text-sm text-card-foreground cursor-pointer hover:text-primary/80 transition-colors">
                          <Play className="w-4 h-4" />
                          پخش صوت
                        </button>

                        <button
                          onClick={() =>
                            handleCopy(dua.arabic.join("{"), index)
                          }
                          className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
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
                      className="group bg-gradient-to-b from-background via-accent/5 to-background backdrop-blur-sm border border-primary/10 rounded-2xl p-8 relative transform transition-all hover:-translate-y-1 "
                      onClick={() =>
                        setSelectedPrayer({
                          ...surah,
                          arabic: surah.arabic.map((ayah) => ({
                            ...ayah,
                            arabic: ayah.ayah,
                          })),
                        })
                      }
                    >
                      <h3 className="text-lg text-center font-semibold">
                        {surah.title}
                      </h3>

                      <div className="space-y-4 mt-6">
                        <p className="text-sm text-justify md:text-base font-neirizi leading-loose text-primary/90 tracking-wider line-clamp-5">
                          {surah.arabic.map((ayah, index) => (
                            <span key={index} className=" relative group">
                              {ayah.ayah}
                              <span className="inline-flex items-center justify-center mx-1 group">
                                <span className="relative flex items-center justify-center w-8 h-8">
                                  <span className="absolute inset-0 bg-primary/5 rounded-full transform group-hover:scale-110 transition-transform" />

                                  <CircleDashed className="w-7 h-7 text-primary/80 absolute top-0" />
                                  <span className="text-xs font-bold text-primary/70 relative z-10">
                                    {toPersianNumbers(ayah.number)}
                                  </span>
                                </span>
                              </span>
                            </span>
                          ))}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <button className="flex items-center gap-2 text-sm text-card-foreground  cursor-pointer hover:text-primary/80 transition-colors">
                          <Play className="w-4 h-4" />
                          پخش صوت
                        </button>

                        <button
                          onClick={() =>
                            handleCopy(
                              surah.arabic.map((ayah) => ayah.ayah).join(" "),
                              index
                            )
                          }
                          className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
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
        <DialogContent className="max-w-[95vw] md:max-w-2xl p-6 max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold">
              {selectedPrayer?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 custom-scrollbar overflow-y-auto my-4 md:my-6 ">
            <div className="space-y-4">
              <p className="text-base md:text-lg font-neirizi leading-10  text-primary/90 text-justify tracking-wider">
                {selectedPrayer?.arabic.map((ayah, index) => (
                  <span key={index} className=" relative group">
                    {ayah.arabic}
                    <span className="inline-flex items-center justify-center mx-1 group">
                      <span className="relative flex items-center justify-center w-8 h-8">
                        <span className="absolute inset-0 bg-primary/5 rounded-full transform group-hover:scale-110 transition-transform" />

                        <CircleDashed className="w-7 h-7 text-primary/80 absolute top-0" />
                        <span className="text-xs font-bold text-primary/70 relative z-10">
                          {toPersianNumbers(ayah.number)}
                        </span>
                      </span>
                    </span>
                  </span>
                ))}
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-right">
                {selectedPrayer?.translation}
              </p>
            </div>

            <div className=" sticky z-50 bottom-0 flex-shrink-0 flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-4 mt-4 bg-background border-t">
              <Button
                variant={"ghost"}
                onClick={() => {
                  if (selectedPrayer && selectedPrayer.category === "surah") {
                    handleSurahPlay(selectedPrayer.id);
                  } else if (selectedPrayer) {
                    handleDuaPlay(selectedPrayer.id);
                  }
                }}
              >
                {(selectedPrayer?.category === "dua"
                  ? playingDuaId
                  : playingSurahId) === selectedPrayer?.id ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}

                {selectedPrayer?.category === "dua" ? "پخش دعا" : "پخش سوره"}
              </Button>

              <Button
                variant={"ghost"}
                onClick={() =>
                  handleCopy(
                    selectedPrayer?.arabic
                      ?.map((item) => item.arabic)
                      .join(" ") || "",
                    -1
                  )
                }
              >
                {copiedId === -1 ? "کپی شد" : "کپی متن"}
                {copiedId === -1 ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PrayersSection;
