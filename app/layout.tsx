import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigation"
import Banner from "./components/banner"
import Services from "./components/services"
import Products from "./components/products"
import Footer from "./components/footer"
import Contact from "./components/contact"
import Counter from "./components/counter"
import Faq from "./components/faq"
import Home from "./components/home"
//import FullPage from "./components/fullpage"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetShop Gh",
  description: "Trust us with you pets and all their products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>

       <Navigation />
       {/* <div className="mt-10">
       <Banner />
       </div>
       <Services />
       <Products />
       <Counter />
       <div className="mb-5 px-10">

       <Faq />
       </div>
       <Contact /> */}
     

        {children}
       <Footer />
        </body>
    </html>
 
  );
}
