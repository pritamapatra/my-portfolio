"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-red-900 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* Profile Section */}
      <div className="max-w-lg w-full py-24 p-8 rounded-lg shadow-lg text-center relative z-10">
        {/* Profile Picture */}
        <div className="relative w-40 h-40 mx-auto">
          <Image
            src="/profile.png" // Using PNG file
            alt="Profile Picture"
            width={500} // You can adjust the size
            height={500}
            className="rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>

        <h1 className="text-4xl font-bold text-white mt-4">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">
          I am a passionate developer who loves to build amazing web experiences.
        </p>
        <div className="mt-6">
          <Link
            href="/projects"
            className="px-6 py-3 text-gray-900 bg-white rounded-lg shadow hover:bg-gray-300 transition duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </main>
  );
}
