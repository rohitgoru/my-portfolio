import React from "react";

import "swiper/css/pagination";

// import required modules
import SatisfiedSliderCard from "./SatisfiedSliderCard";
const SatisfiedClients = () => {
  return (
    <section id="Testimonials">
      <h2 className="mb-12 text-center sub-heading">
        Kind words from
        <span className="text-purple-400 pl-3">satisfied clients</span>
      </h2>
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 px-4">
        {[0, 1, 2].map((_, index) => (
          <article className="rounded-3xl">
            <SatisfiedSliderCard />
          </article>
        ))}
      </div>
    </section>
  );
};

export default SatisfiedClients;
