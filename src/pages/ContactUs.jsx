import React from "react";
import Sidebar from "../components/Sidebar";
import InputForm from "../components/InputForm";
function ContactUs() {
  return (
    <>
      <div className="BING flex relative"  style={{ backgroundImage: 'url("/C-image.png")', backgroundSize: 'cover', backgroundPosition: 'top' }} >
        <div className="transition-all duration-300 z-10 ">
          <Sidebar />
        </div>
        <div className="flex-grow transition-all duration-300 z-0 absolute ml-[45px]  ">
          <div className="relative h-screen z-0 p-4">
            {/* <h1 className="">CONTACT US</h1> */}
            <div className="flex mt-10">
            <InputForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
