import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="system">
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-background">
          <p>
            سلام دوستان امید که جور و صحتمند باشید
          </p>

          <article>
            این یک مقاله است که می‌توانید در آن متنی بنویسید.
          </article>

        <ThemeToggle />
        </div>
       
    </ThemeProvider>
  )
}

export default App
