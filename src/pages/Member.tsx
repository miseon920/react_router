import React from 'react'
import { Outlet } from 'react-router-dom';

const Member = () => {
  return (
    <div>Member
        <Outlet/>
    </div>
  )
}

export default Member