import React from "react";
import Message from "../components/Message";
import Sidebar from "../components/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Event() {
  return (
    <div className="flex relative">
      <div className="bg-gray-800 transition-all duration-300 z-10 absolute">
        <Sidebar />
      </div>
      <div className="w-[100rem] flex-grow transition-all duration-300 z-0 absolute ml-[45px] p-4">
        <div className="flex">
          <div>
            <Message />
          </div>
          {/* <div className="h-screen w-[40rem] bg-gray-500">
            {" "} */}
          {/* <Profile /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Event;
