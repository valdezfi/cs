import Header from "components/Header";
import ApproachPage from "components/E2E";
import Footer from "components/Footer";
import HowToUseGrandeApp from "components/How-To-Use-Guide";




export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* JSON-LD Structured Data */}
      

      <Header />

      <main className="flex-1 py-8 px-4 text-gray-900 dark:text-white">
        <HowToUseGrandeApp />
      </main>

      <Footer />
    </div>
  );
}