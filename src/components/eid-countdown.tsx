import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Timer } from "lucide-react"
import { useEffect, useState } from "react"

const EidCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const toPersianNumbers = (num: number) => {
    return new Intl.NumberFormat('fa-IR').format(num)
  }
  

  useEffect(() => {
    const eidDate = new Date('2025-03-30') // Update this date each year
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = eidDate.getTime() - now.getTime()
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
        <Popover>
          <PopoverTrigger asChild>
            <button className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-105 transition-transform z-50">
              <Timer className="w-5 h-5" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto z-50 p-4" align="start">
            <div className="space-y-3 relative bg-card/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 shadow-lg z-50">
              <h3 className="text-sm font-semibold">تا عید سعید فطر</h3>
              <div className="flex gap-3 text-center">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xl font-bold">{toPersianNumbers(value)}</span>
                    <span className="text-xs text-muted-foreground">
                      {key === 'days' ? 'روز' : 
                       key === 'hours' ? 'ساعت' : 
                       key === 'minutes' ? 'دقیقه' : 'ثانیه'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
  )
}

export default EidCountdown
