import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <section className="fixed z-50 w-full text-white bg-gray-950">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto xl:max-w-screen-xl">
        <div>
          <Link to="home" smooth duration={500}>
            <h1 className="text-4xl duration-200 cursor-pointer font-signature hover:scale-105 ">
              Himanshu
            </h1>
          </Link>
        </div>
        <div>
          <ul className="justify-end hidden gap-8 md:flex">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="text-lg font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105 hover:border-b hover:border-r-gray-400 hover:text-white"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="relative z-10 block text-gray-500 cursor-pointer md:hidden "
          >
            {nav ? <FaTimes size={32} /> : <FaBars size={32} />}
          </div>
          {nav && (
            <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-gray-950 via-gray-800 to-black">
              {links.map(({ id, link }) => {
                return (
                  <li
                    key={id}
                    className="px-4 py-6 text-2xl capitalize cursor-pointer "
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
