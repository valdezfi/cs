import Header from "components/Header";
import TangbuyCaseStudy from "components/CaseStudy";
import Footer from "components/Footer";



export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* JSON-LD Structured Data */}
      

      <Header />

      <main className="flex-1 py-8 px-4 text-gray-900 dark:text-white">
        <TangbuyCaseStudy />
      </main>

      <Footer />
    </div>
  );
}
