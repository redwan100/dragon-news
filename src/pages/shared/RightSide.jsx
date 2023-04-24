import React from "react";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import QZon from "./QZon";
import qzon1 from "../../assets/qZone1.png";
import qzon2 from "../../assets/qZone2.png";
import qzon3 from "../../assets/qZone3.png";
const RightSide = () => {
  return (
    <div>
      <h1 className="title mb-3">Login With</h1>
      <div className="space-y-2">
        <button className="btn btn-utils">
          <AiOutlineGoogle size={20} />
          Login with Google
        </button>
        <button className="btn border-gray-800">
          <AiFillGithub size={20} />
          Login with Github
        </button>
      </div>

      <div className=" my-7">
        <h1 className="title mb-3">Find Us On</h1>

        <div className="border">
          <a
            href="#"
            target="_blank"
            className="flex gap-1 items-center py-2 border-b font-medium"
          >
            <small className="w-6 h-6 rounded-full bg-gray-100 grid place-content-center ml-2">
              <FaFacebookF />
            </small>
            Facebook
          </a>

          <a
            href="#"
            target="_blank"
            className="flex gap-1 items-center py-2 border-b font-medium"
          >
            <small className="w-6 h-6 rounded-full bg-gray-100 grid place-content-center ml-2">
              <FaTwitter />
            </small>
            Twitter
          </a>

          <a
            href="#"
            target="_blank"
            className="flex gap-1 items-center py-2 font-medium"
          >
            <small className="w-6 h-6 rounded-full bg-gray-100 grid place-content-center ml-2">
              <FaInstagram />
            </small>
            Instagram
          </a>
        </div>
      </div>

      <div className="my-12 bg-gray-50 p-3 drop-shadow-sm">
        <QZon img={qzon1}/>
        <QZon img={qzon2}/>
        <QZon img={qzon3}/>
      </div>

      
    </div>
  );
};

export default RightSide;
