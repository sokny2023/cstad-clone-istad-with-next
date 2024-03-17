import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/componenets/navbar/NavbarComponent";
import FooterComponent from "@/componenets/footer/FooterComponent"
import CardComponent from "@/componenets/CardComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<header className=" bg-primary container w-screen">
          <NavbarComponent></NavbarComponent>
          </header>}
        {children}
        {<footer className="mt-14">
          <FooterComponent></FooterComponent>
          </footer>}
        </body>
      
    </html>
  );
}
