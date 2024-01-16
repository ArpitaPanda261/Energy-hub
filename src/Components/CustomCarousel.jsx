import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const AutoTransitionCarousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, interval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  return (
    <div
      className="flex h-full flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-9 lg:h-auto"
      style={{
        position: "relative",
        backgroundImage: `url('${images[activeIndex].imageUrl}')`,
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center p-8 py-12 text-center w-full absolute top-32">
        <h1 className="py-4 text-5xl text-green-400 font-bold">
          <TypeAnimation
            sequence={[`SUSTAINABLE IS\n ATTAINABLE`, 1000, ""]}
            speed={10}
            style={{ whiteSpace: "pre-line", fontSize: "1em" }}
            repeat={Infinity}
          />
        </h1>
        <p className="pb-6 text-xl" style={{ whiteSpace: "pre-line" }}>
          Our commitment to a{" "}
          <span
            style={{
              display: "block",
              color: "#38A169",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Greener Tomorrow
          </span>
        </p>
        <ul
          className="list-disc text-xs"
          style={{
            display: "block",
            fontFamily: "cursive",
            listStylePosition: "inside",
            marginInlineStart: "0",
            paddingInlineStart: "1em",
          }}
        >
          <li>Carbon net zero before 2045</li>
          <li>Water neutral before 2030</li>
          <li>No net loss of biodiversity</li>
        </ul>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white rounded-full text-black mt-4 md:mt-6">
          Know More
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AutoTransitionCarousel;
