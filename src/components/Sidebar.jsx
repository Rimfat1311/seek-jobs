import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Status from './Status'
import AddJobs from './AddJobs'
import AllJobs from './AllJobs'
import Profile from './Profile'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'


const Sidebar = () => {
  return (
    <div className=' w-1/5'>
      <div className='pl-14 pt-6 space-y-16'>
        <img src={logo} alt="" />
        <ul className='flex flex-col space-y-8'>
          <Link to="status" className='flex gap-5'> <img src={icon1}  /> Status</Link>
          <Link to="allJobs" className='flex gap-5'> <img src={icon3} /> All job</Link>
          <Link to="addJobs" className='flex gap-5'> <img src={icon2} /> Add job</Link>
          <Link to="profile" className='flex gap-5'> <img src={icon4} /> Profile</Link>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar