"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Updated images array
const images = [
  "/blog-images/sih1.jpeg",
  "/blog-images/sih3.jpeg",
  "/blog-images/sih2.jpeg",
  "/blog-images/sih5.jpeg",
  "/blog-images/sih6.jpeg",
  "/blog-images/sih7.jpeg",
  "/blog-images/sih8.jpeg",
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative overflow-hidden flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 bg-blue-700 opacity-30 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-80 h-80 bg-red-900 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* Blog Title */}
      <h1 className="text-5xl font-bold text-center mb-12 relative z-10">
        My Journey in SIH'24 🚀
      </h1>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl gap-12">
        {/* Blog Content on the Left */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Day 1 Section */}
          <div className="bg-black p-6 border border-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Day 1: The Beginning</h2>
            <p className="text-gray-400 mt-4">
              The excitement kicked in as we arrived at the hackathon venue.
              The problem statement was intense, and we had to strategize our
              approach. First interactions with mentors set the pace for an
              incredible journey ahead!
            </p>
          </div>

          {/* Day 2 Section */}
          <div className="bg-black p-6 border border-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Day 2: The Final Push</h2>
            <p className="text-gray-400 mt-4">
              Time was running out as we worked relentlessly to perfect our
              solution. The final pitch to the judges was nerve-wracking but
              rewarding. The feedback we received shaped our understanding of
              innovation and problem-solving.
            </p>
          </div>
        </div>

        {/* Image Carousel on the Right */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg ">
            {/* Images Wrapper */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <Image
                    src={src}
                    alt={`SIH Day ${index + 1}`}
                    width={400}
                    height={200}
                    priority={index === 0} // Prioritize first image
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full"
            >
              ❯
            </button>
          </div>

         
        </div>
      </div>
    </main>
  );
}
