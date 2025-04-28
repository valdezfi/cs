import Header from "components/Header";
import PrivacyPolicy from "components/PrivacyTerms";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        {/* <Hero /> */}
        <PrivacyPolicy/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
