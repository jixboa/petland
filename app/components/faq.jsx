"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Faq() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          What types of pets do you cater to?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We cater to a wide variety of pets, including dogs, cats, small
          mammals, birds, and reptiles. Our team of experts is knowledgeable
          about the specific needs of each type of pet.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          Do you offer delivery services?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Yes, we do offer delivery services for our customers. You can place
          your order online or over the phone, and we&apos;ll have it delivered
          to your doorstep within a few business days.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          What is your return policy?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We have a 30-day return policy for all of our products. If you&apos;re
          not satisfied with your purchase, you can return it for a full refund
          or exchange. Please note that some restrictions may apply.
        </AccordionBody>
      </Accordion>
    </>
  );
}
