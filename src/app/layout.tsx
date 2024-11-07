import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Outfit doesn't look that good, I might just use Neue Helvetica
const outfitRegular = localFont({
  src: [
    {
      path: "./fonts/Outfit.woff2",
      weight: "100 400",
    },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SAFE Investments",
  description: "10X ROI on technology",
};

// Screw all of that, we're going with OG OS fonts: font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif

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
          "bg-white lg:bg-zinc-100 dark:bg-zinc-800 font-sans",
          outfitRegular.variable, 
        )}
        suppressHydrationWarning
      >
        {children}
        <Analytics /> {/* Pretty cool, wonder how it works granularly */}
        <SpeedInsights />
      </body>
    </html>
  );
}