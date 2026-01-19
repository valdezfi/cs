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
        {/*
        <Link href="/" aria-label="Home">
          <span className="text-xl font-semibold tracking-tight text-green-900 dark:text-green-100">
            COfuncion
          </span>
        </Link>
        */}
        <span className="text-xl font-semibold tracking-tight text-green-900 dark:text-green-100">
          Co‑Intelligence
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              {/* <Link href="/" className="nav-link">Home</Link> */}
              <span className="nav-link">Home</span>
            </li>

            {/* Customers / Products dropdown */}
           
            {/* Resources dropdown */}
          

            {/* <Link href="/pricing" className="nav-link">Pricing</Link> */}

            <li>
              {/*
              <Link
                href="/signup"
                className="bg-green-900 text-white dark:bg-green-100 dark:text-green-900 px-5 py-2 rounded-md text-base font-semibold hover:bg-green-800 dark:hover:bg-green-200 transition duration-300"
              >
                Signup / Login
              </Link>
              */}
              {/* <span className="bg-green-900 text-white dark:bg-green-100 dark:text-green-900 px-5 py-2 rounded-md text-base font-semibold">
                Signup / Login
              </span> */}
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
            {/* <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li> */}
            <li><span onClick={() => setMenuOpen(false)}>Home</span></li>
            {/* <li><Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li> */}
           
            {/* Customers */}
          

            {/* Resources */}
           
            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
