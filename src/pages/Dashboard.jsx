import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Page1 from './Page1'

const Dashboard = () => {
  return (
    <main className='w-full flex h-screen'>
       <Sidebar/>
      <div className='bg-blue-400 w-4/5'>dashboard</div>
     
    </main>
  )
}

export default Dashboard