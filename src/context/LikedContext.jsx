import React, { Children, createContext, useState } from 'react'
export const LikedContext = createContext();
function LikedProvider({children}) {
    const[liked, setLiked] = useState([]);
  return (
    <LikedContext.Provider value={{liked,setLiked}} >{children}</LikedContext.Provider>
  )
}

export default LikedProvider