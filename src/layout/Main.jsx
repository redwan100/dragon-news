import React from 'react'
import Header from '../pages/shared/Header'
import Footer from '../pages/shared/Footer'
import LeftSide from '../pages/shared/LeftSide';
import MiddleSide from '../pages/shared/MiddleSide';
import RightSide from '../pages/shared/RightSide';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className=" h-screen flex flex-col container mx-auto w-[80%]">
      <Header />

      <div>
        <div className="grid gap-2 md:gap-5 grid-cols-[1fr,_2fr,_1fr]">
          <div className="">
            <LeftSide />
          </div>

          <div className="">
            <Outlet />
          </div>

          <div className="">
            <RightSide />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Main