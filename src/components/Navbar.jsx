import React from 'react'
import toggle from '../assets/toggle.svg'

const Navbar = () => {
  return (
    <div className='flex w-full bg-white h-24 px-16 '>
      <ul className='flex flex-row w-full justify-between items-center '>
        <li><img src={toggle} alt="toggle"/></li>
        <li className='text-3xl '>Dashboard</li>
        <li><select className='focus:outline-none bg-[#3B82F6] p-2 px-10 rounded-lg text-white'>
          <option>Test User </option>
          
        </select>
        </li>
      </ul>
    </div>
  )
}

export default Navbar 