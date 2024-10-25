import React from "react";
import { useFoods } from "../context/FoodsContext";
import Card from "./Card";
import ads from "../assets/images/Ads.png"

// loader
import {Bars} from "react-loader-spinner";

function List() {
    const foods = useFoods();
    const newfoods = foods.slice(0,8);
    const first = newfoods.slice(0,5);
    const last = newfoods.slice(5,8);
    console.log(newfoods);
    
  return (
    <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 mb-24">
      <div className=" flex flex-col items-center justify-center gap-y-6 mb-24">
        <h3 className=" text-[48px] font-semibold">Simple and tasty recipes</h3>
        <p className=" font-normal text-base text-opacity-60 w-[706px] text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className=" w-full grid grid-cols-3 gap-x-5 gap-y-8 ">
        {
        foods.length === 0 ? <div className=" w-full flex col-span-full items-center justify-center"><Bars color="#0ea5e9"/></div> : first.map(item=>(
            <Card data={item}/>
        ))}
        <div>
          <img src={ads} alt="ads" className=" py-4 max-w-[350px] h-[418px]" />
        </div>
        {
          last.map(item=>(
            <Card data={item}/>
          ))
        }
      </div>
      <div className=" w-full flex items-center justify-center"> <div className=" w-fit py-2 px-10 text-opacity-30 hover:bg-sky-100 rounded-xl mt-10 cursor-pointer bg-gray-300 bg-opacity-30">مشاهده همه</div></div>
    </div>
  );
}

export default List;
