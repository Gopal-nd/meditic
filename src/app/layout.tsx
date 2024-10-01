import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Proviers";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

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

export const metadata: Metadata = {
  title: "Meditic",
  description: "Meditic Platform",
};

export default function RootLayout({
  children,authModal
}: Readonly<{
  children: React.ReactNode;
  authModal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
 <Providers>

<Navbar />
{authModal}
<div className='container  max-w-7xl mx-auto h-full pt-12'>
  {children}
  </div>
  <Toaster  />
</Providers>
      </body>
    </html>
  );
}
