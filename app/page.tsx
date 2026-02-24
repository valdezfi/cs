import Header from "components/Header";
import Footer from "components/Footer";
import ProductExplanation from "components/Help";




export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />

      <main className="flex flex-col">
    
        <ProductExplanation />
      
      </main>

      <Footer />
    </div>
  );
}
