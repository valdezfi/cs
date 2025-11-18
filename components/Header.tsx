"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [sellersOpen, setSellersOpen] = useState(false);
  const [buyersOpen, setBuyersOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const sellersTimeout = useRef<NodeJS.Timeout | null>(null);
  const buyersTimeout = useRef<NodeJS.Timeout | null>(null);
  const platformTimeout = useRef<NodeJS.Timeout | null>(null);
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
          <span className="text-xl font-semibold dark:text-gray-100">COagentes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 mr-2">

            <li><Link href="/" className="nav-link">Home</Link></li>

            {/* Sellers / Agents */}
            <li className="relative"
              {...handleDropdown(setSellersOpen, sellersTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Sellers & Agents
                <svg className={`w-4 h-4 transition-transform ${sellersOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {sellersOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/create-listing" className="block px-4 py-2 text-black">Create a Listing</Link></li>
                  <li><Link href="/agent-tools" className="block px-4 py-2 text-black">Agent Tools</Link></li>
                  <li><Link href="/sell" className="block px-4 py-2 text-black">Sell Your Property</Link></li>
                  <li><Link href="/areas" className="block px-4 py-2 text-black">Service Areas</Link></li>
                </ul>
              )}
            </li>

            {/* Buyers / Investors */}
            <li className="relative"
              {...handleDropdown(setBuyersOpen, buyersTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Buyers
                <svg className={`w-4 h-4 transition-transform ${buyersOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {buyersOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/buy" className="block px-4 py-2 text-black">Find Properties</Link></li>
                  <li><Link href="/invest" className="block px-4 py-2 text-black">Investing</Link></li>
                  <li><Link href="/regions" className="block px-4 py-2 text-black">Regions (LATAM / GCC / Africa)</Link></li>
                  <li><Link href="/buyer-match" className="block px-4 py-2 text-black">AI Buyer Matching</Link></li>
                </ul>
              )}
            </li>

            {/* Platform */}
            <li className="relative"
              {...handleDropdown(setPlatformOpen, platformTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Platform
                <svg className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {platformOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-md z-50 p-4">
                  <div className="mb-2 text-black font-bold">AI Real Estate Tools</div>
                  <ul className="space-y-1 text-sm text-black">
                    <li><Link href="/ai-engine" className="block px-2 py-1">AI Listing Engine</Link></li>
                    <li><Link href="/create-listing" className="block px-2 py-1">Create Listing with AI</Link></li>
                    <li><Link href="/valuation" className="block px-2 py-1">AI Property Valuation</Link></li>
                    <li><Link href="/investment" className="block px-2 py-1">AI Investment Analyzer</Link></li>
                    <li><Link href="/market" className="block px-2 py-1">Market Insights</Link></li>
                    <li><Link href="/listings" className="block px-2 py-1">Property Marketplace</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Resources */}
            <li className="relative"
              {...handleDropdown(setResourcesOpen, resourcesTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Resources
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {resourcesOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/blog" className="block px-4 py-2 text-black">Blog</Link></li>
                  <li><Link href="/guides" className="block px-4 py-2 text-black">Real Estate Guides</Link></li>
                  <li><Link href="/faq" className="block px-4 py-2 text-black">FAQ</Link></li>
                  <li><Link href="/about" className="block px-4 py-2 text-black">About COagentes</Link></li>
                </ul>
              )}
            </li>

            {/* Tools */}
            <li className="relative"
              {...handleDropdown(setToolsOpen, toolsTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                AI Tools
                <svg className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {toolsOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/tools/description" className="block px-4 py-2 text-black">AI Listing Description Generator</Link></li>
                  <li><Link href="/tools/value" className="block px-4 py-2 text-black">AI Property Value Checker</Link></li>
                  <li><Link href="/tools/roi" className="block px-4 py-2 text-black">AI ROI Calculator</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/pricing" className="nav-link">Pricing</Link></li>

            <li>
              <Link
                href="/login"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Login / Signup
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-900 dark:text-white">

            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/login" onClick={() => setMenuOpen(false)}>Login / Signup</Link></li>

            {/* Sellers */}
            <li className="mt-4 font-semibold">Sellers & Agents</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/create-listing" onClick={() => setMenuOpen(false)}>Create a Listing</Link></li>
              <li><Link href="/agent-tools" onClick={() => setMenuOpen(false)}>Agent Tools</Link></li>
              <li><Link href="/areas" onClick={() => setMenuOpen(false)}>Service Areas</Link></li>
            </ul>

            {/* Buyers */}
            <li className="mt-4 font-semibold">Buyers</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/buy" onClick={() => setMenuOpen(false)}>Find Properties</Link></li>
              <li><Link href="/buyer-match" onClick={() => setMenuOpen(false)}>AI Buyer Matching</Link></li>
              <li><Link href="/regions" onClick={() => setMenuOpen(false)}>Regions</Link></li>
            </ul>

            {/* Tools */}
            <li className="mt-4 font-semibold">AI Tools</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/tools/description" onClick={() => setMenuOpen(false)}>AI Listing Generator</Link></li>
              <li><Link href="/tools/value" onClick={() => setMenuOpen(false)}>AI Value Checker</Link></li>
            </ul>

            {/* Resources */}
            <li className="mt-4 font-semibold">Resources</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link href="/guides" onClick={() => setMenuOpen(false)}>Guides</Link></li>
            </ul>

            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
