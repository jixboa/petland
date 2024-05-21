"use client";

import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-gray-800 shadow-sm dark:bg-gray-950 dark:shadow-none">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          to="home"
          smooth={true}>
          <PawPrintIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            className="hover:underline hover:underline-offset-4 text-white"
            to="home"
            smooth={true}>
            Home
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4 text-white"
            to="shop-section"
            smooth={true}>
            Shop
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4  text-white"
            to="services-section"
            smooth={true}>
            Services
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4  text-white"
            to="contact-section"
            smooth={true}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="xs:hidden inline-flex h-9 items-center justify-center rounded-md bg-yellow-700 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            to="#"
            smooth={true}>
            Login
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            to="#"
            smooth={true}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}
