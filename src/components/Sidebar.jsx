import React from 'react'

import logo from '../assets/logo.svg'


const Sidebar = () => {
  return (
    <div className=' w-1/5'>
      <div className='pl-14 pt-6 space-y-16'>
        <img src={logo} alt="" />
        <ul className='space-y-8'>
          <li><a href="/">Status</a></li>
          <li><a href="addJobs">Add job</a></li>
          <li><a href="allJobs">All job</a></li>
          <li><a href="profile">Profile</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar