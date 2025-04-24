 import Header from "components/Header";
// import Hero from "components/Hero";
// import AmountInput from "components/BitcoinInput";
import SignupForm from "components/SignupForm";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
        <SignupForm 
 /> 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
