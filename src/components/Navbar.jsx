import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full bg-white h-24'>
      <ul className='flex justify-between items-center cursor-pointer'>
        <li>toggle</li>
        <li>Dashboard</li>
        <li>select user</li>
      </ul>
    </div>
  )
}

export default Navbar