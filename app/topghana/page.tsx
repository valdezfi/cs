import Header from "components/Header";
import Hero from "components/Hero";
import BuyBitcoinWithMomoPage from "components/TopGhana";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
        <BuyBitcoinWithMomoPage/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
