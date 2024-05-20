"use client";

import { Button } from "@material-tailwind/react";

export default function Services() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Services for Your Furry Friends
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the wide range of services we offer to keep your pets
                happy and healthy.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#ffa500] to-[#ff6b6b] p-4 rounded-full">
                <PawPrintIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Grooming</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your pet looking their best with our professional grooming
                services.
              </p>
              <Button size="sm" variant="link">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#6b8b9e] to-[#4c6983] p-4 rounded-full">
                <DogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Veterinary Care</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our experienced veterinarians provide comprehensive care for
                your pets.
              </p>
              <Button size="sm" variant="link">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#9b59b6] to-[#8e44ad] p-4 rounded-full">
                <MenuIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Pet Supplies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Shop our wide selection of high-quality pet food, toys, and
                accessories.
              </p>
              <Button size="sm" variant="link">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DogIcon(props) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
      stroke="currentColor"
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
