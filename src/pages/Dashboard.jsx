import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Dashboard = () => {
  return (
    <main className='w-full flex h-screen'>
       <Sidebar/>
      <div className='bg-blue-400 w-4/5'>
      <Navbar /> 
      <div></div></div>
     
    </main>
  )
}

export default Dashboard