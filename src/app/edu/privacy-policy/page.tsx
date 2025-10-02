import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/NavBar";
import PrivacyPolicy from "@/components/privacity-policy";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zypeer Edu - Política de Privacidade",
  description: "Zypeer - transformando o ensino e a aprendizagem",
  openGraph: {
    title: "Zypeer tecnologia - Política de Privacidade",
    description: "Zypeer - transformando o ensino e a aprendizagem",
  },
};

export default function PrivacyPolicyPage() {

  return (
    <ThemeProvider>
      <>
        <Navbar />
        <PrivacyPolicy />
        <ScrollToTop />
      </>
    </ThemeProvider>
  );
}