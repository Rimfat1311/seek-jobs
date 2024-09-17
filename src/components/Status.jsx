import React from 'react'
import { Outlet } from 'react-router-dom'

const Status = () => {
  return (
    <div>
      Status
      <Outlet />
    </div>
  )
}

export default Status