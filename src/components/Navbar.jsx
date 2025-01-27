import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-10 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[90%] mx-auto sm:px-5 md:px-10 sm:py-5 md:py-8 flex justify-between items-center bg-blue-50 opacity-90 rounded-full">
        <div className="text-[30px] text-blue-800 font-bold">
          <Link to="/">PIMS</Link>
        </div>
        <div className="hidden md:flex items-center gap-5 text-black">
          <>
            <Link to="/signin">
              <p className="text-[18px] text-gray-800">Appointments</p>
            </Link>
            <Link to="/signin">
              <p className="text-[18px] text-gray-800">About</p>
            </Link>
            <Link to="/signin">
              <p className="text-[18px] text-gray-800">FAQ</p>
            </Link>
            {/* <Link to="/signin">
              <p></p>
            </Link> */}
            <Link to="/signin">
              <button className="text-[18px] bg-blue-700 shadow-2xl shadow-blue-600 h-14  text-white font-light text-lg py-2 px-6 rounded-r-full hover:bg-blue-950 hover:cursor-pointer transition duration-300 flex items-center">
                Sign In
              </button>
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
