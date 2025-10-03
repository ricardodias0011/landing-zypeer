import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Features } from "@/components/Features";
import { Cta } from "@/components/Cta";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";


export default function Home() {
  return (
    <ThemeProvider>
      <>
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