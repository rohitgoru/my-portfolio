import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <section className="max-w-[980px] mx-auto  flex flex-col justify-center items-center pt-14 pb-20 sm:py-[80px] md:py-[100px] lg:py-[150px] text-center px-4">
      <span className="text-[#E4ECFF] text-xs sm:text-base leading-[120%] uppercase">
        Dynamic Web Magic with Next.js
      </span>
      <h1 className="heading pt-5">
        Transforming Concepts into Seamless
        <span className="!text-[#CBACF9] pl-2">User Experiences</span>
      </h1>
      <p className="text-base md:text-lg lg:text-2xl text-[#E4ECFF] leading-[120%] py-6">
        Hi! I’m John Doe, a Next.js Developer based in Russia
      </p>
      <PrimaryButton className={"sm:max-w-[180px] w-full"}>
        See my work
      </PrimaryButton>
    </section>
  );
};

export default Hero;
