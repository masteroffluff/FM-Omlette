import type { Metadata } from "next";
import localFont from "next/font/local";
//import head from "next/head";
import "./globals.css";

const outfit = localFont({
  src: "./fonts/outfit/Outfit-VariableFont_wght.ttf",
  variable: "--outfit",
  weight: "100 900",
});

const youngSerif = localFont({
  src: "./fonts/young-serif/YoungSerif-Regular.ttf",
  variable: "--young-serif",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frontend Mentor",
  description: "Simple Omelette Recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon-32x32.png" sizes="any" />
      </head>
      <body
        className={`${outfit.variable} ${youngSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
