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
    <section className=" w-full text-white fixed bg-gray-950  z-50   ">
      <div className=" flex justify-between items-center container xl:max-w-screen-xl mx-auto h-20 px-4  ">
        <div>
          <Link to="home" smooth duration={500}>
            <h1 className="font-signature text-4xl hover:scale-105 duration-200 cursor-pointer ">
              Himanshu
            </h1>
          </Link>
        </div>
        <div>
          <ul className="md:flex justify-end gap-8 hidden">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className=" text-lg cursor-pointer capitalize text-gray-500 hover:scale-105 hover:border-b  hover:border-r-gray-400 duration-200 font-medium hover:text-white "
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
            className="text-gray-500 cursor-pointer relative z-10 block md:hidden "
          >
            {nav ? <FaTimes size={32} /> : <FaBars size={32} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-black text-gray-500">
              {links.map(({ id, link }) => {
                return (
                  <li
                    key={id}
                    className="px-4 py-6 capitalize cursor-pointer text-2xl "
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
