import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Status from './Status'
import AddJobs from './AddJobs'
import AllJobs from './AllJobs'
import Profile from './Profile'
import { IoBarChartSharp } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { ImProfile } from "react-icons/im";


const Sidebar = () => {
  return (
    <div className=' w-1/5'>
      <div className='pt-6 space-y-12'>
        <img src={logo} alt="logo" className='px-10' />
        <ul className='flex flex-col '>
          <Link to="status" className='flex gap-5 hover:bg-[#F0F4F8] px-10 py-5'> <IoBarChartSharp className='text-2xl text-[#3B82F6]'/>  Status</Link>
          <Link to="allJobs" className='flex gap-5 hover:bg-[#F0F4F8] px-10 py-5'>  <TiDocumentText  className='text-2xl text-[#3B82F6]'/>   All job</Link>
          <Link to="addJobs" className='flex gap-5 hover:bg-[#F0F4F8] px-10 py-5'> <RiMenuSearchLine  className='text-2xl text-[#3B82F6]'/>  Add job</Link>
          <Link to="profile" className='flex gap-5 hover:bg-[#F0F4F8] px-10 py-5'> <ImProfile  className='text-2xl text-[#3B82F6]'/>  Profile</Link>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar