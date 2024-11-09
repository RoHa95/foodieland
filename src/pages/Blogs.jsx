import React, { useContext } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { FavoriteContext } from '../context/FavoriteContext';
import CardFavorite from '../components/CardFavorite';
function Blogs() {
  const {favorite} = useContext(FavoriteContext);

  useEffect(()=>{
    window.scroll(0,0);
  },[]);
    return (
        <>
        <Navbar/>
        <h2 className=" ml-16 text-[48px] font-bold text-left"> Favorite Recipes</h2>
          <div className='w-full flex gap-6 items-center justify-between mt-8 container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 md:px-24 mb-24'>
            {favorite.length === 0 ? <p>NO THINGS HAS BEEN</p>: (favorite.map(item =>(<CardFavorite data={item}/>)))}
          </div>
          <Footer/>
        </>
      );
}

export default Blogs