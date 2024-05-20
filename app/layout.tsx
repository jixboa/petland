import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from "@material-tailwind/react";
import Navigation from "./components/navigation";
import NewComponent from "./components/newCom"
import Banner from "./components/banner"
import Services from "./components/services"
import Products from "./components/products"
import Footer from "./components/footer"
import Contact from "./components/contact"
import Counter from "./components/counter"
import FullPage from "./components/fullpage"


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
      {/*  <Navigation /> */}
       <NewComponent />
       <Banner />
       <Services />
       <Products />
       <Counter />
       <Contact />
       <Footer />
    {/*    <FullPage /> */}
        {children}</body>
    </html>
 
  );
}
