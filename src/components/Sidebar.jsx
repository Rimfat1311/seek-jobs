import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Status from './Status'
import AddJobs from './AddJobs'
import AllJobs from './AllJobs'
import Profile from './Profile'


const Sidebar = () => {
  return (
    <div className=' w-1/5'>
      <div className='pl-14 pt-6 space-y-16'>
        <img src={logo} alt="" />
        <ul className='flex flex-col space-y-8'>
          <Link to="status">Status</Link>
          <Link to="addJobs">Add job</Link>
          <Link to="allJobs">All job</Link>
          <Link to="profile">Profile</Link>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar