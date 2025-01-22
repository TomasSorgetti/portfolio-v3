import type { Metadata } from "next";
import fontLocale from "next/font/local";
import "../styles/globals.css";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const BaiJamjuree = fontLocale({
  src: [
    {
      path: "./fonts/BaiJamjuree-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/BaiJamjuree-Medium.ttf",
      weight: "500",
    },
  ],
});

const Manrope = fontLocale({
  src: [
    {
      path: "./fonts/Manrope-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tomás Sorgetti - Portfolio",
  description: "Web Designer and Full stack web developer - React / Node",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BaiJamjuree.className} ${Manrope.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
