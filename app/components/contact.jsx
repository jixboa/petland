"use client";

import { Textarea, Button, Input } from "@material-tailwind/react";

export default function Contact() {
  return (
    <>
      <section id="contact-section" className="bg-blue-gray-600 py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div className="">
              <Input label="Full name" color="white" className="" />
            </div>
            <div>
              <Input color="white" label="Email" type="email" />
            </div>
            <div>
              <Textarea id="message" rows={5} />
            </div>
            <Button
              className="px-6 py-3 bg-yellow-700"
              type="submit"
              variant="filled">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
