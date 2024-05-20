"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-gray-700 to-blue-gray-900 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-5xl">
                Dog Products
              </h2>
              <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our selection of high-quality dog products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <Image
                alt="Dog Bed"
                className="rounded-lg object-cover"
                height={300}
                src="/images/dog-bed.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Dog Bed</h3>
                <p className="text-xl font-bold">$49.99</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    -
                  </Button>
                  <span className="text-lg font-bold">1</span>
                  <Button size="sm" variant="outline">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <Image
                alt="Dog Toy"
                className="rounded-lg object-cover"
                height={300}
                src="/images/dog-toy.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Dog Toy</h3>
                <p className="text-xl font-bold">$19.99</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    -
                  </Button>
                  <span className="text-lg font-bold">1</span>
                  <Button size="sm" variant="outline">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              <Image
                alt="Dog Food"
                className="rounded-lg object-cover"
                height={300}
                src="/images/dog-food.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Dog Food</h3>
                <p className="text-xl font-bold">$29.99</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    -
                  </Button>
                  <span className="text-lg font-bold">1</span>
                  <Button size="sm" variant="outline">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
