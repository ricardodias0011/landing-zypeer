import { Navbar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import LiabilityPolicy from "@/components/liability-policy";
import { ThemeProvider } from "@/components/theme-provider";


export default function LiabilityPolicyPage() {

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