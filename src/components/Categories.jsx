import React, { useEffect, useState } from "react";
import brakfast from "../assets/images/breakfast.png";
import vegan from "../assets/images/vegan.png";
import meet from "../assets/images/meet.png";
import dessert from "../assets/images/dessert.png";
import lunch from "../assets/images/lunch.png";
import chocolate from "../assets/images/chocolate.png";
import { useCategoryList, useFoods } from "../context/FoodsContext";
import Navbar from "./Navbar";
import Card2 from "./Card2";
import Card from "./Card";

function Categories() {
  const breakfastCategory = useCategoryList("Breakfast");
  const veganCategory = useCategoryList("Vegan");
  const meetCategory = useCategoryList("Meet");
  const dessertCategory = useCategoryList("Dessert");
  const lunchCategory = useCategoryList("Lunch");

  const [categoryList, setCategorylist] = useState([]);
  const [category, setCategory] = useState("");
  
  useEffect(() => {
    if (category === "breakfast") {
      setCategorylist(breakfastCategory);
    } else if (category === "vegan") {
      setCategorylist(veganCategory);
    } else if (category === "meet") {
      setCategorylist(meetCategory);
    } else if (category === "dessert") {
      setCategorylist(dessertCategory);
    } else if (category === "lunch") {
      setCategorylist(lunchCategory);
    }
  }, [category]);
  const breakfastHandler = (e) => {
    setCategory("breakfast");
  };
  const veganHandler = (e) => {
    setCategory("vegan");
  };

  const categoryHandler = (e) => {
    console.log(e.target);
  };
  return (
    <div className=" w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto md:px-24 mb-24">
      <div className=" w-full flex items-center justify-between mb-20 ">
        <div className=" text-[48px] font-semibold">Categories</div>
        <div className=" text-base font-semibold bg-sky-100 rounded-2xl w-52 h-14 flex items-center justify-center cursor-pointer">
          View All Categories
        </div>
      </div>
      {/* <div className=" flex items-center justify-between gap-x-8">
        <div className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-yellow-50 to-transparent rounded-[30px]">
          <div>
            <img src={brakfast} alt="breakfast" />
          </div>
          <div className=" text-lg font-semibold mb-8">Breakfast</div>
        </div>
        <div className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-green-50 to-transparent rounded-[30px]">
          <div>
            <img src={vegan} alt="Vegan" />
          </div>
          <div className=" text-lg font-semibold mb-8">Vegan</div>
        </div>
        <div className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-red-50 to-transparent rounded-[30px]">
          <div>
            <img src={meet} alt="Meet" />
          </div>
          <div className=" text-lg font-semibold mb-8">Meet</div>
        </div>
        <div className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-yellow-50 to-transparent rounded-[30px]">
          <div>
            <img src={dessert} alt="Dessert" />
          </div>
          <div className=" text-lg font-semibold mb-8">Dessert</div>
        </div>
        <div className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-gray-100 to-transparent rounded-[30px]">
          <div>
            <img src={lunch} alt="Dessert" />
          </div>
          <div className=" text-lg font-semibold mb-8">Lunch</div>
        </div>
        <div className=' flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-stone-100 to-transparent rounded-[30px]'>
                <div>
                    <img src={chocolate} alt="Dessert" />
                </div>
                <div className=' text-lg font-semibold mb-8'>Chocolate</div>
            </div>
      </div> */}
      <ul
        onClick={categoryHandler}
        className=" w-full flex items-center justify-between gap-x-8"
      >
        <li
          onClick={breakfastHandler}
          className="flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-yellow-50 to-transparent rounded-[30px]"
        >
          <div>
            <img src={brakfast} alt="breakfast" />
          </div>
          <div className=" text-lg font-semibold mb-8">Breakfast</div>
        </li>

        <li
          onClick={veganHandler}
          className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-green-50 to-transparent rounded-[30px]"
        >
          <div>
            <img src={vegan} alt="Vegan" />
          </div>
          <div className=" text-lg font-semibold mb-8">Vegan</div>
        </li>
        <li
          onClick={() => setCategory("meet")}
          className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-red-50 to-transparent rounded-[30px]"
        >
          <div>
            <img src={meet} alt="Meet" />
          </div>
          <div className=" text-lg font-semibold mb-8">Meet</div>
        </li>
        <li
          onClick={() => setCategory("dessert")}
          className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-yellow-50 to-transparent rounded-[30px]"
        >
          <div>
            <img src={dessert} alt="Dessert" />
          </div>
          <div className=" text-lg font-semibold mb-8">Dessert</div>
        </li>
        <li
          onClick={() => setCategory("lunch")}
          className=" flex flex-col justify-between items-center w-[180px] h-[203px] bg-gradient-to-t from-gray-100 to-transparent rounded-[30px]"
        >
          <div>
            <img src={lunch} alt="Dessert" />
          </div>
          <div className=" text-lg font-semibold mb-8">Lunch</div>
        </li>
      </ul>
      <div className=" w-full rounded-3xl py-4 mt-4 gap-8 grid grid-cols-3">
        {categoryList.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
