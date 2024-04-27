import React from "react";
import Sidebar from "../components/Sidebar";

function Dishes() {
  return (
    <div className="flex relative">
      <div className="bg-gray-800 transition-all duration-300 z-10 absolute">
        <Sidebar />
      </div>
      <div className="flex-grow transition-all duration-300 z-0 absolute ml-[5vw] p-4">
        <div>
        <p className="text-[6vw] sm:text-[4vw] md:text-[5vw] lg:text-[6vw]">
          <span style={{ color: "#B68EF9" }}>Seamless</span> Test 
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[2.5vw] lg:text-[3vw] -mt-[1vw] md:-mt-[2vw] ml-[10rem] md:ml-[7vw] opacity-85">
          Automation In <span style={{ color: "#B68EF9" }}>Seconds</span>
        </p> 
        </div>
      </div>
    </div>
  );
}

export default Dishes;
