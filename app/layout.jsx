import { Outfit } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import  Footer  from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sylvester Akrong",
  description: "A portfolio website about Sylvester Akrong to showcase his works and acheivement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute = 'class' defaultTheme = 'light'>
          <Header/>
            {children}
            <Analytics />
            <SpeedInsights />
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
