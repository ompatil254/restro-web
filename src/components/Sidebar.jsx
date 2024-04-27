import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { TiThMenu } from 'react-icons/ti';
 import { ImCancelCircle } from 'react-icons/im';
 import { IoHome } from 'react-icons/io5';
 import { RiTeamFill } from 'react-icons/ri';
 import { MdEventNote } from 'react-icons/md';
 import { IoRestaurant } from 'react-icons/io5';
 import { MdContacts } from 'react-icons/md';
 import { LuGalleryHorizontal } from "react-icons/lu";
 import { FaSearch } from "react-icons/fa";

 function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);

   const openBar = () => {
     setIsOpen(!isOpen);
   };
   
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

   const Navbarlist = [
     {
       Name: 'Home',
       path: "/",
       icon: <IoHome className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
     {
       Name: 'Gallery',
       path: "/Gallery",
       icon: <LuGalleryHorizontal className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
     {
       Name: 'Team',
       path: "/Team",
       icon: <RiTeamFill className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
     {
       Name: 'Event',
       path: "/Event",
       icon: <MdEventNote className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
     {
       Name: 'Dishes',
       path: "/Dishes",
       icon: <IoRestaurant className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
     {
       Name: 'Contact Us',
       path: "/ContactUs",
       icon: <MdContacts className='mt-5' style={{ fontSize: '1.3rem' }} />,
     },
   ];

   return (
     <>
       <div className='fixed'>
         <div>
           <motion.div
             animate={{ width: isOpen ? "200px" : "40px" }}
             className="h-[100vh] bg-zinc-950 p-3"
           >
             <div className="toggle flex align-center justify-between mt-3">
               <h1 className="text-[1.8rem]">{isOpen && "Menu"}</h1>
               {isOpen ? (
                 <ImCancelCircle
                   onClick={openBar}
                   style={{ fontSize: "1.8em" }}
                   className="mt-2"
                 />
               ) : (
                 <TiThMenu onClick={openBar} style={{ fontSize: "1.8rem" }} />
               )}
             </div>
             <motion.div
                 className="flex mt-3 justify-between align-center"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5 }}
               >
                 {isOpen && (
                   <input
                     className="border w-[130px] mt-3 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-zinc-900 text-zinc-900"
                     type="text"
                     onChange={handleInputChange}
                     placeholder="Search"
                   />
                 )}
                 <FaSearch onClick={openBar} className="text-[1.3rem] mt-5" />
               </motion.div>

             <nav>
               {Navbarlist.map((item, index) => (
                
                 <Link to={item.path}>
                   <motion.div
                     className="LIST flex justify-between align-center mt-5"
                     key={index}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5 }}
                   >
                     <span className="text-[1.3rem] mt-5">
                       {isOpen && item.Name}
                     </span>
                     <div>{item.icon}</div>
                   </motion.div>
                 </Link>
               ))}
             </nav>
           </motion.div>
         </div>
       </div>
     </>
   );
 }

 export default Sidebar;


