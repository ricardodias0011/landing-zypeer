import { Navbar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import LiabilityPolicy from "@/components/liability-policy";
import { ThemeProvider } from "@/components/theme-provider";


export default function LiabilityPolicyPage() {

  return (
    <ThemeProvider>
      <>
        <title>Zypeer - Termo de responsabilidade</title>
        <meta name="description" content="Aprenda e ensine de forma inovadora com Zypeer, a IA que
              personaliza seu aprendizado e transforma o ensino!" />
        <Navbar />
        <LiabilityPolicy />
        <ScrollToTop />
      </>
    </ThemeProvider>
  );
}