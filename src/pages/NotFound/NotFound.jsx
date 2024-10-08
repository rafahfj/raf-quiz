import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center w-full h-screen">
      <h1 className="font-bold text-[8rem] text-indigo-600 text-primary animate-bounce">
        404
      </h1>
      <div className="bg-primary md:mx-8 my-6 md:my-0 w-24 md:w-1 h-1 md:h-24"></div>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl text-center">
          Sorry, This page isn't available
        </h2>
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-neutral-50 p-2 rounded-full hover:text-indigo-600">
            <span className="text-xl"> Go To Home Page</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
