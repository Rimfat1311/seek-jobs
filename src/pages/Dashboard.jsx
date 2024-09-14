import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Dashboard = () => {
  return (
    <main className='w-full flex h-screen'>
      <Sidebar />
      <div className='bg-[#F0F4F8] w-4/5'>
        <Navbar />
        <div>Dashborad</div>
        <div>pages</div>
      </div>

    </main>
  )
}

export default Dashboard