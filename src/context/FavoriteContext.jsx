import React, { createContext, useContext, useState } from 'react'

export const FavoriteContext = createContext();

function FavoriteProvider({children}) {
  
    const[favorite, setFavorite] = useState([]);
    
  return (
    <FavoriteContext.Provider value={{favorite, setFavorite}}>{children}</FavoriteContext.Provider>
  )
}

export default FavoriteProvider