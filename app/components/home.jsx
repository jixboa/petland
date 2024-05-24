import Image from "next/image";

import Banner from "./banner";
import Services from "./services";
import Products from "./products";
import Contact from "./contact";
import Counter from "./counter";
import Faq from "./faq";

export default function Home() {
  return (
    <>
      <div className="mt-10">
        <Banner />
      </div>
      <Services />
      <Products />
      <Counter />
      <div className="mb-5 px-10">
        <Faq />
      </div>
      <Contact />
    </>
  );
}
