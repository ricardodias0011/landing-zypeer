import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import LiabilityPolicy from "@/components/liability-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zypeer Edu - Termo de responsabilidade",
  description: "Zypeer - transformando o ensino e a aprendizagem",
  openGraph: {
    title: "Zypeer tecnologia - Termo de responsabilidade",
    description: "Zypeer - transformando o ensino e a aprendizagem",
  },
};


export default function PrivacyPolicyPage() {

  return (
    <ThemeProvider>
      <>
        <Navbar />
        <LiabilityPolicy />
        <ScrollToTop />
      </>
    </ThemeProvider>
  );
}