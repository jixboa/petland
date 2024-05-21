"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function Banner() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-img bg-cover bg-hero-image">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-12">
          <div className="space-y-4">
            {/*  <Transition
              appear={true}
              show={true}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-10"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-10"> */}
            <Transition
              appear={true}
              show={true}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-0.1 transform-origin top left"
              enterTo="transform opacity-100 scale-1.0 transform-origin top left"
              leave="transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-1.0 transform-origin top left"
              leaveTo="transform opacity-0 scale-0.1 transform-origin top left">
              <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to Our Pet Shop
              </h1>
            </Transition>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the best products and services for your furry friends.
            </p>
            <div className="flex flex-col justify-center items-center gap-2 min-[400px]:flex-row">
              {/* <button className="inline-flex bg-yellow-700 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8">
                Get Started
              </button> */}
              <Button
                size="md"
                className="bg-yellow-700  font-bold"
                variant="filled">
                Shop Now
              </Button>
            </div>
          </div>
          <Image
            src="/images/puppy.png"
            alt="Hero Image"
            className=" mx-auto w-full rounded-xl object-cover shadow-xl"
            width="800"
            height="1000"
          />
        </div>
      </section>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L30,128C60,160,120,224,180,218.7C240,213,300,139,360,133.3C420,128,480,192,540,192C600,192,660,128,720,96C780,64,840,64,900,53.3C960,43,1020,21,1080,37.3C1140,53,1200,107,1260,122.7C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg> */}
    </>
  );
}
