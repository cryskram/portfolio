import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono, Aclonica } from "next/font/google";

const ubuntu = Ubuntu_Mono({ weight: "400", subsets: ["greek"] });

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
      <body className={`${ubuntu.className} text-slate-900 bg-background p-6`}>
        {children}
      </body>
    </html>
  );
}
