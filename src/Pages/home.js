import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen gap-3 xl:gap-10 ">
        <img src={Logo} className="h-80 w-80 xl:h-96 xl:w-96 " />
        <h1 className="text-5xl lg:text-5xl xl:text-8xl font-bold text-blue-400 ">FlexiForms</h1>
        <h1 className="text-4xl lg:text-4xl xl:text-7xl font-bold text-gray-400 mb-10 ">
          Your forms, Your rules
        </h1>
        <Link to="/page1">
          <button className="w-auto py-3 px-36 border-2 border-blue-600 rounded-[10px] text-[20px] hover:border-blue-600 hover:bg-blue-600 hover:text-white ">
            Page 1
          </button>
        </Link>
        <Link to="/page2">
          <button className="w-auto py-3 px-36 border-2 border-blue-600 rounded-[10px] text-[20px] hover:border-blue-600 hover:bg-blue-600 hover:text-white ">
            Page 2
          </button>
        </Link>
        <Link to="/page3">
          <button className="w-auto py-3 px-36 border-2 border-blue-600 rounded-[10px] text-[20px] hover:border-blue-600 hover:bg-blue-600 hover:text-white ">
            Page 3
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
