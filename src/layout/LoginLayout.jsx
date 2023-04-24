import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div className='container mx-auto w-[80%]'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default LoginLayout