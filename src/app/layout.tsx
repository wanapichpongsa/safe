import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";

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
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={clsx(
          "h-full antialiased font-display",
          "bg-white lg:bg-zinc-100 dark:bg-zinc-800",
          outfitRegular.variable, 
          outfitBold.variable, 
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
