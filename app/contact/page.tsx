import Header from "components/Header";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <meta property="og:image" content="https://grandeapp.com/public/images/logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
      <main>
        {/* <Hero /> */}
        <ContactForm/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
