import React from "react";
import { useFoods } from "../context/FoodsContext";

function FoodsPage() {
  const foods = useFoods();
  console.log(foods);

  return (<div>
    <div className="bg-red-400">
      hi
      {foods.map(food=>( <>
        <p className=" bg-blue-500 text-xl" key={food.id}>{food.name}</p>
        <img src={food.image}/>
      </>))}
      
    </div>
  </div>)
}

export default FoodsPage;
