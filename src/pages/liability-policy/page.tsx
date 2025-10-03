import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import LiabilityPolicy from "@/components/liability-policy";


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