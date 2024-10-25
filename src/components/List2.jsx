import React from "react";
import { useFoods } from "../context/FoodsContext";
import Card from "./Card";
import Card2 from "./Card2";

// loader
import { Bars } from "react-loader-spinner";

function List2() {
    const foods = useFoods();
    console.log(foods);
    const color = 'bg-transparent'
  return (
    <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 mb-24">
      <div className=" flex items-center justify-between w-full mb-20">
        <div className=" w-1/2 text-[48px] font-semibold">Try this delicious recipe to make your day</div>
        <div className=" w-1/2 font-normal text-base text-opacity-60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </div>
      </div>
      <div className=" grid grid-cols-4">
        { foods.length === 0 ? <div className=" col-span-full flex justify-center items-center"><Bars color="#0ea5e9"/></div>: foods.map(item=>(
            <Card2 data={item}/>
        ))}
      </div>
    </div>
  );
}

export default List2;
