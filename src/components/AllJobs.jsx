import React from 'react'
import { Outlet } from 'react-router-dom'

const AllJobs = () => {
  return (
    <div className='py-20 px-14'>
      <div className='bg-white w-full h-64 p-8'>
        <form  className='pb-5' action="">
          <p className=' text-3xl pb-5'>Search Form</p>
          <div className='flex  flex-wrap gap-5'>
          <label className='flex flex-col' htmlFor="">Search
            <input 
            type="text"
            className='bg-[#E0E8F9] py-1 px-8 rounded-md'
             />
          </label>
          <label className='flex flex-col ' htmlFor="">Status
            <input 
            type="text"
            className='bg-[#E0E8F9] py-1 px-8 rounded-md'
             />
          </label>
          <label className='flex flex-col' htmlFor="">Type
            <input 
            type="text"
            className='bg-[#E0E8F9] py-1 px-8 rounded-md'
             />
          </label>
          <label className='flex flex-col' htmlFor="">Sort
            <input
            type="text"
            className='bg-[#E0E8F9] py-1 px-8 rounded-md'
             />
          </label> 
          <button className=' rounded-md bg-[#FFEEEE] h-8 w-60 mt-5' >Clear Filter</button>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  )
}

export default AllJobs