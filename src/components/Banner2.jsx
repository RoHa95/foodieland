import React from "react";
import banner2 from "../assets/images/sheff.png";

function Banner2() {
  return (
    <div className="w-full flex justify-between items-center container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 mb-24">
      <div className="w-1/2 flex flex-col justify-between h-[356px] ">
        <div className=" flex flex-col">
          <div className=" text-[48px] font-semibold">Everyone can be a<br/> chef in their own kitchen</div>
          <div className=" font-normal text-base text-opacity-60 mr-14 mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>
        <div className=" bg-black cursor-pointer text-white rounded-2xl w-[180px] h-[60px] flex items-center justify-center">Learn More</div>
      </div>
      <div className=" w-1/2">
      <img src={banner2} alt="banner2" className="hidden md:block w-full" /></div>
    </div>
  );
}

export default Banner2;
