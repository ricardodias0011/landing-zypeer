import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { Pricing } from "@/components/Pricing";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { ThemeProvider } from "@/components/theme-provider";


export default function Home() {
  return (
    <ThemeProvider>
      <>
        <title>Zypeer - Edu</title>
        <meta name="description" content="Aprenda e ensine de forma inovadora com Zypeer, a IA que
              personaliza seu aprendizado e transforma o ensino!" />
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <Cta />
        <Pricing />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </>
    </ThemeProvider>
  )
}