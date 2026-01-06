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

  const customersTimeout = useRef<NodeJS.Timeout | null>(null);
  const productsTimeout = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeout = useRef<NodeJS.Timeout | null>(null);

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
          <span className="text-xl font-semibold tracking-tight text-green-900 dark:text-green-100">
            COfuncion
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Cannabis Operations */}
            <li className="relative" {...handleDropdown(setProductsOpen, productsTimeout)}>
              <button className="nav-link flex items-center gap-1">
Customers                <svg
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
                <ul className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-md z-50 p-4 space-y-1">
                  <li><Link href="/dispensaries" className="block px-2 py-1 text-black text-sm">Dispensaries</Link></li>
                  <li><Link href="/cultivators" className="block px-2 py-1 text-black text-sm">Cultivators</Link></li>
                  <li><Link href="/processors" className="block px-2 py-1 text-black text-sm">Processors / Manufacturers</Link></li>
                  <li><Link href="/compliance" className="block px-2 py-1 text-black text-sm">Compliance Consultants</Link></li>
                  <li><Link href="/waste-management" className="block px-2 py-1 text-black text-sm">Cannabis Waste Management</Link></li>
                </ul>
              )}
            </li>

            {/* Resources */}
            <li className="relative" {...handleDropdown(setResourcesOpen, resourcesTimeout)}>
              <button className="nav-link flex items-center gap-1">
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
                  <li><Link href="/allblogs" className="block px-4 py-2 text-black">Blog / Guides</Link></li>
                  <li><Link href="/faq" className="block px-4 py-2 text-black">FAQ</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/pricing" className="nav-link">Pricing</Link></li>
            <li>
              <Link
                href="/signup"
                className="bg-green-900 text-white dark:bg-green-100 dark:text-green-900 px-5 py-2 rounded-md text-base font-semibold hover:bg-green-800 dark:hover:bg-green-200 transition duration-300"
              >
                Signup / Login
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-900 dark:text-green-100"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-green-50 dark:bg-green-900 border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-green-900 dark:text-green-100">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/signup" onClick={() => setMenuOpen(false)}>Signup / Login</Link></li>

            {/* Cannabis Operations */}
            <li>
              <span className="mt-4 font-semibold block">Customers</span>
              <ul className="pl-4 space-y-1">
                <li><Link href="/dispensaries" onClick={() => setMenuOpen(false)}>Dispensaries</Link></li>
                <li><Link href="/cultivators" onClick={() => setMenuOpen(false)}>Cultivators</Link></li>
                <li><Link href="/processors" onClick={() => setMenuOpen(false)}>Processors / Manufacturers</Link></li>
                <li><Link href="/compliance" onClick={() => setMenuOpen(false)}>Compliance Consultants</Link></li>
                <li><Link href="/waste-management" onClick={() => setMenuOpen(false)}>Cannabis Waste Management</Link></li>
              </ul>
            </li>

            {/* Resources */}
            <li>
              <span className="mt-4 font-semibold block">Resources</span>
              <ul className="pl-4 space-y-1">
                <li><Link href="/allblogs" onClick={() => setMenuOpen(false)}>Blog / Guides</Link></li>
                <li><Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
              </ul>
            </li>

            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
