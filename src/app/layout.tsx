import { Footer, Navbar } from "@/components/layouts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-photo-view/dist/react-photo-view.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anucha Rampeungnit",
  description: "Anucha Rampeungnit's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-hidden`}>
        <div className=' w-full h-full overflow-auto relative '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
