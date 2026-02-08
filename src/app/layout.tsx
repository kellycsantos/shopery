import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import { Footer } from "./components";

const getPoppins = Poppins({
  weight: ["100","300","400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins-mono",
}) 

export const metadata: Metadata = {
  title: "Shopery",
  description: "Super market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getPoppins.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
