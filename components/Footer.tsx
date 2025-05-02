import {
  AiOutlineX,

} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center text-sm space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
          <p>&copy; {currentYear} numerobook. All rights reserved 2025.</p>
          <span className="hidden sm:inline-block border-l h-4 mx-2 border-gray-400" />
          <div className="flex space-x-4">
          <a href="/allblogs" className="hover:text-gray-300">
            Blog
            </a>
            <a href="/cryptocalculator" className="hover:text-gray-300">
              Crypto Calculator
            </a>
            <a href="/terms" className="hover:text-gray-300">
              Terms of Use
            </a>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
          
        
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
          <div className="flex space-x-4">
            {/* <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <AiOutlineFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <AiOutlineLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <AiOutlineInstagram className="w-5 h-5" />
            </a> */}
            <a href="https://x.com/@numerobk" aria-label="X (formerly Twitter)" className="hover:text-gray-300">
              <AiOutlineX className="w-5 h-5" />
            </a>
            {/* <a href="#" aria-label="GitHub" className="hover:text-gray-300">
              <AiOutlineGithub className="w-5 h-5" />
            </a> */}
          </div>
          <span className="hidden sm:inline-block border-l h-4 mx-2 border-gray-400" />
          <div className="flex space-x-3 mt-2 sm:mt-0">
            <span className="text-xs">Top Countries:</span>
            <a href="/usa" className="hover:text-gray-300 text-xs">
              USA
            </a>
            <a href="/ghana" className="hover:text-gray-300 text-xs">
              Ghana
            </a>
            {/* <a href="/india" className="hover:text-gray-300 text-xs">
              India
            </a>
            <a href="/india" className="hover:text-gray-300 text-xs">
              Argintina
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
