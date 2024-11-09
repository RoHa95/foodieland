import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import Card from "../components/Card";
function Blogs() {
  const { favorite } = useContext(FavoriteContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <h2 className=" ml-16 text-[48px] font-bold text-left">
        {" "}
        Favorite Recipes
      </h2>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-between mt-8 container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 md:px-24 mb-24">
        {favorite.length === 0 ? (
          <p className="h-full bg-gray-300 bg-opacity-30 p-2 w-full rounded-md">There is nothing !!!</p>
        ) : (
          favorite.map((item) => <Card data={item} />)
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
