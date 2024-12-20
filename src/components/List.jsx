import React, { useContext } from "react";
import { useFoods } from "../context/FoodsContext";
import { useNavigate } from "react-router-dom";

// components
import Card from "./Card";

// loader
import { Bars } from "react-loader-spinner";

function List() {
  const foods = useFoods();
  const newfoods = foods.slice(0, 8);
  const first = newfoods.slice(0, 5);
  const last = newfoods.slice(5, 8);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-3 sm:px-10 md:px-24 mb-24">
      <div className=" w-full flex flex-col items-center justify-center gap-y-6 mb-24">
        <h3 className=" text-3xl md:text-[48px] font-semibold">
          Simple and tasty recipes
        </h3>
        <p className=" font-normal text-base text-opacity-60 md:w-[706px] text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className=" w-full grid grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-5 gap-y-8 ">
        {foods.length === 0 ? (
          <div className=" w-full flex col-span-full items-center justify-center">
            <Bars color="#0ea5e9" />
          </div>
        ) : (
          first.map((item) => <Card key={item.id} data={item} />)
        )}
        <div>
          <img
            src="https://s32.picofile.com/file/8480208976/Ads.png"
            alt="ads"
            className=" pt-4 w-full h-full pb-0 lg:max-w-[350px] lg:h-[418px]"
          />
        </div>
        {last.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <div className=" w-full flex items-center justify-center">
        {" "}
        <div
          className=" w-fit py-2 px-10 text-opacity-30 hover:bg-sky-100 rounded-xl mt-10 cursor-pointer bg-gray-300 bg-opacity-30"
          onClick={() => navigate("/foods")}
        >
          مشاهده همه
        </div>
      </div>
    </div>
  );
}

export default List;
