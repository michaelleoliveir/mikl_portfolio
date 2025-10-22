import "./globals.css";
import "../styles/variables.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
