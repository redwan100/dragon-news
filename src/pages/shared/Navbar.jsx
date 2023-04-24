import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
const navLink =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Career',
        path:'/career'
    },
]

const Navbar = () => {
    const link = navLink.map((link,i)=><NavLink key={i} className={({isActive})=>isActive?'active':''} to={link.path}>{link.name}</NavLink>)

  return (
    <div className="flex justify-between items-center my-4 sticky top-0 left-0 z-10 shadow-md py-3 px-2">
      <div className="space-x-3 font-medium">{link}</div>
      <div className="flex items-center gap-2">
        <div className="">
         < FaUserCircle size={25} cursor={'pointer'}/>
        </div>
        <button className="login">
          <Link to={'/login'}>Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar