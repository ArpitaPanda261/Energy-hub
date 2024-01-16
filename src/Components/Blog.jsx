import React from "react";
import { TypeAnimation } from "react-type-animation";
import Slide from "@mui/material/Slide";
import AutoTransitionCarousel from "./CustomCarousel";

const Blog = () => {
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    // Add more slides as needed
  ];
  return (
    <div>
      <div className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto">
          <AutoTransitionCarousel
            // interval={6000}
            images={[
              {
                imageUrl: "solar.jpg",
                data: {},
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                data: {
                  headMessage: "Our commitment towards",
                },
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                data: {},
              },
            ]}
          />
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-3 lg:p-10 dark:divide-white">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">Career</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">Investors</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">Media</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
