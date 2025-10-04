import { Navbar } from "@/components/NavBar";
import PrivacyPolicy from "@/components/privacity-policy";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

export default function PrivacyPolicyPage() {

  return (
    <ThemeProvider>
      <>
        <title>Zypeer - Política de Privacidade</title>
        <meta name="description" content="Aprenda e ensine de forma inovadora com Zypeer, a IA que
              personaliza seu aprendizado e transforma o ensino!" />
        <Navbar />
        <PrivacyPolicy />
        <ScrollToTop />
      </>
    </ThemeProvider>
  );
}