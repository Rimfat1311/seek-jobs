import React from 'react'
import { Outlet } from 'react-router-dom'
import { MdCardTravel } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import MyChart from './MyChart'




const Status = () => {
  // const data = {
  //   item1: { quantity: '28', icon:'', description: 'pending applications' },
  //   item2: { name: 'Item 2', icon:'', description: 'interviews scheduled' },
  //   item3: { name: 'Item 3', icon:'', description: 'jobs declined' },
  // };
  return (
    <div>
      <Outlet />
      <div className='flex gap-x-5 w-full h-64 py-8  px-12 justify-center'>
        <div className='flex flex-col justify-center bg-white w-80 rounded-md p-10 space-y-9 border-b-4 border-[#E9B949] '>
          <div className='flex flex-row  space-x-20 text-[#E9B949]  font-semibold items-center '>
            <p className='text-6xl '>28</p>
            <p className='bg-[#FCEFC7] rounded-md p-3 text-4xl'><MdCardTravel /></p>
          </div>
          <div className=' text-xl'>pending Applications</div>
        </div>
        <div className='flex flex-col justify-center bg-white w-80 rounded-md p-10 space-y-9 border-b-4 border-[#647ACB] '>
          <div className='flex flex-row  space-x-20 text-[#647ACB]  font-semibold items-center '>
            <p className='text-6xl '>2</p>
            <p className='bg-[#E0E8F9] rounded-md p-3 text-4xl'><FaCalendarCheck /></p>
          </div>
          <div className=' text-xl'>interviews scheduled</div>
        </div>
        <div className='flex flex-col justify-center bg-white w-80 rounded-md p-10 space-y-9 border-b-4 border-[#D66A6A] '>
          <div className='flex flex-row  space-x-20 text-[#D66A6A]  font-semibold items-center '>
            <p className='text-6xl '>3</p>
            <p className='bg-[#FFEEEE] rounded-md p-3 text-4xl'><FaBug />
            </p>
          </div>
          <div className=' text-xl'>jobs declined</div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl'>Monthly Applications</p>
        <p>Area Chart</p>
        <div>
          
        </div>
      </div>
<MyChart />
    </div>
  )
}

export default Status