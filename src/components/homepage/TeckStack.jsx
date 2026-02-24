"use client";
import React from "react";
import {
  BootstrapIcon,
  CssIcon,
  GithubIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  VsCodeIcon,
} from "../common/Icons";
import Marquee from "react-fast-marquee";

const techStack = [
  { id: 1, Icon: <HtmlIcon /> },
  { id: 2, Icon: <CssIcon /> },
  { id: 3, Icon: <JsIcon /> },
  { id: 4, Icon: <ReactIcon /> },
  { id: 5, Icon: <BootstrapIcon /> },
  { id: 6, Icon: <VsCodeIcon /> },
  { id: 7, Icon: <GitIcon /> },
  { id: 8, Icon: <GithubIcon /> },
  { id: 9, Icon: <TailwindIcon /> },
];

const TeckStack = () => {
  return (
    <section className="pb-20 ">
      <h2 className="sub-heading text-center pb-5 px-4">
        My <span className="!text-[#CBACF9] sm:pl-1"> tech stack</span>
      </h2>
      <p className="paragraph text-center px-4">
        Technologies I’ve been working with recently
      </p>

      <div className=" gap-4 mt-14 justify-center items-center ">
        <Marquee pauseOnHover speed={50} autoFill>
          {techStack.map((icons, index) => (
            <div
              key={index}
              className="mx-5 md:mx-8 max-w-[66px] md:max-w-[100px] lg:max-w-[130px] w-full"
            >
              {icons.Icon}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TeckStack;
