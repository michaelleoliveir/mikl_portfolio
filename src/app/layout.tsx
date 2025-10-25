import "./globals.css";
import "../styles/variables.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black px-15">
        {children}
      </body>
    </html>
  );
}
