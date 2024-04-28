import React from "react";
import Sidebar from "../components/Sidebar";

function Dishes() {
  return (
    <div className="flex relative">
      <div className="bg-gray-800 transition-all duration-300 z-10 absolute">
        <Sidebar />
      </div>
      <div className="flex-grow transition-all duration-300 z-0 absolute ml-[5vw] p-4"></div>
    </div>
  );
}

export default Dishes;
