import React from 'react'
import { RiVideoAddLine } from "react-icons/ri";
import { BsFillMicFill } from "react-icons/bs";
import { FaYoutube, FaSistrix,  } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-30 sm:px-4 flex">
      <div className=" h-16 w-screen bg-gray-50 px-5 py-5 flex justify-between items-center ">
        <div className=" flex justify-center items-center gap-5">
          <div className=" text-black text-2xl">
            <CiMenuBurger />
          </div>
          <div className=" flex justify-center items-center gap-1 text-red-600 text-2xl">
            <FaYoutube />
            <h1 className=" text-black">YouTube</h1>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <input
            className="border border-gray-300  bg-gray-100 w-96 h-10 text-xl rounded-l-full placeholder:italic placeholder:capitalize  px-5 py-2 focus:ring-blue-300  "
            type="search"
            name="query"
            placeholder="search"
            onChange={(event) => {
              return console.log("you are writing some thing");
            }}
          />
          <button className=" flex justify-center text-2xl items-center rounded-r-full bg-gray-100 w-20 h-10 border border-gray-300  ">
            <FaSistrix />
          </button>
          <div className=" flex items-center pl-3 text-xl">
            <BsFillMicFill />
          </div>
        </div>

        <div className=" flex justify-between items-center gap-6">
          <div className=" text-2xl">
            <RiVideoAddLine />
          </div>
          <div className=" text-2xl">
            <IoMdNotificationsOutline />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-auto  px-4">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                alt="...."
                className="shadow-sm rounded-full max-w-full h-10 align-middle border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;