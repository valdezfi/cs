import Head from "next/head";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>About Us | Grande</title>
        <meta
          name="description"
          content="Learn more about Grande, the creator ad platform empowering brands and creators to launch powerful campaigns together."
        />
        <meta
          name="keywords"
          content="Grande, creator ad platform, influencer marketing, brand partnerships, creator campaigns"
        />
      </Head>

      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

          <section className="space-y-8 text-lg">
            <p className="text-center font-semibold text-xl">
              Creating Opportunities, One Campaign at a Time
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>
                Grande is a dynamic creator ad platform that bridges the gap between brands and creators, making it easier than ever to produce impactful campaigns. Our vision is to revolutionize digital advertising by empowering creators to showcase their talent while helping brands achieve exceptional results through authentic, engaging content.
              </p>
              <p>
                We solve the challenge of connecting the right creators with brands, streamlining campaign management, and ensuring mutually beneficial partnerships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Our Journey</h2>
              <p>
                Grande was founded on the belief that every creator deserves a platform to shine—and every brand deserves access to innovative content. What started as a simple idea has evolved into a robust platform trusted by brands and creators across the globe.
              </p>
              <p>
                From simplifying collaborations to building tools that enhance campaign performance, our journey has been guided by passion, innovation, and a drive to lead the creator economy forward.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Mission and Values</h2>
              <p className="font-semibold">Our Mission:</p>
              <p>
                To empower creators and brands to build meaningful connections through innovative advertising solutions that drive real results.
              </p>
              <p className="font-semibold mt-4">Our Values:</p>
              <ul className="list-disc list-inside">
                <li><strong>Collaboration:</strong> Fostering partnerships rooted in mutual growth.</li>
                <li><strong>Creativity:</strong> Celebrating innovation and original content.</li>
                <li><strong>Efficiency:</strong> Streamlining processes for high-impact execution.</li>
                <li><strong>Integrity:</strong> Operating with transparency and fairness.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside">
                <li><strong>Tailored Campaign Solutions:</strong> Personalized tools for brands and creators.</li>
                <li><strong>Seamless Management:</strong> We handle everything from concept to execution.</li>
                <li><strong>Diverse Talent Pool:</strong> Access to creators across platforms and niches.</li>
                <li><strong>Performance-Driven Results:</strong> Maximize reach, engagement, and ROI.</li>
              </ul>
              <p className="mt-2">
                When you choose Grande, you're choosing innovation, reliability, and a partner committed to your success.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
              <p>
                Our team includes industry experts, creative strategists, and client success professionals—all united by a shared passion for redefining digital advertising through creators.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Let’s Create Something Extraordinary Together</h2>
              <p>
                Are you ready to transform your campaigns and elevate your brand? Join Grande today and experience the power of creator-driven advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
              <p>Email: <a href="mailto:info@grandeapp.com" className="text-blue-500 hover:underline">info@grandeapp.com</a></p>
              <p>Website: <Link href="https://grandeapp.com" className="text-blue-500 hover:underline">grandeapp.com</Link></p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
