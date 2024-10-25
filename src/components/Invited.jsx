import React from "react";
import bg from "../assets/images/invited.png";

function Invited() {
  return (
    <div className=" relative h-[442px] w-full container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 flex justify-center items-center gap-x-10 mb-36">
      <img
        src={bg}
        alt="background"
        className=" absolute w-full px-24 top-0 right-0 -z-20"
      />
      <div className=" flex h-full flex-col justify-between items-center py-20">
        <div className=" w-[620px] h-[282px]">
          <div className=" font-semibold text-[48px] mb-6">Deliciousness to your inbox</div>
          <div className=" text-base font-normal text-opacity-60 text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>
        <div className="flex items-center bg-white overflow-hidden rounded-3xl justify-center w-[480px]">
            <input className=" w-full h-[60px] px-4" type="text" placeholder="Your email address..."/>
            <div className=" w-[160px] h-[60px] bg-black mr-2 text-white rounded-2xl flex cursor-pointer items-center my-6 justify-center">Subscribe</div>
        </div>
      </div>
    </div>
  );
}

export default Invited;
