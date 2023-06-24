import React from "react";
import Adobe from "../assets/photoshop.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Html from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import ReactJS from "../assets/reactjs.png";
import Wordpress from "../assets/wordpress.png";
import Github from "../assets/github.png";

const Experience = () => {
  const skill = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500 hover:text-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500 hover:text-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 hover:text-yellow-500",
    },
    {
      id: 4,
      src: ReactJS,
      title: "React",
      style: "shadow-blue-600 hover:text-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 hover:text-sky-400",
    },
    {
      id: 6,
      src: Wordpress,
      title: "WordPress",
      style: "shadow-white hover:text-white",
    },
    {
      id: 7,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-500 hover:text-gray-500",
    },
    {
      id: 8,
      src: Adobe,
      title: "Adobe PhotoShop",
      style: "shadow-blue-700 hover:text-blue-700",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-950  via-gray-800 to-black  text-white pb-32"
    >
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl border-gray-500 border-b-4 font-bold inline p-2">
            Experience
          </p>
          <p className="mt-8"></p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-8 ">
          {skill.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md shadow-gray-600 rounded-lg p-4 hover:scale-105 duration-200 relative ${style}`}
              >
                <div className="sm:w-28 h-28 w-full  mx-auto mb-10">
                  <img
                    src={src}
                    alt={title}
                    className="max-w-full w-full max-h-full h-full mx-auto rounded-lg"
                  />
                </div>
                <p
                  className={` absolute bottom-3 text-xl left-1/2 -translate-x-1/2 ${style} `}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
