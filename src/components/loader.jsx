import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="circle-wrapper loader">
        <div class="half first "></div>
        <div class="half second"></div>
      </div>
      <div class="curtain_wrapper">
        <div class="curtain bg-gradient-to-b from-gray-950  via-gray-800 to-black left"></div>
        <div class="curtain bg-gradient-to-b from-gray-950  via-gray-800 to-black right"></div>
      </div>
    </div>
  );
};

export default Loader;
