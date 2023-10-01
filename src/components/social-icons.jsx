import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, MiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={26} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={26} />
        </>
      ),
      href: "https://github.com/himanshurajput0410?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={26} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={26} />
        </>
      ),
      href: "/himanshu-resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="fixed left-0 flex-col hidden -translate-y-1/2 lg:flex top-1/2">
      <ul>
        {links.map(({ id, href, child, download }) => {
          return (
            <li className="flex items-center justify-between w-32 h-12 px-4 -ml-20 duration-300 bg-gray-600 hover:rounded-tr-md hover:rounded-br-md hover:ml-0 first:rounded-tr-md last:rounded-br-md">
              <a
                key={id}
                href={href}
                className="flex items-center justify-between w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <>{child}</>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
