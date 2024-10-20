import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
const FoodsContext = createContext();

function FoodsProvider({ children }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await api.get("/data")
        setFoods(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchFoods();
  }, []);
  return (
    <FoodsContext.Provider value={foods}>{children}</FoodsContext.Provider>
  );
}

const useFoods = () => {
  const foods = useContext(FoodsContext);
  return foods;
};

export default FoodsProvider;
export { useFoods };
