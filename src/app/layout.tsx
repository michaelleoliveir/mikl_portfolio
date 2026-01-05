import "./globals.css";
import "../styles/variables.css"

import { Toaster } from "@/components/library/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background scroll-smooth">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
