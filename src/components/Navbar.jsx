// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import pic from "../../public/Dinesh.jpg";
// import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

// function Navbar() {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     { id: 1, text: "Home", icon: <FaHome /> },
//     { id: 2, text: "About", icon: <FaUser /> },
//     { id: 3, text: "Projects", icon: <FaProjectDiagram /> },
//     { id: 4, text: "Contact", icon: <FaEnvelope /> },
//   ];

//   // Variants
//   const sidebarVariants = {
//     hidden: { x: "-100%" },
//     visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
//   };

//   const linkVariants = {
//     hidden: { x: -20, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
//   };

//   return (
//     <>
//        {/* Top Navbar */}
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50  bg-white">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div className="flex space-x-2 items-center">
//             <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
//             <div>
//               <h1 className="font-semibold text-xl cursor-pointer leading-tight">
//                 Dines<span className="text-green-500 text-2xl">h</span>
//               </h1>
//               <p className="text-sm -mt-1">Web Developer</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-8">
//             {navItems.map(({ id, text }) => (
//               <li
//                 className="hover:scale-105 duration-200 cursor-pointer"
//                 key={id}
//               >
//                 <Link
//                   to={text}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>



//         {/* Mobile toggle */}
//         <div className="md:hidden cursor-pointer" onClick={() => setMenu(true)}>
//           <AiOutlineMenu size={24} />
//         </div>
//       </div>
//       </div>

//       {/* Overlay */}
//       {menu && (
//         <motion.div
//           className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm z-40"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setMenu(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <motion.div
//         className="fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-purple-500 to-blue-300 z-50"
//         variants={sidebarVariants}
//         initial="hidden"
//         animate={menu ? "visible" : "hidden"}
//       >
//         {/* Close button */}
//         <div className="flex justify-end p-4 cursor-pointer" onClick={() => setMenu(false)}>
//           <IoCloseSharp size={24} className="text-white" />
//         </div>

//         {/* Links */}
//         <motion.ul
//           className="flex flex-col items-start justify-center pl-6 space-y-6 text-xl mt-4"
//           initial="hidden"
//           animate={menu ? "visible" : "hidden"}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {navItems.map(({ id, text, icon }) => (
//             <motion.li
//               key={id}
//               variants={linkVariants}
//               className="flex items-center gap-3 text-white font-semibold cursor-pointer hover:scale-105 transition-transform duration-200"
//             >
//               {icon}
//               <Link
//                 onClick={() => setMenu(false)}
//                 to={text}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {text}
//               </Link>
//               <hr/>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </>
//   );
// }

// export default Navbar;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

// import pic from "../../public/Dinesh.jpg";
import pic from "../assets/DineshPortfolioImage.jpeg";
function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "About",
      icon: <FaUser />,
    },
    {
      id: 3,
      text: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      id: 4,
      text: "Contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={pic}
                alt="profile"
                className="w-11 h-11 rounded-full object-cover border-2 border-purple-500"
              />

              <div>
                <h1 className="text-xl font-bold leading-tight">
                  Dines
                  <span className="text-purple-600">h</span>
                </h1>

                <p className="text-xs text-gray-500">
                     Java Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map(({ id, text }) => (
                <motion.li
                  whileHover={{ y: -2 }}
                  key={id}
                  className="relative group cursor-pointer text-gray-700 font-medium"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                  >
                    {text}
                  </Link>

                  {/* Hover line */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.li>
              ))}
            </ul>

            {/* Resume Button */}
            <div className="hidden md:block">
               <a href="/Java Fullstack Developer.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:scale-105 transition duration-300 shadow-md">
                Resume
              </button>
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden text-2xl cursor-pointer text-gray-800"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menu && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="fixed top-0 left-0 w-[80%] sm:w-[60%] h-screen bg-white z-50 shadow-2xl"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between p-5 border-b">
                <div className="flex items-center gap-3">
                  <img
                    src={pic}
                    alt="profile"
                    className="w-12 h-12 rounded-full border-2 border-purple-500"
                  />

                  <div>
                    <h1 className="font-bold text-lg">
                      Dinesh
                    </h1>

                    <p className="text-sm text-gray-500">
                      Web Developer
                    </p>
                  </div>
                </div>

                {/* <AiOutlineClose
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setMenu(false)}
                /> */}
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col px-6 py-8 gap-6">
                {navItems.map(({ id, text, icon }) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: id * 0.1 }}
                  >
                    <Link
                      onClick={() => setMenu(false)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-purple-600 transition duration-300 cursor-pointer"
                    >
                      <span className="text-purple-600 text-xl">
                        {icon}
                      </span>

                      {text}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Button */}
              <div className="absolute bottom-10 left-0 w-full px-6">
                <a href="/Java Fullstack Developer.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition duration-300">
                    Download Resume
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;