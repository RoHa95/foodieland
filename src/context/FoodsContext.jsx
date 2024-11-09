import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
export const FoodsContext = createContext();

function FoodsProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const liked = [];

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await api.get("/data");
        setFoods(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchFoods();
  }, []);
  foods.map(item=>(liked.push({id:item.id, status:false})));
  return (
    <FoodsContext.Provider value={{foods,liked}}>{children}</FoodsContext.Provider>
  );
}

const useFoods = () => {
  const {foods} = useContext(FoodsContext);
  return foods;
};

const useFoodDetails = (id) => {
  const {foods} = useContext(FoodsContext);
  const result = foods.find((item) => item.id === id);
  return result;
};
const useCategoryList = (category)=>{
  const {foods} = useContext(FoodsContext);
  const result = foods.filter(item => item.details[1]["Recipe Type"] === category);
  return result;
}
export default FoodsProvider;
export { useFoods, useFoodDetails , useCategoryList };
