import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import { Footer, Topbar  } from "@/components";

import style from './layout.module.scss'

const getPoppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700"],
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
      <body className={`${getPoppins.variable} ${style.container}`}>
        <div className={style.main}>
          {children}
        </div>
      </body>
    </html>
  );
}
