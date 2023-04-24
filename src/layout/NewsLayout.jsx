import React from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import RightSide from "../pages/shared/RightSide";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div className=" h-screen flex flex-col container mx-auto w-[80%]">
      <Header />

      <div>
        <div className="grid gap-4 md:grid-cols-[3fr,_1fr] justify-center">
          

          <div className="">
            <Outlet />
          </div>

          <div className="hidden md:block">
            <RightSide />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default NewsLayout;
