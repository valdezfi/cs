"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const brandsTimeout = useRef<NodeJS.Timeout | null>(null);
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
          <span className="text-xl font-semibold dark:text-gray-100">COfuncion</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 mr-2">
            <li><Link href="/" className="nav-link">Home</Link></li>

            {/* Brands / Advertisers */}
            <li className="relative" {...handleDropdown(setBrandsOpen, brandsTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Brands & Agencies
                <svg className={`w-4 h-4 transition-transform ${brandsOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {brandsOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/create-campaign" className="block px-4 py-2 text-black">Create Campaign</Link></li>
                  <li><Link href="/agency-tools" className="block px-4 py-2 text-black">Agency Tools</Link></li>
                  <li><Link href="/marketer-dashboard" className="block px-4 py-2 text-black">Marketer Dashboard</Link></li>
                </ul>
              )}
            </li>

            {/* Platform */}
            <li className="relative" {...handleDropdown(setPlatformOpen, platformTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Platform
                <svg className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              {platformOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/campaign-insights" className="block px-2 py-1">AI Campaign Insights</Link></li>
                  <li><Link href="/ugc-integration" className="block px-2 py-1">UGC Integration</Link></li>
                  <li><Link href="/ad-optimization" className="block px-2 py-1">Ad Optimization Tools</Link></li>
                </ul>
              )}
            </li>

            {/* Tools */}
            <li className="relative" {...handleDropdown(setToolsOpen, toolsTimeout)}>
              <button className="nav-link flex items-center gap-1">
                AI Tools
                <svg className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              {toolsOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/tools/creative" className="block px-4 py-2 text-black">AI Creative Generator</Link></li>
                  <li><Link href="/tools/roi" className="block px-4 py-2 text-black">AI ROI Calculator</Link></li>
                </ul>
              )}
            </li>

            {/* Resources */}
            <li className="relative" {...handleDropdown(setResourcesOpen, resourcesTimeout)}>
              <button className="nav-link flex items-center gap-1">
                Resources
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              {resourcesOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md z-50 p-4">
                  <li><Link href="/blog" className="block px-4 py-2 text-black">Blog</Link></li>
                  <li><Link href="/guides" className="block px-4 py-2 text-black">Guides</Link></li>
                  <li><Link href="/faq" className="block px-4 py-2 text-black">FAQ</Link></li>
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

            {/* Brands / Agencies */}
            <li className="mt-4 font-semibold">Brands & Agencies</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/create-campaign" onClick={() => setMenuOpen(false)}>Create Campaign</Link></li>
              <li><Link href="/agency-tools" onClick={() => setMenuOpen(false)}>Agency Tools</Link></li>
              <li><Link href="/marketer-dashboard" onClick={() => setMenuOpen(false)}>Marketer Dashboard</Link></li>
            </ul>

            {/* AI Tools */}
            <li className="mt-4 font-semibold">AI Tools</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/tools/creative" onClick={() => setMenuOpen(false)}>AI Creative Generator</Link></li>
              <li><Link href="/tools/roi" onClick={() => setMenuOpen(false)}>AI ROI Calculator</Link></li>
            </ul>

            {/* Resources */}
            <li className="mt-4 font-semibold">Resources</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link href="/guides" onClick={() => setMenuOpen(false)}>Guides</Link></li>
              <li><Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
            </ul>

            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
