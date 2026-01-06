import { Funnel_Display, Instrument_Sans, DM_Sans } from 'next/font/google';

import { Toaster } from "@/components/library/sonner";

import './globals.css';
import "../styles/variables.css"

const funnel = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-funnel', 
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-background ${funnel.variable} ${instrument.variable} ${dmSans.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
