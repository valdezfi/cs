"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [customersOpen, setCustomersOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const customersTimeout = useRef(null);
  const productsTimeout = useRef(null);
  const resourcesTimeout = useRef(null);

  const handleDropdown = (type, openSetter, timeoutRef) => ({
    onMouseEnter: () => {
      clearTimeout(timeoutRef.current);
      openSetter(true);
    },
    onMouseLeave: () => {
      timeoutRef.current = setTimeout(() => {
        openSetter(false);
      }, 100); // 5 seconds
    },
  });

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <span className="text-xl font-semibold dark:text-gray-100">grande</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Customers Dropdown */}
            <li className="relative" {...handleDropdown("customers", setCustomersOpen, customersTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Customers
                <svg
                  className={`w-4 h-4 transform transition-transform ${customersOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {customersOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md z-50">
                    <li>
                    <Link href="/brand" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Brands</Link>
                  </li>
                   <li>
                    <Link href="/agency" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Agencies</Link>
                  </li>
                    <li>
                    <Link href="/agency" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Freelancers</Link>
                  </li>
                 
                  <li>
                    <Link href="/influencer" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Influencers</Link>
                  </li>
                  <li>
                    <Link href="/ugc" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">UGC Creators</Link>
                  </li>
                  <li>
                    <Link href="/podcast" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Podcasters</Link>
                  </li>
                 
                  {/* <li>
                    <Link href="/social-managers" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">Social Media Managers</Link>
                  </li> */}
                </ul>
              )}
            </li>

            {/* Products Dropdown */}
            <li className="relative" {...handleDropdown("products", setProductsOpen, productsTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-md z-50 p-4">
                  <div className="mb-2 font-bold text-gray-900">Influencer Marketing</div>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/discover" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Discover Influencers
                      </Link>
                    </li>
                      <li>
                      <Link href="/event" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Create Influencer Event
                      </Link>
                    </li>
                    <li>
                      <Link href="/campaign" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Manage Campaigns
                      </Link>
                    </li>
                    <li>
                      <Link href="/payments" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Payments & Gifting
                      </Link>
                    </li>
                    <li>
                      <Link href="/affiliate" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Affiliate Links
                      </Link>
                    </li>
                    <li>
                      <Link href="/reporting" className="block px-2 py-1 rounded hover:bg-gray-100 text-sm text-gray-800">
                        Reporting Data
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              )}
            </li>

            {/* Resources Dropdown */}
            <li className="relative" {...handleDropdown("resources", setResourcesOpen, resourcesTimeout)}>
              <button className="nav-link flex items-center gap-1 ">
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li>
                    <Link href="/allblogs" className="block px-4 py-2 hover:bg-gray-100  text-gray-800">
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pricing & Signup */}
            <li>
              <Link href="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
              >
                Signup/Login
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/whalebot" className="nav-link" onClick={() => setMenuOpen(false)}>Whalebot</Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Signup/Login
              </Link>
            </li>
            <li className="pt-2">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
