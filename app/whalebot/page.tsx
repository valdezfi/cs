import Header from "components/Header";
import Whaleboti from "components/Whalebotinvest";
import Footer from "components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-1 py-8"> {/* Ensures main section takes available space */}
        <Whaleboti />
        {/* <Hero />
        <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
