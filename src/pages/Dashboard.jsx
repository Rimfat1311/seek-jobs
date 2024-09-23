import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Status from '../components/Status';
import AllJobs from '../components/AllJobs';
import AddJobs from '../components/AddJobs';
import Profile from '../components/Profile';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';

const Dashboard = () => {
const [SidebarOpen, setSidebarOpen] = useState(true)

const handleSidebar = () =>{
  setSidebarOpen(!SidebarOpen)
}

  return (
    <main className='w-full flex h-screen'>
      <Sidebar />
      <div className='bg-[#F0F4F8] w-4/5'>
        <Navbar  Sidebar={handleSidebar}/>
        
        <Routes>
          
            <Route path="status" element={<Status />} />
            <Route path="allJobs" element={<AllJobs />} />
            <Route path="addJobs" element={<AddJobs />} />
            <Route path="profile" element={<Profile />} />
          
        </Routes>
      </div>
    </main>
  );
}

export default Dashboard;
