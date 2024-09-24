import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Profile = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")

  return (
    <div className=' p-12'>
    <div className='bg-white w-full h-80 p-10'>
      <form className='pb-5' action="">
        <p className=' text-3xl pb-2'>Profile</p>
        <div className='flex  flex-wrap   gap-x-9'>
          <div>
            <label className='flex flex-col py-3 ' htmlFor="name">Name </label>
            <input
              id='name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-[#F0F4F8] py-1 px-9 rounded-md '
            />
          </div>

          <div>
            <label className='flex flex-col py-3 ' htmlFor="last name">Last Name </label>
            <input
              id='last name'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#F0F4F8] py-1 px-9 rounded-md '
            />
          </div>

          <div>
            <label className='flex flex-col py-3 ' htmlFor="email">Email </label>
            <input
              id='email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#F0F4F8] py-1 px-9 rounded-md '
            />
          </div>

          <div>
            <label className='flex flex-col py-3 ' htmlFor="location">Location </label>
            <input
              id='location'
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='bg-[#F0F4F8] py-1 px-9 rounded-md '
            />
          </div>
          <button className=' rounded-md bg-[#3B82F6] hover:bg-blue-700 text-white h-8 w-64 mt-12' >Save Changes</button>
        </div>
      </form>
    </div>
    <Outlet />
  </div>
  )
}

export default Profile