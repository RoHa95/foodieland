import React from "react";
import banner2 from "../assets/images/sheff.png";

function Banner2() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 lg:px-24 mb-24">
      <div className=" w-full lg:w-1/2 flex flex-col justify-between lg:h-[356px] md:pl-14 md:pt-4 lg:pl-0 lg:pt-0 ">
        <div className=" flex flex-col">
          <div className=" text-3xl md:text-[42px] md:leading-[50px] lg:text-[48px] lg:leading-[54px] font-semibold">Everyone can be a<br/> chef in their own kitchen</div>
          <div className=" font-normal text-base lg:text-base text-opacity-60 mr-14 mt-6 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>
        <div className=" bg-black cursor-pointer text-white rounded-2xl w-36 h-10 lg:w-[180px] lg:h-[60px] flex items-center justify-center">Learn More</div>
      </div>
      <div className=" w-full lg:w-1/2">
      <img src="https://s32.picofile.com/file/8480209150/sheff.png" alt="banner2" className=" lg:block w-full" /></div>
    </div>
  );
}

export default Banner2;
