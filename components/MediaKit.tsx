// app/blog/media-kit-for-influencers/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is a Media Kit for Influencers: Boost Your Brand Deals",
  description:
    "Learn what a media kit for influencers is and how it helps creators land brand deals, affiliate campaigns, and partnerships using GrandeApp.",
  keywords: [
    "media kit for influencers",
    "influencer marketing",
    "affiliate campaigns",
    "brand partnerships",
    "GrandeApp",
  ],
  metadataBase: new URL("https://grandeapp.com"),
};

export default function MediaKitForInfluencersPage() {
  const keyword = "media kit for influencers";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 prose prose-lg">
      <h1 className="text-4xl font-bold mb-6">
        {keyword}: Boost Your Brand Deals
      </h1>

      <p className="mb-6 text-lg">
        A <strong>{keyword}</strong> is a professional portfolio that influencers
        use to showcase their audience, engagement, and past collaborations to
        brands. It’s an essential tool for landing affiliate campaigns,
        sponsored content, and long-term partnerships. Platforms like{" "}
        <a
          href="https://app.grandeapp.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          GrandeApp
        </a>{" "}
        make it easy for influencers to create, share, and manage their media kits
        while connecting with brands and campaigns.
      </p>

      <Image
        src="/images/blogs/media-kit.jpg"
        alt="Media kit for influencers"
        width={1200}
        height={630}
        className="rounded-xl shadow mb-8"
      />

      <article className="space-y-6">
        <h2>What’s Included in a Media Kit?</h2>
        <p>
          A comprehensive <strong>{keyword}</strong> typically includes:
        </p>
        <ul>
          <li>Influencer bio and niche description.</li>
          <li>Audience demographics (age, gender, location, interests).</li>
          <li>Social media stats and engagement rates.</li>
          <li>Previous brand collaborations and campaign examples.</li>
          <li>Collaboration opportunities (sponsored posts, affiliate campaigns, giveaways).</li>
          <li>Contact information or links to platforms like GrandeApp.</li>
        </ul>

        <h2>Why Media Kits Are Important</h2>
        <p>
          Brands often receive hundreds of influencer pitches. A well-crafted{" "}
          <strong>{keyword}</strong> stands out by:
        </p>
        <ul>
          <li>Demonstrating professionalism and credibility.</li>
          <li>Providing measurable metrics that brands can trust.</li>
          <li>Highlighting the influencer’s unique value and storytelling ability.</li>
          <li>Making it easy to launch affiliate campaigns and partnerships efficiently.</li>
        </ul>

        <h2>How GrandeApp Enhances Your Media Kit</h2>
        <p>
          Platforms like <a href="https://app.grandeapp.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">GrandeApp</a> help influencers create and manage their media kits while connecting with affiliate campaigns and brand partnerships. Features include:
        </p>
        <ul>
          <li>Pre-built templates for professional media kits.</li>
          <li>Integration with campaigns, so stats update automatically.</li>
          <li>Direct connections to brands for affiliate and sponsored opportunities.</li>
          <li>Tracking clicks, conversions, and payouts from your campaigns.</li>
        </ul>

        <h2>Best Practices for Influencers</h2>
        <ul>
          <li>Keep your media kit concise, clear, and visually appealing.</li>
          <li>Update metrics and past collaborations regularly.</li>
          <li>Highlight affiliate campaigns to show ROI potential for brands.</li>
          <li>Include both local and international audience insights for global campaigns.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          A <strong>{keyword}</strong> is more than a document—it’s your gateway
          to brand deals, affiliate campaigns, and long-term partnerships. Using
          platforms like{" "}
          <a
            href="https://app.grandeapp.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            GrandeApp
          </a>{" "}
          makes it easier to showcase your influence, track results, and connect
          with brands worldwide.
        </p>

        <p>
          Ready to create your media kit and start landing campaigns?{" "}
          <a
            href="https://app.grandeapp.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-700 underline"
          >
            Sign up on GrandeApp
          </a>{" "}
          today and unlock opportunities for affiliate campaigns and brand partnerships.
        </p>
      </article>
    </main>
  );
}
