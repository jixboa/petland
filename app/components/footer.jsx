/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c7aTaa5SLGA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1" />
      <footer className="bg-gradient-to-r from-blue-gray-700 to-blue-gray-900 dark:bg-gray-950 py-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex items-center">
              <PawPrintIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-bold  text-white">
                Pet Shop
              </span>
            </div>
            <nav className="grid gap-2">
              <Link className="text-sm hover:underline  text-white" href="#">
                Home
              </Link>
              <Link className="text-sm hover:underline  text-white" href="#">
                Shop
              </Link>
              <Link className="text-sm hover:underline  text-white" href="#">
                About
              </Link>
              <Link className="text-sm hover:underline  text-white" href="#">
                Contact
              </Link>
            </nav>
            <div className="space-y-2">
              <p className="text-sm  text-white">
                123 Pet Street, Petville, PA 12345
              </p>
              <p className="text-sm  text-white">Phone: (123) 456-7890</p>
              <p className="text-sm  text-white">Email: info@petshop.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link aria-label="Facebook" href="#">
                <FacebookIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 " />
              </Link>
              <Link aria-label="Twitter" href="#">
                <TwitterIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </Link>
              <Link aria-label="Instagram" href="#">
                <InstagramIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
