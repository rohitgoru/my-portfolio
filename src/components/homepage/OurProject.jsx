"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import Marquee from "react-fast-marquee";

const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    desc: "Explore the wonders of our solar system with interactive 3D simulation using Three.js.",
    image: "/images/webp/project-1.webp",
    link: "https://nerzo-development-two.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    desc: "Simplify your video conferencing experience with seamless connection.",
    image: "/images/webp/project-2.webp",
    link: "https://ceys-frontend-eosin.vercel.app/",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    desc: "AI software with advanced image generation and editing tools.",
    image: "/images/webp/project-3.webp",
    link: "https://publifyr-omega.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple iPhone 3D Website",
    desc: "Recreated Apple iPhone website using GSAP animations and Three.js.",
    image: "/images/webp/project-4.webp",
    link: "https://estimatic-jade.vercel.app/",
  },
  {
    id: 5,
    title: "3D Solar System Planets to Explore",
    desc: "Explore the wonders of our solar system with interactive 3D simulation using Three.js.",
    image: "/images/webp/project-5.webp",
    link: "https://hi-there-ruddy.vercel.app/",
  },
  {
    id: 6,
    title: "Yoom - Video Conferencing App",
    desc: "Simplify your video conferencing experience with seamless connection.",
    image: "/images/webp/project-6.webp",
    link: "https://bill-fairies-eight.vercel.app/",
  },
  {
    id: 7,
    title: "AI Image SaaS - Canva Application",
    desc: "AI software with advanced image generation and editing tools.",
    image: "/images/webp/project-19.webp",
    link: "https://passport-self.vercel.app/",
  },
  {
    id: 8,
    title: "Animated Apple iPhone 3D Website",
    desc: "Recreated Apple iPhone website using GSAP animations and Three.js.",
    image: "/images/webp/project-8.webp",
    link: "https://bluey-theta.vercel.app/",
  },
  {
    id: 9,
    title: "AI Image SaaS - Canva Application",
    desc: "AI software with advanced image generation and editing tools.",
    image: "/images/webp/project-9.webp",
    link: "https://coursechest-fawn.vercel.app/",
  },
  {
    id: 10,
    title: "Animated Apple iPhone 3D Website",
    desc: "Recreated Apple iPhone website using GSAP animations and Three.js.",
    image: "/images/webp/project-10.webp",
    link: "https://arcos.vercel.app/",
  },
  {
    id: 11,
    title: "3D Solar System Planets to Explore",
    desc: "Explore the wonders of our solar system with interactive 3D simulation using Three.js.",
    image: "/images/webp/project-11.webp",
    link: "https://unlikelyy.vercel.app/",
  },
  {
    id: 12,
    title: "Yoom - Video Conferencing App",
    desc: "Simplify your video conferencing experience with seamless connection.",
    image: "/images/webp/project-12.webp",
    link: "https://resume-builder-pi-blush.vercel.app/",
  },
  {
    id: 13,
    title: "AI Image SaaS - Canva Application",
    desc: "AI software with advanced image generation and editing tools.",
    image: "/images/webp/project-18.webp",
    link: "https://interior-connect.vercel.app/",
  },
  {
    id: 14,
    title: "Animated Apple iPhone 3D Website",
    desc: "Recreated Apple iPhone website using GSAP animations and Three.js.",
    image: "/images/webp/project-14.webp",
    link: "https://noma-weld.vercel.app/",
  },
];

export default function OurProject() {
  return (
    <section className=" py-16 lg:py-20 text-white">
      <div className="">
        {/* Heading */}
        <h2 className="mb-12 text-center sub-heading">
          A small selection of{" "}
          <span className="text-purple-400">recent projects</span>
        </h2>

        <div className="w-full overflow-hidden space-y-5 md:space-y-8">
          <Marquee pauseOnHover speed={50} autoFill>
            {projects.slice(0, 6).map((project, index) => (
              <div key={index} className="mx-2 sm:mx-3 lg:mx-5">
                <ProjectCard project={project} />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover speed={50} autoFill direction="right">
            {projects.slice(6).map((project, index) => (
              <div key={index} className="mx-2 sm:mx-3 lg:mx-5">
                <ProjectCard project={project} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
