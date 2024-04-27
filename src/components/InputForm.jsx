import React, { useRef, useState } from "react";

function InputForm() {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    attachment: null,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      attachment: file,
    }));
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formValues, e.g., send it to an API
    console.log(formValues);

    // Reset the form after submission
    setFormValues(initialFormValues);
  };
  return (
    <div>
      <div className="text-[3rem]">Have Questions? Contact Us!</div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-md shadow-md w-full max-w-md"
        >
          <div className="grid grid-cols-2 mb-4">
            <div className="flex gap-5 text-black">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name "
                value={formValues.firstName}
                onChange={handleInputChange}
                className=" p-3 border border--300 placeholder-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                required
              />
            </div>
            <div className="flex gap-5 ml-4 text-black">
              <input
                type="text"
                id="LastName"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className="w-full -ml-1 placeholder-gray-700  p-3 border border--300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Here"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={formValues.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-700"
              required
            ></textarea>
          </div>
          <div className="mb-4 ">
            <input
              type="file"
              id="attachment"
              name="attachment"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              className="w-full p-3 border bg-white border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-red-300"
              onClick={handleButtonClick}
            >
              Select Attachment
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500"
              style={{ background: "linear-gradient( #8B0000 0%, #0000 90%)" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
