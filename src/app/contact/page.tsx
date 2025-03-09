"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred White Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-72 h-72 bg-blue-700 blur-3xl rounded-full absolute top-20 left-20"></div>
      <div className="w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      <h1 className="text-5xl font-bold text-center mb-12 relative z-10">Let's Connect 📩</h1>

      {/* Contact Information */}
      <div className="max-w-lg w-full bg-black p-8 border border-white rounded-lg shadow-lg text-center relative z-10">
        <p className="text-lg text-gray-300 mb-4">Feel free to reach out via phone or email!</p>
        <p className="text-2xl font-semibold text-white">📞 +91 6370777276</p>
        <p className="text-2xl font-semibold text-white mt-2">
          📧 <a href="mailto:your@email.com" className="underline hover:text-gray-300">pritampatra1141@gmail.com</a>
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center relative z-10">
        <p className="text-gray-400">Connect with me on:</p>
        <div className="flex space-x-6 justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/pritam-patra-29398b207/"
            target="_blank"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/pritamapatra"
            target="_blank"
            className="text-gray-300 hover:text-gray-500 transition duration-300 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/PritamP47070802"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition duration-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/prie_tam_tam/"
            target="_blank"
            className="text-gray-300 hover:text-pink-500 transition duration-300 text-3xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </main>
  );
}
