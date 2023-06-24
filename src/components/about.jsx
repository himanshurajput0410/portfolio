import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pb-32  bg-gradient-to-b from-black via-gray-800 to-gray-950 text-white "
    >
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </div>
        <p className="text-xl mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis ipsa voluptas animi commodi praesentium quaerat qui harum
          fugiat deserunt nobis maxime est laborum, delectus quibusdam
          recusandae debitis nisi ad?
        </p>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          totam amet, quidem commodi sit, cupiditate assumenda aliquam quaerat,
          aspernatur praesentium rerum quas aut illo est neque eveniet
          perferendis sequi porro culpa ipsum nisi pariatur. Repellat, maiores,
          porro placeat labore, ea reprehenderit facere sequi quis autem eius
          molestiae veritatis. Adipisci iure accusamus earum, tempore autem
          doloremque officiis sapiente aliquid quae natus.
        </p>
      </div>
    </div>
  );
};

export default About;
