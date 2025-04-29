"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react"; // Optional: clean mobile icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <span className="text-xl font-semibold dark:text-gray-100">numerobook</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="/whalebot" className="nav-link">Whalebot</Link>
            </li>
            {/* <li>
              <Link href="/contact" className="nav-link">About</Link>
            </li> */}
            {/* <li>
              <Link href="/allblogs" className="nav-link">Blog</Link>
            </li> */}
            
            {/* <li>
              <Link href="/login" className="nav-link">Login</Link>
            </li> */}
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

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/whalebot" className="nav-link" onClick={() => setMenuOpen(false)}>Whalebot</Link>
            </li>
            {/* <li>
              <Link href="/allblogs" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li> */}
            {/* <li>
              <Link href="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
            </li> */}
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
