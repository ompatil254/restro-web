import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1704008740327.json'
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

function ErrorPage() {
  useGSAP(() => {
    gsap.from(".Lamme", { duration: 1, y: 100, opacity: 0, ease: 'power2.out' });

  })
  return (
    <>
    <div className=' mt-10  '>
      <div className='flex justify-center'><h1>ERROR 404</h1></div>
      <Lottie className=' h-[30rem]' animationData={animationData}
      />
      <div className='flex justify-center align-center flex-row'>
      <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out w-[23rem]'> <Link to="/">back home</Link></button>
      </div>
    </div>
   
    </>
  )
}

export default ErrorPage
