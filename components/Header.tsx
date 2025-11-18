"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [employersOpen, setEmployersOpen] = useState(false);
  const [professionalsOpen, setProfessionalsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const employersTimeout = useRef<NodeJS.Timeout | null>(null);
  const professionalsTimeout = useRef<NodeJS.Timeout | null>(null);
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
          <span className="text-xl font-semibold dark:text-gray-100">Cohlth</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 mr-2">

            <li><Link href="/" className="nav-link">Home</Link></li>

            {/* Employers */}
            <li className="relative"
              {...handleDropdown(setEmployersOpen, employersTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Employers
                <svg className={`w-4 h-4 transition-transform ${employersOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {employersOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/hospital" className="block px-4 py-2 text-black">Hospitals</Link></li>
                  <li><Link href="/clinics" className="block px-4 py-2 text-black">Clinics</Link></li>
                  <li><Link href="/recruiters" className="block px-4 py-2 text-black">Recruiters</Link></li>
                  <li><Link href="/groups" className="block px-4 py-2 text-black">Medical Groups</Link></li>
                </ul>
              )}
            </li>

            {/* Professionals */}
            <li className="relative"
              {...handleDropdown(setProfessionalsOpen, professionalsTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Professionals
                <svg className={`w-4 h-4 transition-transform ${professionalsOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {professionalsOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md z-50">
                  <li><Link href="/apply/doctor" className="block px-4 py-2 text-black">Doctors</Link></li>
                  <li><Link href="/apply/nurse" className="block px-4 py-2 text-black">Nurses</Link></li>
                  <li><Link href="/apply/specialists" className="block px-4 py-2 text-black">Specialists</Link></li>
                  <li><Link href="/apply/therapists" className="block px-4 py-2 text-black">Therapists</Link></li>
                  <li><Link href="/apply/administrative" className="block px-4 py-2 text-black">Admin Staff</Link></li>
                </ul>
              )}
            </li>

            {/* Products */}
            <li className="relative"
              {...handleDropdown(setProductsOpen, productsTimeout)}
            >
              <button className="nav-link flex items-center gap-1">
                Platform
                <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-md z-50 p-4">
                  <div className="mb-2 text-black font-bold">AI Recruiting</div>
                  <ul className="space-y-1 text-sm text-black">
                    <li><Link href="/ai-engine" className="block px-2 py-1">AI Recruiting Engine</Link></li>
                    <li><Link href="/post-job" className="block px-2 py-1">Post a Job</Link></li>
                    <li><Link href="/candidate-matching" className="block px-2 py-1">AI Candidate Matching</Link></li>
                    <li><Link href="/screening" className="block px-2 py-1">AI Pre-Screening</Link></li>
                    <li><Link href="/scheduling" className="block px-2 py-1">AI Interview Scheduling</Link></li>
                    <li><Link href="/jobs" className="block px-2 py-1">Job Board</Link></li>
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
                  <li><Link href="/guides" className="block px-4 py-2 text-black">Hiring Guides</Link></li>
                  <li><Link href="/faq" className="block px-4 py-2 text-black">FAQ</Link></li>
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
                  <li><Link href="/free-tools" className="block px-4 py-2 text-black">AI Resume Scanner</Link></li>
                  <li><Link href="/free-tools/job-description" className="block px-4 py-2 text-black">AI Job Description Generator</Link></li>
                  <li><Link href="/free-tools/salary" className="block px-4 py-2 text-black">Salary Benchmarking</Link></li>
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

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-900 dark:text-white">

            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/login" onClick={() => setMenuOpen(false)}>Login / Signup</Link></li>

            {/* Employers */}
            <li className="mt-4 font-semibold">Employers</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/hospital" onClick={() => setMenuOpen(false)}>Hospitals</Link></li>
              <li><Link href="/clinics" onClick={() => setMenuOpen(false)}>Clinics</Link></li>
              <li><Link href="/recruiters" onClick={() => setMenuOpen(false)}>Recruiters</Link></li>
              <li><Link href="/groups" onClick={() => setMenuOpen(false)}>Medical Groups</Link></li>
            </ul>

            {/* Professionals */}
            <li className="mt-4 font-semibold">Professionals</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/apply/doctor" onClick={() => setMenuOpen(false)}>Doctors</Link></li>
              <li><Link href="/apply/nurse" onClick={() => setMenuOpen(false)}>Nurses</Link></li>
              <li><Link href="/apply/specialists" onClick={() => setMenuOpen(false)}>Specialists</Link></li>
              <li><Link href="/apply/therapists" onClick={() => setMenuOpen(false)}>Therapists</Link></li>
            </ul>

            {/* Tools */}
            <li className="mt-4 font-semibold">AI Tools</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/free-tools" onClick={() => setMenuOpen(false)}>AI Resume Scanner</Link></li>
              <li><Link href="/free-tools/job-description" onClick={() => setMenuOpen(false)}>AI Job Description Generator</Link></li>
            </ul>

            {/* Resources */}
            <li className="mt-4 font-semibold">Resources</li>
            <ul className="pl-4 space-y-1">
              <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link href="/guides" onClick={() => setMenuOpen(false)}>Hiring Guides</Link></li>
            </ul>

            <li className="pt-4"><ThemeSwitch /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
