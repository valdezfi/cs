import Header from "components/Header";
import BlogMultiCard from "components/BlogMultiPost";
import Footer from "components/Footer";

import Script from 'next/script';



export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">

<Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://numerobook.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'allblogs',
                item: 'https://numerobook.com/allblogs',
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        {/* <Hero /> */}
        <BlogMultiCard/>
      
 
        {/* <Reviews />
        <Download /> */}
      </main>
      <Footer />
    </div>
  );
}
