import React from "react";
import { useFoods } from "../context/FoodsContext";
import Card from "./Card";

// loader
import {Bars} from "react-loader-spinner";

function List() {
    const foods = useFoods();
    
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
        foods.length === 0 ? <div className=" w-full flex col-span-full items-center justify-center"><Bars color="#0ea5e9"/></div> : foods.map(item=>(
            <Card data={item}/>
        ))}
      </div>
    </div>
  );
}

export default List;
