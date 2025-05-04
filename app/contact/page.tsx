import Header from "components/Header";
import Hero from "components/Hero";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <meta property="og:image" content="https://numerobook.com/public/images/OIG-19.jpg" />
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
