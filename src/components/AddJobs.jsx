import React from 'react'
import { Outlet } from 'react-router-dom'

const AddJobs = () => {
  return (
    <div className=' p-12'>
      <div className='bg-white w-full h-80 p-10'>
        <form className='pb-5' action="">
          <p className=' text-3xl pb-2'>Add Job</p>
          <div className='flex  flex-wrap   gap-x-10'>
            <div>
              <label className='flex flex-col py-3 ' htmlFor="position">Position </label>
              <input
                id='position'
                type="text"
                className='bg-[#F0F4F8] py-1 px-9 rounded-md '
              />
            </div>

            <div>
              <label className='flex flex-col py-3 ' htmlFor="company">Company </label>
              <input
                id='company'
                type="text"
                className='bg-[#F0F4F8] py-1 px-9 rounded-md '
              />
            </div>

            <div>
              <label className='flex flex-col py-3 ' htmlFor="job location">Job Locatin </label>
              <input
                id='job location'
                type="text"
                className='bg-[#F0F4F8] py-1 px-9 rounded-md '
              />
            </div>

            <div>
              <label className='flex flex-col py-3' htmlFor="type">Status </label>
              <select
                id='type'
                type="text"
                value="/"
                className='bg-[#F0F4F8] py-1 w-64 rounded-md pl-3'>
                <option value="/">all</option>
                <option value="full-time">full-time</option>
                <option value="psrt-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">internship</option>
              </select>
            </div>

            <div>
              <label className='flex flex-col py-3' htmlFor="sort">Sort </label>
              <select
                id='sort'
                type="text"
                value="/"
                className='bg-[#F0F4F8] py-1 w-64 rounded-md pl-3'>
                <option value="/">latest</option>
                <option value="oldest">oldest</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>
            </div>

            <button className=' rounded-md bg-[#FFEEEE] hover:bg-[#D66A6A] h-8 w-64 mt-12' >Clear Filter</button>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  )
}

export default AddJobs