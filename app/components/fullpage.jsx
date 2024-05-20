"use client";
import Link from "next/link";
/* import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion" */

import { Textarea, Input, Button } from "@material-tailwind/react";
import Image from "next/image";

export default function FullPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <PawPrintIcon className="h-8 w-8 text-green-500 mr-2" />
            <span className="text-2xl font-bold">Pet Shop</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              Home
            </Link>
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              Services
            </Link>
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              Products
            </Link>
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              About Us
            </Link>
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              FAQ
            </Link>
            <Link
              className="text-gray-600 hover:text-green-500 transition-colors"
              href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section
        className="bg-gradient-to-r from-green-500 to-teal-500 py-20 animate-fadeIn"
        id="home">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Our Pet Shop
            </h1>
            <p className="text-white">
              Discover the best products and services for your furry friends.
            </p>
            <Button className="px-6 py-3" color="green" variant="filled">
              Shop Now
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="Hero Image"
              className="rounded-lg shadow-lg animate-fadeInRight"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 animate-fadeIn" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 bg-green-500 rounded-lg p-6 shadow-lg animate-fadeInLeft">
              <BrushIcon className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">Grooming</h3>
                <p className="text-white">
                  Professional grooming services for your pets.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-teal-500 rounded-lg p-6 shadow-lg animate-fadeInUp">
              <DogIcon className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Veterinary Care
                </h3>
                <p className="text-white">
                  Comprehensive veterinary services for your pets.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-indigo-500 rounded-lg p-6 shadow-lg animate-fadeInRight">
              <CircuitBoardIcon className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">Boarding</h3>
                <p className="text-white">
                  Safe and comfortable boarding for your pets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gradient-to-r from-yellow-500 to-orange-500 py-20 animate-fadeIn"
        id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeInLeft">
              <MenuIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pet Food</h3>
              <p className="text-gray-600">
                High-quality pet food for all your furry friends.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-500 animate-counter">
                  123
                </span>
                <Button className="px-4 py-2" color="green" variant="filled">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeInUp">
              <ToyBrickIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pet Toys</h3>
              <p className="text-gray-600">
                Engaging and durable toys for your pets.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-500 animate-counter">
                  456
                </span>
                <Button className="px-4 py-2" color="green" variant="filled">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeInRight">
              <AccessibilityIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pet Accessories
              </h3>
              <p className="text-gray-600">
                Stylish and functional accessories for your pets.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-500 animate-counter">
                  789
                </span>
                <Button className="px-4 py-2" color="green" variant="filled">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 animate-fadeIn" id="about">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-full md:w-1/2">
            <Image
              alt="About Image"
              className="rounded-lg shadow-lg animate-fadeInLeft"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              About Our Pet Shop
            </h2>
            <p className="text-gray-600">
              We are a family-owned pet shop dedicated to providing the best
              products and services for your furry friends. Our mission is to
              ensure the health and happiness of all pets that come through our
              doors.
            </p>
            <p className="text-gray-600">
              With years of experience in the pet industry, our team of experts
              is committed to helping you find the perfect solutions for your
              pets needs. Visit us today and let us help you and your pet live a
              happier, healthier life.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-20 animate-fadeIn" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <Accordion collapsible type="single">
            <AccordionItem value="question1">
              <AccordionTrigger className="text-xl font-bold text-white">
                What types of pets do you cater to?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white">
                  We cater to a wide variety of pets, including dogs, cats, small mammals, birds, and reptiles. Our team
                  of experts is knowledgeable about the specific needs of each type of pet.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question2">
              <AccordionTrigger className="text-xl font-bold text-white">
                Do you offer delivery services?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white">
                  Yes, we do offer delivery services for our customers. You can place your order online or over the
                  phone, and we will have it delivered to your doorstep within a few business days.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question3">
              <AccordionTrigger className="text-xl font-bold text-white">What is your return policy?</AccordionTrigger>
              <AccordionContent>
                <p className="text-white">
                  We have a 30-day return policy for all of our products. If you're not satisfied with your purchase,
                  you can return it for a full refund or exchange. Please note that some restrictions may apply.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}
      <section className="bg-white py-20 animate-fadeIn" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <Input id="name" label="Enter your name" type="text" />
            </div>
            <div>
              <Input id="email" label="Enter your email" type="email" />
            </div>
            <div>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                color="white"
              />
            </div>
            <Button
              className="px-6 py-3"
              color="green"
              type="submit"
              variant="filled">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-12 relative overflow-hidden animate-fadeIn">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <PawPrintIcon className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold">Pet Shop</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>123 Main Street, Anytown USA</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@petshop.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  className="text-green-500 hover:text-green-400 transition-colors"
                  href="#">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-green-500 hover:text-green-400 transition-colors"
                  href="#">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link
                  className="text-green-500 hover:text-green-400 transition-colors"
                  href="#">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent" />
      </footer>
    </div>
  );
}

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CircuitBoardIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
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
      stroke="white"
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

function FacebookIcon(props) {
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
      stroke="white"
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

function ToyBrickIcon(props) {
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
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
