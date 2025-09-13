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
  const [toolsOpen, setToolsOpen] = useState(false);

  // timeouts for hover delay
  const customersTimeout = useRef<NodeJS.Timeout | null>(null);
  const productsTimeout = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeout = useRef<NodeJS.Timeout | null>(null);
  const toolsTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleDropdown = (
    openSetter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => ({
    onMouseEnter: () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      openSetter(true);
    },
    onMouseLeave: () => {
      timeoutRef.current = setTimeout(() => {
        openSetter(false);
      }, 100);
    },
  });

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <span className="text-xl font-semibold dark:text-gray-100">grande</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li><Link href="/" className="nav-link">Home</Link></li>

            {/* Customers */}
            <li className="relative" {...handleDropdown(setCustomersOpen, customersTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Customers
                <svg className={`w-4 h-4 transition-transform ${customersOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {customersOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/brand" className="block px-4 py-2 text-black">Brands</Link></li>
                  <li><Link href="/agency" className="block px-4 py-2 text-black">Agencies</Link></li>
                  <li><Link href="/agency" className="block px-4 py-2 text-black">Freelancers</Link></li>
                  <li><Link href="/influencer" className="block px-4 py-2 text-black">Influencers</Link></li>
                  <li><Link href="/ugc" className="block px-4 py-2 text-black">UGC Creators</Link></li>
                  <li><Link href="/podcast" className="block px-4 py-2 text-black">Podcasters</Link></li>
                </ul>
              )}
            </li>

            {/* Products */}
            <li className="relative" {...handleDropdown(setProductsOpen, productsTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Products
                <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-md z-50 p-4">
                  <div className="mb-2  text-black font-bold">Influencer Marketing</div>
                  <ul className="space-y-1">
                    <li><Link href="/discover" className="block px-2 py-1 text-black text-sm">Discover Influencers</Link></li>
                    <li><Link href="/campaign" className="block px-2 py-1 text-black text-sm">Manage Campaigns</Link></li>
                    <li><Link href="/payments" className="block px-2 py-1 text-black text-sm">Payments & Gifting</Link></li>
                    <li><Link href="/affiliate" className="block px-2 py-1 text-black text-sm">Affiliate Links</Link></li>
                    <li><Link href="/reporting" className="block px-2 py-1 text-black text-sm">Reporting Data</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Resources */}
            <li className="relative" {...handleDropdown(setResourcesOpen, resourcesTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Resources
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/allblogs" className="block px-4 py-2 text-black">Blog</Link></li>
                </ul>
              )}
            </li>

            {/* Free Tools */}
            <li className="relative" {...handleDropdown(setToolsOpen, toolsTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Free Tools
                <svg className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {toolsOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/free-tools" className="block px-4 py-2 text-black">AI</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/pricing" className="nav-link">Pricing</Link></li>
            <li>
              <Link
                href="https://app.grandeapp.com/signin"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
              >
                Signup/Login
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-900 dark:text-white">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="https://app.grandeapp.com/signin" onClick={() => setMenuOpen(false)}>Signup/Login</Link></li>

            {/* Mobile Dropdowns (basic) */}
            <li className="mt-4 font-semibold">Customers</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/brand" onClick={() => setMenuOpen(false)}>Brands</Link></li>
              <li><Link href="/agency" onClick={() => setMenuOpen(false)}>Agencies</Link></li>
              <li><Link href="/agency" onClick={() => setMenuOpen(false)}>Freelancers</Link></li>
              <li><Link href="/influencer" onClick={() => setMenuOpen(false)}>Influencers</Link></li>
              <li><Link href="/ugc" onClick={() => setMenuOpen(false)}>UGC Creators</Link></li>
              <li><Link href="/podcast" onClick={() => setMenuOpen(false)}>Podcasters</Link></li>
            </ul>

            <li className="mt-4 font-semibold">Products</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/discover" onClick={() => setMenuOpen(false)}>Discover Influencers</Link></li>
              {/* <li><Link href="/event" onClick={() => setMenuOpen(false)}>Create Influencer Event</Link></li> */}
              <li><Link href="/campaign" onClick={() => setMenuOpen(false)}>Manage Campaigns</Link></li>
              <li><Link href="/payments" onClick={() => setMenuOpen(false)}>Payments & Gifting</Link></li>
              <li><Link href="/affiliate" onClick={() => setMenuOpen(false)}>Affiliate Links</Link></li>
              <li><Link href="/reporting" onClick={() => setMenuOpen(false)}>Reporting Data</Link></li>
            </ul>

              <li className="mt-4 font-semibold">Free Tools</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/free-tools" onClick={() => setMenuOpen(false)}>AI</Link></li>
              {/* <li><Link href="/event" onClick={() => setMenuOpen(false)}>Create Influencer Event</Link></li> */}
           
            </ul>

            <li className="mt-4 font-semibold">Resources</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/allblogs" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            </ul>

            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
