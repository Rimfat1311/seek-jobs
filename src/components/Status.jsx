import React from 'react';
import { Outlet } from 'react-router-dom';
import { MdCardTravel } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import MyChart from './MyChart';

const Status = () => {
  return (
    <div className="p-4">
      <Outlet />
      <div className='flex flex-wrap justify-center gap-5 py-8'>
        {/* Card for Pending Applications */}
        <div className='flex flex-col justify-center bg-white w-full sm:w-72 md:w-80 lg:w-1/4 rounded-md p-6 space-y-4 border-b-4 border-[#E9B949]'>
          <div className='flex items-center justify-between text-[#E9B949] font-semibold'>
            <p className='text-5xl md:text-6xl'>28</p>
            <p className='bg-[#FCEFC7] rounded-md p-3 text-4xl'><MdCardTravel /></p>
          </div>
          <div className='text-lg md:text-xl'>Pending Applications</div>
        </div>
        
        {/* Card for Interviews Scheduled */}
        <div className='flex flex-col justify-center bg-white w-full sm:w-72 md:w-80 lg:w-1/4 rounded-md p-6 space-y-4 border-b-4 border-[#647ACB]'>
          <div className='flex items-center justify-between text-[#647ACB] font-semibold'>
            <p className='text-5xl md:text-6xl'>2</p>
            <p className='bg-[#E0E8F9] rounded-md p-3 text-4xl'><FaCalendarCheck /></p>
          </div>
          <div className='text-lg md:text-xl'>Interviews Scheduled</div>
        </div>
        
        {/* Card for Jobs Declined */}
        <div className='flex flex-col justify-center bg-white w-full sm:w-72 md:w-80 lg:w-1/4 rounded-md p-6 space-y-4 border-b-4 border-[#D66A6A]'>
          <div className='flex items-center justify-between text-[#D66A6A] font-semibold'>
            <p className='text-5xl md:text-6xl'>3</p>
            <p className='bg-[#FFEEEE] rounded-md p-3 text-4xl'><FaBug /></p>
          </div>
          <div className='text-lg md:text-xl'>Jobs Declined</div>
        </div>
      </div>
      
      <div className='flex flex-col items-center justify-center mt-8'>
        <p className='text-2xl'>Monthly Applications</p>
        <p>Area Chart</p>
        <div>
          {/* Area Chart Component */}
        </div>
      </div>

      <MyChart />
    </div>
  );
}

export default Status;
