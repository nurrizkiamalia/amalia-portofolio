import type { Metadata } from "next";
import { DM_Mono, DM_Serif_Display, Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsiveHeader from "@/components/ResponsiveHeader";

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300","400","500"],
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: ["400"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Amalia Portofolio's",
  description: "Welcome to my space!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} ${dmSerif.variable} ${montserrat.variable} bg-dspLightGrayBg antialiased px-5 md:px-10 lg:px-20 text-dspBlack font-dmMono`}
      >
        <div className="border-x-2 border-dashed border-black relative">
          <div id="header">
            <Header />
          </div>
          <div className="w-full flex justify-center">
            <ResponsiveHeader />
          </div>
          {children}
          <div id="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
