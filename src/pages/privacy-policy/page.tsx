import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/NavBar";
import PrivacyPolicy from "@/components/privacity-policy";
import { ScrollToTop } from "@/components/ScrollToTop";

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