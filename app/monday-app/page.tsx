import Header from "components/Header";
import FeedbackPage from "components/MondayFeedback"; // ⚠️ create or swap to Paraguay content
import Footer from "components/Footer";
import { Metadata } from "next";
import Script from "next/script";



export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
     
      <Header />
      <main className="flex-1 py-8 px-4">
        <FeedbackPage /> {/* ⚠️ should be Paraguay-specific content */}
      </main>
      <Footer />
    </div>
  );
}
