import React from 'react'
import { NavLink}  from 'react-router-dom' 

const Navbar = () => {

  return (
    <div className='flex justify-center gap-10 p-5'>
      <NavLink className={(e)=>(e.isActive ? "text-pink-500 bg-gray-400   rounded px-4 py-2 "  : " bg-gray-400   rounded px-4 py-2")  }
       to='/'>
           Home
      </NavLink>
      
       <NavLink className={(e)=>(e.isActive ? "text-pink-500  bg-gray-400   rounded px-4 py-2 " : " bg-gray-400   rounded px-4 py-2") } to='/About'>
           About
      </NavLink>
       <NavLink className={(e)=>(e.isActive ? "text-pink-500  bg-gray-400   rounded px-4 py-2 " : " bg-gray-400   rounded px-4 py-2") } to='/Service'>
           Service
      </NavLink>
    </div>
  )
}

export default Navbar