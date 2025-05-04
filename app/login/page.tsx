import Header from "components/Header";
import Hero from "components/Hero";
import AmountInput from "components/BitcoinInput";
import Footer from "components/Footer";
import LoginForm from "components/LoginForm";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />

      <main>
        {/* <Hero /> */}
        <LoginForm/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
