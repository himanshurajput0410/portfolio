import React from "react";

const Projects = () => {
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
      <div className="xl:max-w-screen-xl mx-auto px-4 container flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Projects
          </p>
          <p className="mt-8 text-xl">My works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-10">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
