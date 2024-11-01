import React from "react";
import { useFoods } from "../context/FoodsContext";
import Card from "./Card";
import Card2 from "./Card2";

// loader
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function List2() {
  const foods = useFoods();
  const newfoods = foods.slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 md:px-24 mb-24">
      <div className=" flex flex-col md:flex-row items-center justify-between w-full mb-20">
        <div className=" w-full md:w-1/2 text-3xl lg:text-[48px] lg:leading-[56px] font-semibold">
          Try this delicious recipe to make your day
        </div>
        <div className=" w-full md:w-1/2 font-normal text-base text-opacity-60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.length === 0 ? (
          <div className=" col-span-full flex justify-center items-center">
            <Bars color="#0ea5e9" />
          </div>
        ) : (
          newfoods.map((item) => <Card2 data={item} key={item.id} />)
        )}
      </div>
      <div className=" w-full flex items-center justify-center">
        {" "}
        <div
          className=" w-fit py-2 px-10 text-opacity-30 hover:bg-sky-100 rounded-xl mt-6 cursor-pointer bg-gray-300 bg-opacity-30"
          onClick={() => navigate("/foods")}
        >
          مشاهده همه
        </div>
      </div>
    </div>
  );
}

export default List2;
