import Header from "components/Header";
import Hero from "components/Hero";
import LowestFeeExchangePage from "components/TopUSA";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
        <LowestFeeExchangePage/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
