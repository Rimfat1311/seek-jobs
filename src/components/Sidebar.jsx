import React from 'react'
import logo from '../assets/logo.svg'


const Sidebar = () => {
  return (
    <div className='bg-red-100 w-1/5'>
      <div className='pl-10 pt-6 space-y-14'>
        <img src={logo} alt="" />
        <ul className='space-y-5'>
          <li>satus</li>
          <li>All job</li>
          <li>Add job</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar