import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon Heaven - Luxury Boutique Hotel",
  description:
    "Experience luxury and comfort at Horizon Heaven Hotel. Book your perfect stay with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* <Header /> */}
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
