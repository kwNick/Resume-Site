import type { Metadata } from "next";
import "./globals.css";
import NameHeader from "../components/NameHeader";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/ThemeChanger";
import Resume from "../components/Resume";
import { geistMono, geistSans } from "@/resources/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="cursor-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased duration-500 w-screen min-h-screen overflow-x-hidden`}
      >

        <ThemeProvider>
          <div className="fixed top-[1%] right-[3%] flex items-center justify-around gap-x-2">
            <ThemeChanger />
            <Resume />
          </div>
          <NameHeader />
          <Navigation />

          {children}

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
