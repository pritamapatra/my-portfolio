"use client";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Detectify",
    description: "A deepfake detection platform with AI-powered analysis.",
    tech: ["Next.js", "Tailwind CSS", "Flask", "PostgreSQL"],
    link: "/",
  },
  {
    title: "Alumni Network",
    description: "A web portal for BIT Sindri alumni networking.",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
    link: "/",
  },
  {
    title: "Coding Community Portal",
    description: "An interactive platform for coders to collaborate and learn.",
    tech: ["React", "Firebase", "Express.js"],
    link: "/",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 opacity-30 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-blue-700 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-12 relative z-10">
        My Projects 🚀
      </h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="transition-transform transform hover:-translate-y-2 duration-300"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}
