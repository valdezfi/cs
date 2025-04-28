import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";

import Accordion from "components/Accordion";

import MexicoB from "components/Mexicobuy";
import Indiab from "components/IndiaBuy";
import Argentinabuynow from "components/Argentinabuy";
import UBuy from "components/Uruguaybuy";
import USAb from "components/USAbuy";
import GHbuy from "components/GhanaBuy";


import Nigeriab from "components/Nigeriabuy";

export default function Page() {
  return (

    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        <USAb />
        <Indiab />
        <Argentinabuynow/>

        <MexicoB />
<UBuy/>

<Nigeriab />
<GHbuy/>
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
  Numerobook
</h2>
<p className="text-xl font-light">
  Numerobook is designed to make crypto easy, fast, and accessible for everyone. 
</p>

            </div>
          }
        />
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
