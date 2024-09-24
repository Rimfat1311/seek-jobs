import React, { useState } from 'react'
import toggle from '../assets/toggle.svg'
import { IoMdContact } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const [dropdown, setDropdown] = useState(false)

  const handleClick = ()=>{
    setDropdown(!dropdown)
                            
  }
  return (
    <div className='flex w-full bg-white h-24 px-16 '>
      <ul className='flex flex-row w-full justify-between items-center '>
        <li onClick={toggleSidebar}> <img src={toggle} alt="toggle"/></li>
        <li className='text-3xl'>Dashboard</li>
        <li className='space-y-2 relative'>
          <div onClick={handleClick}
        className='flex items-center gap-3 text-white bg-[#3B82F6] px-3 py-1 rounded-md'><IoMdContact />Test User<FaSortDown /> </div>
          {dropdown && (
            <div className='flex items-center justify-center bg-blue-300 text-[#3B82F6] rounded-md p-2'>Log out</div>
          )}
    

        </li>
        
       
      </ul>
    </div>
  )
}

export default Navbar 