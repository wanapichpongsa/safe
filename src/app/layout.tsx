import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Outfit doesn't look that good, I might just use Neue Helvetica
const outfitRegular = localFont({
  src: [
    {
      path: "./fonts/Outfit-Regular.woff2",
      weight: "100 400",
    },
    {
      path: "./fonts/Outfit-Regular.woff",
      weight: "100 400",
    }
  ],
  variable: "--font-outfit-regular",
});

const outfitBold = localFont({
  src: [
    {
      path: "./fonts/Outfit-Bold.woff2", 
      weight: "100 400",
    },
    {
      path: "./fonts/Outfit-Bold.woff",
      weight: "100 400",
    }
  ],
  variable: "--font-outfit-bold",
});

export const metadata: Metadata = {
  title: "SAFE Investments",
  description: "10X ROI on technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitRegular.variable} ${outfitBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
