"use client";

import { Textarea, Button, Input } from "@material-tailwind/react";

export default function Contact() {
  return (
    <>
      <section className="bg-white py-20 " id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <Input id="name" label="Full name" type="text" />
            </div>
            <div>
              <Input id="email" label="Email" type="email" />
            </div>
            <div>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            <Button className="px-6 py-3" type="submit" variant="filled">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
