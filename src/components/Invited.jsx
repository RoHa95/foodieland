import React from "react";
import bg from "../assets/images/invited.png";

function Invited() {
  return (
    <div className=" relative lg:h-[442px] w-full container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 md:px-24 flex justify-center items-center gap-x-6 xl:gap-x-10 mb-20 md:mb-32">
      <img
        src={bg}
        alt="background"
        className=" absolute w-full px-2 xl:px-24 top-0 right-0 -z-20"
      />
      <div className=" w-full flex h-full flex-col justify-between items-center py-3 md:py-10 lg:py-20">
        <div className=" w-full flex flex-col justify-center lg:w-[620px] xl:h-[282px]">
          <div className=" font-semibold text-center text-xl md:text-xl lg:text-[48px] lg:leading-[56px] mb-2 lg:mb-6">Deliciousness to your inbox</div>
          <div className=" text-xs mb-8 lg:mb-0 lg:text-base font-normal text-opacity-60 text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>
        <div className="flex items-center bg-white overflow-hidden rounded-3xl justify-center lg:w-[480px] md:mb-16">
            <input className=" lg:w-full h-10 lg:h-[60px] px-4" type="text" placeholder="Your email address..."/>
            <div className=" lg:w-[160px] lg:h-[60px] h-10 bg-black mr-2 text-white rounded-2xl flex cursor-pointer items-center xl:my-6 justify-center">Subscribe</div>
        </div>
      </div>
    </div>
  );
}

export default Invited;
