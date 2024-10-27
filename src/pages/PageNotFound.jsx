import React from 'react';
import pagenotfound from '../assets/images/pagenotfound.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function PageNotFound() {
  return (
    <div className=' max-h-screen w-full'>
    <Navbar/>
    <div className=' flex items-center justify-center mt-3'><img className=' h-[380px]' src={pagenotfound} alt='page not found'/></div>
    <Footer/>
    </div>
    
  )
}

export default PageNotFound