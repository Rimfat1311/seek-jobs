import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full bg-white h-24 px-16 '>
      <ul className='flex flex-row w-full justify-between items-center '>
        <li>toggle</li>
        <li className='text-3xl'>Dashboard</li>
        <li>Test User</li>
      </ul>
    </div>
  )
}

export default Navbar