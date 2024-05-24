"use client";

import { Link } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@material-tailwind/react";
//import Link from "next/ink";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
          {isHomePage ? (
            <Link
              className="hover:underline hover:underline-offset-4 text-white"
              to="home"
              smooth={true}>
              Home
            </Link>
          ) : (
            <>
              <a
                onClick={(e) => {
                  router.push("/");
                }}>
                <Button variant="text" color="white">
                  Home
                </Button>
              </a>
            </>
          )}
          {isHomePage ? (
            <>
              <Link
                className="hover:underline hover:underline-offset-4  text-white"
                to="services-section"
                smooth={true}>
                Services
              </Link>
            </>
          ) : (
            <>
              <a
                onClick={(e) => {
                  router.push("/#services-section");
                }}>
                <Button variant="text" color="white">
                  SERVICES
                </Button>
              </a>
            </>
          )}
          {isHomePage ? (
            <>
              <Link
                className="hover:underline hover:underline-offset-4 text-white"
                to="shop-section"
                smooth={true}>
                Shop
              </Link>
            </>
          ) : (
            <>
              <a
                onClick={(e) => {
                  router.push("/#shop-section");
                }}>
                <Button variant="text" color="white">
                  Shop
                </Button>
              </a>
            </>
          )}
          {isHomePage ? (
            <>
              <Link
                className="hover:underline hover:underline-offset-4  text-white"
                to="contact-section"
                smooth={true}>
                Contact
              </Link>
            </>
          ) : (
            <>
              <a
                onClick={(e) => {
                  router.push("/#contact-section");
                }}>
                <Button variant="text" color="white">
                  Contact
                </Button>
              </a>
            </>
          )}
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative inline-flex items-center justify-center rounded-full bg-gray-900 p-2 text-gray-50 transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
              3
            </span>
          </button>
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

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
