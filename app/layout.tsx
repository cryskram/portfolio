import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono, Montserrat } from "next/font/google";

// const ubuntu = Ubuntu_Mono({ weight: "400", subsets: ["greek"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vageesh",
  description: "My Portfolio :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-slate-900 text-mWhite p-6`}>
        {children}
      </body>
    </html>
  );
}
