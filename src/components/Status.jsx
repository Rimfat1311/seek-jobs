import React from 'react'
import { Outlet } from 'react-router-dom'
import Chart from './Chart'

const Status = () => {
  return (
    <div>
      <Outlet />
      <div className='flex gap-x-5 w-full h-full py-10 px-16'>
        <div className='bg-white w-80 rounded-md'>1</div>
        <div className='bg-white w-80 rounded-md'>2</div>
        <div className='bg-white w-80 rounded-md'>3</div>
      </div>
      <Chart className="flex items-center"/>
    </div>
  )
}

export default Status