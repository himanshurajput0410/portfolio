import React, { useEffect } from "react";
import HeroImage from "../assets/hero-image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import Typed from "typed.js";
import "aos/dist/aos.css";


const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Wordpress Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-gray-950  via-gray-800 to-black md:h-screen pt-24 md:pt-0"
    >
      <div className="px-4 xl:max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center justify-between h-full  ">
        <div className="md:w-1/2 w-full mx-auto md:mx-0 text-white">
          <h2
            className="text-3xl lg:text-6xl font-bold animation-heading "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I'm a <span ref={el}></span>
          </h2>
          <p
            className="text-gray-500 text-xl font-medium mt-5   "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I have 2+ years of experience building and desgining software and
            website.I am a kind of hard working and self-motivated person
            looking for an opportunities where I can utilize my skills make the
            best of my potential and contribute to the growth of your
            organization.
          </p>
          <div className="mt-5 " data-aos="fade-right" data-aos-delay="300">
            <Link
              to="experience"
              smooth
              duration={500}
              className=" group px-6 py-3 text-xl font-semibold w-fit cursor-pointer text-white flex items-center gap-3  rounded-md bg-gradient-to-r from-cyan-400 to-blue-500   "
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={26} />
              </span>
            </Link>
          </div>
        </div>
        <div
          className="md:w-3/12 w-full mx-auto md:mx-0 mt-5 md:mt-0 "
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-full border-4 border-gray-500 w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
