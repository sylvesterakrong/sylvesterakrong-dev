import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sylvester Akrong",
  description: "This is the website for Sylvester Akrong to showcase his works and acheivement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute = 'class' defaultTheme = 'light'>
          <Header/>
            {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
