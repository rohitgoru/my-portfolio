import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-[223px] h-[133px] sm:h-[260px] sm:w-[399px] md:h-[300px] md:w-[420px] lg:h-[350px] lg:w-[490px] overflow-hidden rounded-xl sm:rounded-2xl border border-[#181A2E]">
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="320px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[5] bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100" />

      {/* Center Button */}
      <Link
        href={project.link}
        target="_blank"
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-lg bg-purple-500 px-5 py-2 text-white opacity-0 transition duration-300 group-hover:opacity-100"
      >
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path d="M1 12L12 1M12 1H3M12 1V10" stroke="white" strokeWidth="2" />
        </svg>
      </Link>
    </div>
  );
};

export default ProjectCard;
