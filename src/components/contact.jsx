import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="pb-32  bg-gradient-to-b from-black via-gray-800 to-gray-950 text-white "
    >
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Contact
          </p>
          <p className="mt-8 text-lg">
            Submit the form below to contact with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/fec09638-777b-42cd-862d-8318f09e4a58"
            method="post"
            className="flex flex-col w-full md:w-2/5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-5 p-2 bg-transparent rounded-md border-2 text-white focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows={10}
              className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-400 to-blue-500  px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
