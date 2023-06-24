import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const education = [
    {
      id: 1,
      Qualification: "S.S.C",
      Institution: "Sky Heights Academy, Betma",
      Board: "CBSE Board ",
      Year: "2015",
      Percentage: "8.3 CGPA",
    },
    {
      id: 2,
      Qualification: "H.S.C",
      Institution: "Sky Heights Academy, Betma",
      Board: "CBSE Board ",
      Year: "2017",
      Percentage: "53%",
    },
    {
      id: 3,
      Qualification: "B.Sc. (CS)",
      Institution: "IPS Academy, Indore",
      Board: "DAVV",
      Year: "2017-2020",
      Percentage: "63.00%",
    },
    {
      id: 4,
      Qualification: "MCA",
      Institution: "IPS Academy, Indore  ",
      Board: "RGPV  Bhopal",
      Year: "2020-2022",
      Percentage: "8.7 CGPA ",
    },
  ];
  return (
    <div
      name="about"
      className="w-full pb-32  bg-gradient-to-b from-black via-gray-800 to-gray-950 text-white "
    >
      <div
        className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </div>
        <p className="text-xl mt-4">
          <strong>Mobile:</strong> 7477030604
        </p>
        <p className="text-xl mt-4">
          <a target="blank" href="mailto:email@example.com">
            <strong>E-Mail:</strong> himanshurajput0408@gmail.com
          </a>
        </p>
        <p className="text-2xl font-bold mt-4">Education</p>
        <table className="mt-4 border-2 border-gray-400">
          <tr className="border-b-2 border-gray-400 ">
            <th className="text-center py-2  font-bold text-xl">
              Qualification
            </th>
            <th className="text-center py-2 font-bold text-xl ">Institution</th>
            <th className="text-center py-2 font-bold text-xl ">Board</th>
            <th className="text-center py-2 font-bold text-xl ">Year</th>
            <th className="text-center py-2 font-bold text-xl ">Percentage</th>
          </tr>
          {education.map(
            ({ id, Qualification, Institution, Board, Year, Percentage }) => {
              return (
                <tr key={id}>
                  <td className="text-center py-2 text-lg">{Qualification}</td>
                  <td className="text-center py-2 text-lg">{Institution}</td>
                  <td className="text-center py-2 text-lg">{Board}</td>
                  <td className="text-center py-2 text-lg">{Year}</td>
                  <td className="text-center py-2 text-lg">{Percentage}</td>
                </tr>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
};

export default About;
