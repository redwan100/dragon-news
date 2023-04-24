import React from 'react'
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div className="py-4 mx-auto text-center my-4 space-y-2                                                                   ">
        <img src={logo} alt="" className="mx-auto" />
        <p className="text-gray-600">Journalism Without Fear or Favour</p>
        <p className="font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>

        <div className="flex items-center">
          <button className="bg-rose-500 text-yellow-50 py-1 px-2 m-2">
            Latest
          </button>
          <Marquee speed={100} className="text-rose-400" pauseOnHover>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            magni eius est consequuntur velit, quia veritatis? Vero, earum nam!
            Laboriosam?
          </Marquee>
        </div>
      </div>

      {/* ==========Navbar============ */}
      
        <Navbar />
      
    </div>
  );
}

export default Header