import React from "react";
import { useFoods } from "../context/FoodsContext";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function FoodsPage() {
  const foods = useFoods();

  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 py-14 grid grid-cols-3 gap-x-6 gap-y-8">
        {foods.map((item) => (
          <Card data={item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default FoodsPage;
