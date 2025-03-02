import EssentialInfo from "./components/essential-info"
import CalenderSection from "./components/calender"
import Header from "./components/header"
import Hero from "./components/hero"
import { ThemeProvider } from "./components/theme-provider"
import PrayersSection from "./components/prayer-section"
import FaqSection from "./components/faq"

function App() {
  return (
    <ThemeProvider defaultTheme="system">
       
       <header className="w-full" >
        <Header />
        <Hero />
       </header>
        <EssentialInfo />
        <CalenderSection />
        <PrayersSection />
        <FaqSection />
      
    </ThemeProvider>
  )
}

export default App
