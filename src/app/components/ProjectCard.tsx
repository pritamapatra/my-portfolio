"use client";

import { FiExternalLink } from "react-icons/fi";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-400">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>

      {/* External Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition"
      >
        View Project <FiExternalLink />
      </a>
    </div>
  );
}
