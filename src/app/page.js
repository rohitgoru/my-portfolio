import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import OurProject from "@/components/homepage/OurProject";
import TeckStack from "@/components/homepage/TeckStack";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          className="absolute w-full lg:h-[800px] -top-13 left-0 z-10 pointer-events-none "
          src="/images/svg/grid-pattern_animated.svg"
          alt="animated"
        />
        <span className="-top-8 sm:-top-13 -left-21 sm:left-0 absolute max-w-[268px] sm:max-w-[319px]  lg:max-w-[468px] xl:max-w-[700px] w-full pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 805 608"
          >
            <g clipPath="url(#clip0_386_4477)">
              <mask
                id="mask0_386_4477"
                width="805"
                height="608"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
              >
                <path fill="#fff" d="M805 0H0v608h805z"></path>
              </mask>
              <g mask="url(#mask0_386_4477)">
                <g filter="url(#filter0_f_386_4477)" opacity="0.2">
                  <path
                    fill="url(#paint0_linear_386_4477)"
                    d="M-282.159-390.853-307-366.012 128.807 69.795l304.036 289.419-279.195-314.26z"
                  ></path>
                </g>
                <g filter="url(#filter1_f_386_4477)" opacity="0.32">
                  <path
                    fill="url(#paint1_linear_386_4477)"
                    d="m-75.074-380.376-24.841 24.841L335.892 80.273 639.929 369.69 360.733 55.431z"
                  ></path>
                </g>
                <g filter="url(#filter2_f_386_4477)" opacity="0.32">
                  <path
                    fill="url(#paint2_linear_386_4477)"
                    d="m4.432-487-24.841 24.841L415.398-26.352l304.036 289.419-279.195-314.26z"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_386_4477"
                x1="-294.58"
                x2="141.228"
                y1="-378.433"
                y2="57.375"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_386_4477"
                x1="-87.495"
                x2="348.313"
                y1="-367.955"
                y2="67.852"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_386_4477"
                x1="-7.989"
                x2="427.819"
                y1="-474.579"
                y2="-38.772"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <filter
                id="filter0_f_386_4477"
                width="899.843"
                height="910.067"
                x="-387"
                y="-470.853"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4477"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_386_4477"
                width="899.844"
                height="910.067"
                x="-179.915"
                y="-460.376"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4477"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter2_f_386_4477"
                width="899.843"
                height="910.067"
                x="-100.409"
                y="-567"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4477"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_386_4477">
                <path fill="#fff" d="M0 0h805v608H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="absolute -top-8 sm:-top-13 -right-21 sm:right-0 max-w-[268px] sm:max-w-[319px] lg:max-w-[468px] xl:max-w-[700px] w-full pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 805 608"
          >
            <g clipPath="url(#clip0_386_4466)">
              <mask
                id="mask0_386_4466"
                width="805"
                height="608"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
              >
                <path fill="#fff" d="M0 0h805v608H0z"></path>
              </mask>
              <g mask="url(#mask0_386_4466)">
                <g filter="url(#filter0_f_386_4466)" opacity="0.2">
                  <path
                    fill="url(#paint0_linear_386_4466)"
                    d="m1087.16-390.853 24.84 24.841L676.193 69.795 372.157 359.214l279.195-314.26z"
                  ></path>
                </g>
                <g filter="url(#filter1_f_386_4466)" opacity="0.32">
                  <path
                    fill="url(#paint1_linear_386_4466)"
                    d="m880.074-380.376 24.841 24.841L469.108 80.273 165.071 369.69l279.196-314.26z"
                  ></path>
                </g>
                <g filter="url(#filter2_f_386_4466)" opacity="0.32">
                  <path
                    fill="url(#paint2_linear_386_4466)"
                    d="m800.568-487 24.841 24.841L389.602-26.352 85.566 263.067l279.195-314.26z"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_386_4466"
                x1="1099.58"
                x2="663.772"
                y1="-378.433"
                y2="57.375"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_386_4466"
                x1="892.495"
                x2="456.687"
                y1="-367.955"
                y2="67.852"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_386_4466"
                x1="812.989"
                x2="377.181"
                y1="-474.579"
                y2="-38.772"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#D3D8DF"></stop>
              </linearGradient>
              <filter
                id="filter0_f_386_4466"
                width="899.843"
                height="910.067"
                x="292.157"
                y="-470.853"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4466"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_386_4466"
                width="899.844"
                height="910.067"
                x="85.071"
                y="-460.376"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4466"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter2_f_386_4466"
                width="899.843"
                height="910.067"
                x="5.566"
                y="-567"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_386_4466"
                  stdDeviation="40"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_386_4466">
                <path fill="#fff" d="M805 0H0v608h805z"></path>
              </clipPath>
            </defs>
          </svg>
        </span>
        <Header />
        <Hero />
      </div>
      <TeckStack />
      <OurProject />
      <Footer />
    </div>
  );
}
