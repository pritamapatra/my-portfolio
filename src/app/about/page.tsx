"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* About Section */}
      <div className="max-w-lg w-full p-8 rounded-lg shadow-lg text-center relative z-10">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border border-white shadow-lg mx-auto"
        />
        <h1 className="text-4xl font-bold text-white mt-4">About Me</h1>
        <p className="mt-4 text-lg text-gray-300">
          I am a passionate developer who loves to build amazing web experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12 max-w-4xl w-full bg-opacity-50 p-8 rounded-xl shadow-lg text-center relative z-10">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-gray-300">
          {["JavaScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map((skill) => (
            <span key={skill} className="bg-black bg-opacity-50 p-3 rounded-lg shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-12 max-w-4xl w-full bg-opacity-50 p-8 rounded-xl shadow-lg text-center relative z-10">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="mt-6 space-y-6 text-gray-300">
          {[
            { role: "Software Engineer - XYZ Tech", duration: "2023 - Present", description: "Developed scalable web applications using Next.js and Tailwind CSS." },
            { role: "Frontend Developer - ABC Solutions", duration: "2021 - 2023", description: "Worked on building interactive UI components and optimizing web performance." }
          ].map((exp, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
