import React from 'react'


const Navbar = () => {
  return (
    <div >
      <div className="navcontainer items-center flex justify-between">
        <h1 className='md:flex-1 md:ml-8 ml-2 md:text-[18px] text-xs font-bold text-white '>ELITE_PORTFOLIO</h1>
        <div className="weaj flex-1 md:flex hidden md:justify-center gap-8 text-sm text-gray-500">
       
          <li className='hover:text-white hover:cursor-pointer list-none void'><a href="#front"> HOME</a></li>
          <li className='hover:text-white hover:cursor-pointer list-none'><a href="#projects">EXPERTISE</a></li>
          <li className='hover:text-white hover:cursor-pointer list-none'><a href="#journal">JOURNAL</a></li>
          <li className='hover:text-white hover:cursor-pointer list-none'><a href="#about">ABOUT</a></li>
        </div>
        <div className='flex md:flex-1 justify-end md:mr-8 mr-2'>

          <button className="text-center tracking-[2px] md:px-8 px-4 md:py-2.5 py-1.5 navbtn rounded-md font-bold text-sm transition-all duration-200 transform hover:scale-105 hover:cursor-pointer">
            <a href="#journal"> CONNECT</a>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
