import React, { useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const AllJobs = () => {

  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [type, setType] = useState("")
  const [sort, setSort] = useState("")


  return (
    <div className=' p-12'>
      <div className='bg-white w-full h-72 p-10'>
        <form className='pb-5' action="">
          <p className=' text-3xl pb-2'>Search Form</p>
          <div className='flex  flex-wrap   gap-x-8'>
            <div>
              <label className='flex flex-col py-3 ' htmlFor="search">Search </label>
              <input
                id='search'
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-[#F0F4F8] py-1 px-9 rounded-md'
              />
            </div>

            <div>
              <label className='flex flex-col py-3' htmlFor="status">Status</label>
              <select
                id='status'
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='bg-[#F0F4F8] py-1 w-64 rounded-md pl-3'>
                <option value="/">all</option>
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>

            <div>
              <label className='flex flex-col py-3' htmlFor="type">Type </label>
              <select
                id='type'
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
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
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className='bg-[#F0F4F8] py-1 w-64 rounded-md pl-3'>
                <option value="/">latest</option>
                <option value="oldest">oldest</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>
            </div>

            <button className=' rounded-md bg-[#FFEEEE] hover:bg-[#D66A6A] text-[#D66A6A] hover:text-white
             h-8 w-64 mt-12' >Clear Filter</button>
          </div>
        </form>
       
      </div>
      <Outlet />
    </div>
  )
}

export default AllJobs