




import { AiOutlineX } from "react-icons/ai";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // TikTok is in FontAwesome

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const countries: { name: string; href: string }[] = [
    { name: "USA", href: "/influencer-platform" },
    { name: "India", href: "/influencer-india" },
    { name: "South Africa", href: "/south-africa" },
    { name: "Kenya", href: "/influencer-kenya" },
    { name: "Zimbabwe", href: "/zimbabwe" },
    { name: "Rwanda", href: "/rwanda" },
    { name: "Mexico", href: "/mexico" },
    { name: "Colombia", href: "/colombia" },
    { name: "Chile", href: "/chile" },
    { name: "Argentina", href: "/argentina" },
    { name: "Paraguay", href: "/paraguay" },
    { name: "Uruguay", href: "/uruguay" },
    { name: "Republica Dominicana", href: "/republica-dominicana" },
    { name: "Philippines", href: "/philippines" },
    { name: "France", href: "/france" },
    { name: "Germany", href: "/influencer-germany" },
    { name: "Ghana", href: "/ghana" },
    { name: "Brazil", href: "/influencers-in-brazil" },
    // { name: "Norway", href: "/norway" },
    { name: "Singapore", href: "/singapore" },
    // { name: "Poland", href: "/poland" },
    // { name: "Russia", href: "/russia" },
    { name: "Malaysia", href: "/malaysia" },
    // { name: "Thailand", href: "/thailand" },
    // { name: "Nigiria", href: "/nigiria" },
    // { name: "Suadi Arabia", href: "/suadi-arabia" },
    { name: "Philippines", href: "/philippines" },
    // { name: "Qatar", href: "/qatar" },
    // { name: "Kawait", href: "/kawait" },
    // { name: "UAE", href: "/uae" },
    // { name: "Bahrain", href: "/bahrain" },
    { name: "Spain", href: "/spain" },
    // { name: "Canada", href: "/canada" },
    { name: "United Kingdom", href: "/united-kingdom" },
        { name: "Lithuania", href: "/lithuania" },









  ];

  return (
    <footer
      className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-gray-800"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center text-sm space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
          <p> All rights reserved Co‑Intelligence / co-i.xyz &copy; {currentYear}.</p>
          <span className="hidden sm:inline-block border-l h-4 mx-2 border-gray-400" />
          <div className="flex space-x-4">
            {/* <a href="/allblogs" className="hover:text-gray-300">Blog</a> */}
            {/* <a href="/company" className="hover:text-gray-300">About</a> */}
            <a href="/terms" className="hover:text-gray-300">Terms</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
                    <span className="hidden sm:inline-block border-l h-4 mx-2 border-gray-400" />

        <div className="flex space-x-6">
  {/* X / Twitter */}
  {/* <a
    href="https://x.com/@numerobk"
    aria-label="X (formerly Twitter)"
    className="hover:text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AiOutlineX className="w-5 h-5" />
  </a> */}

  {/* Instagram */}




  
</div>

          <span className="hidden sm:inline-block border-l h-4 mx-2 border-gray-400" />

          {/* Popular Countries */}
          <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0 text-xs max-w-sm sm:max-w-3xl">
            {/* <span className="font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-auto">
              Popular Countries:
            </span> */}
            {/* {countries.map((country) => (
              <a
                key={country.href}
                href={country.href}
                className="hover:text-gray-300 text-xs"
              >
                {country.name}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
Footer;
