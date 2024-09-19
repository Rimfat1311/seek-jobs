import React from 'react'
import { Outlet } from 'react-router-dom'

const AddJobs = () => {
  return (
    <div className='p-10'>
      <div className='bg-white w-full h-60'></div>
      <Outlet />

    </div>
  )
}

export default AddJobs