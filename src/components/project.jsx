import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const project = [
    {
      id: 1,
      src: "",
    },
    {
      id: 2,
      src: "",
    },
    {
      id: 3,
      src: "",
    },
    {
      id: 4,
      src: "",
    },
    {
      id: 5,
      src: "",
    },
    {
      id: 6,
      src: "",
    },
  ];
  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-gray-950  via-gray-800 to-black  text-white pb-32"
    >
      <div
        className="xl:max-w-screen-xl mx-auto px-4 container flex flex-col justify-center w-full h-full"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Projects
          </p>
          <p className="mt-8 text-2xl">My works</p>
          <ul className="mt-4  list-disc ml-4">
            <li className="text-xl mt-4">
              Designed and developed web application using JavaScript frameworks
              Reactjs and Vuejs to increase user experience.
            </li>
            <li className="text-xl mt-4">
              Created accessible, responsive and functional user interfaces to
              allow visitors on any devices to have the same perfect user
              experience.
            </li>
            <li className="text-xl mt-4">
              Devised various custom WordPress sites from design comps that
              includes advanced WordPress features, such as custom past types,
              advanced custom fields, and WordPress customize API.
            </li>
          </ul>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-10">
          {project.map(({ id, src }) => {
            return (
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src=""
                  alt=""
                  className="rounded-md hover:scale-105 duration-200"
                />
                <div className="flex items-center justify-between">
                  <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-center text-xl">
                    Project Link
                  </button>
                  <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-center text-xl">
                    About Project
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
