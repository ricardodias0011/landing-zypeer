import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./index.css";
export const metadata: Metadata = {
  title: "Zypeer",
  description: "Zypeer - transformando o ensino e a aprendizagem",
  openGraph: {
    title: "Zypeer tecnologia",
    description: "Zypeer - transformando o ensino e a aprendizagem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className="dark:bg-black dark:text-white flex flex-col items-center">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X4K7X0W4S7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-X4K7X0W4S7');
          `}
        </Script>
      </body>
    </html>
  );
}
