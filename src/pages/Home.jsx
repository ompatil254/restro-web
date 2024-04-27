import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleButtonClick1 = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e, inputType) => {
    const value = e.target.value;
    switch (inputType) {
      case "input1":
        setInput1(value);
        break;
      case "input2":
        setInput2(value);
        break;
      case "input3":
        setInput3(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("Input 3:", input3);
    console.log("Input 4:", input1);
    console.log("Input 5:", input2);
    console.log("Input 6:", input3);
    // Close the overlay
    setIsOpen(false);
    // Reset input fields
    setInput1("");
    setInput2("");
    setInput3("");
  };
  
  const courses = [
    {
      id: 1,
      photo: "course1.jpg",
      title: "Course 1",
      description: "Description of Course 1",
      location: {
        name: "Location 1",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.091999862962!2d-122.08568138467919!3d37.42200287981901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a62463b91%3A0x92054bc9d92e6f05!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sca!4v1637219491366!5m2!1sen!2sca",
      },
    },
    {
      id: 2,
      photo: "course2.jpg",
      title: "Course 2",
      description: "Description of Course 2",
      location: {
        name: "Location 2",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.111187167148!2d-122.47598748467924!3d37.80503607975219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e9fc8d6da3b%3A0x89bbd36326e8bde8!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sca!4v1637219517070!5m2!1sen!2sca",
      },
    },
    // Add more courses as needed
  ];

  const [selectedButton, setSelectedButton] = useState("ongoing");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="flex">
        <div className="transition-all duration-300 z-10">
          <Sidebar />
        </div>
        <div className="flex-grow transition-all duration-300 z-0 ml-[45px] p-4 justify-center items-center">
          <div className="container mx-auto">
            {/* Profile Info */}
            <div className=" p-6 rounded-md mb-8">
              <div className="flex justify-center items-center mb-4">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=180"
                  alt="Profile Photo"
                  className="h-32 w-32 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-[3rem] font-semibold">Khush Kothari</h2>
                  <p className="text-gray-600 text-[2rem]">Sardar Patel Institute Of Technology, 2nd Year, Extc</p>
                  
                </div>
                
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-8 -mt-12">
            <button
  className={`px-4 py-2 w-[30rem] rounded-md text-white border border-gray-400 ${
    selectedButton === "ongoing"
      ? "bg-gray-700"
      : "bg-transparent"
  }`}
  onClick={() => handleButtonClick("ongoing")}
>
  Ongoing Courses
</button>


              <button
                className={`px-4 py-2 w-[30rem] rounded-md text-white border border-gray-400  ${
                  selectedButton === "completed"
                    ? "bg-gray-700"
                    : "bg-transparent"
                }`}
                onClick={() => handleButtonClick("completed")}
              >
                Completed Courses
              </button>
              <button
                className={`px-4 py-2 w-[30rem] rounded-md text-white border border-gray-400  ${
                  selectedButton === "recommended"
                    ? "bg-gray-700"
                    : "bg-transparent"
                }`}
                onClick={() => handleButtonClick("recommended")}
              >
                Recommended Courses
              </button>
            </div>
    

            <button
        className="w-full mb-3 -mt-3 border border-gray-200 p-3 right-0"
        onClick={handleButtonClick1}
      >
        Study Planner AI
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-400 md:w-[1080px] relative   rounded-md p-6">
            <div className="flex justify-center">
            <h2 className="text-[3rem]  text-black font-semibold mb-4">Study Planner AI</h2>
            <div className="text-black font-bold mt-[2px] absolute right-10 text-xl"><a href="/">X</a></div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name of 1st Subject"
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input1}
                onChange={(e) => handleInputChange(e, "input1")}
              />
              <input
                type="text"
                placeholder="Difficulty (Low,Medium,High)"
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input2}
                onChange={(e) => handleInputChange(e, "input2")}
              />
              <input
                type="text"
                placeholder="Name of 2nd Subject"
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input3}
                onChange={(e) => handleInputChange(e, "input3")}
              />
              <input
                type="text"
                placeholder="Difficulty (Low,Medium,High)"
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input3}
                onChange={(e) => handleInputChange(e, "input4")}
              />
              <input
                type="text"
                placeholder="Days left for Exam "
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input3}
                onChange={(e) => handleInputChange(e, "input5")}
              />
              <input
                type="text"
                placeholder="Preferred Learning Style (visual, auditory, kinesthetic)"
                className="block w-full mb-4 p-2 border border-gray-800 rounded-md"
                value={input3}
                onChange={(e) => handleInputChange(e, "input6")}
              />
              <button
                type="submit"
                className="border  border-black text-black px-4 py-2 rounded-md "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}


            {/* Render Selected Section */}
            {selectedButton === "ongoing" && (
              <div className="border border-gray-600 p-6 rounded-md">
                {/* Render Ongoing Courses */}
                <h3 className="text-lg font-semibold mb-4">Ongoing Courses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="max-w-[300px]  mb-4">
          <div className="border rounded-md p-4">
            <img src={course.photo} alt={course.title} className="w-full h-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            {/* Map */}
            <div className="relative aspect-w-16 aspect-h-9">
              {/* Map component (Replace this with your map component) */}
              <iframe
                src={course.location.mapUrl}
                title={course.location.name}
                className="absolute inset-0 w-full h-full rounded-md"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
                {/* Your ongoing courses content here */}
              </div>
            )}

            {selectedButton === "completed" && (
              <div className="border border-gray-600 p-6 rounded-md">
                {/* Render Completed Courses */}
                <h3 className="text-lg font-semibold mb-4">
                  Completed Courses
                </h3>
                {/* Your completed courses content here */}
              </div>
            )}

            {selectedButton === "recommended" && (
              <div className="border border-gray-600 p-6 rounded-md">
                {/* Render Recommended Courses */}
                <h3 className="text-lg font-semibold mb-4">
                  Recommended Courses
                </h3>
                {/* Your recommended courses content here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
