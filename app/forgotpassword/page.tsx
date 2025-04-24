import Header from "components/Header";
import Hero from "components/Hero";
import AmountInput from "components/BitcoinInput";
import Footer from "components/Footer";
import ForgotPasswordForm from "components/ForgotPasswordForm";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
        <ForgotPasswordForm/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
