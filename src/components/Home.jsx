// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ReactTyped } from "react-typed";

// import {
//   FaLinkedin,
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaJava,
//   FaDownload,
//   FaWhatsapp,
//   FaTelegramPlane,
// } from "react-icons/fa";

// import { FaSquareFacebook } from "react-icons/fa6";

// // import pic from "../../public/Dinesh.jpg";
// import pic from "../assets/DineshPortfolioImage.jpeg";


// import JavaFullstack from "../../public/Fullstack.jpg";
// import Cprogramming from "../../public/Cprogramming.jpg";
// import Codethon from "../../public/codethon.jpg";
// import Accenture from "../../public/accenture.png";
// import AWS from "../../public/AWS.png";
// import Deloitte from "../../public/Deloitte.png";

// import FYMarksheet from "../../public/FYBCS.pdf";
// import SYMarksheet from "../../public/SY.BCS.pdf";
// import TYMarksheet from "../../public/TYBCS.pdf";

// function Home() {
//   const [showCertModal, setShowCertModal] = useState(false);
//   const [showMarkModal, setShowMarkModal] = useState(false);
//   const [selectedCert, setSelectedCert] = useState(null);

//   const certificates = [
//     { name: "Full Stack Development", file: JavaFullstack },
//     { name: "C Programming", file: Cprogramming },
//     { name: "Codethon", file: Codethon },
//     { name: "Accenture", file: Accenture },
//     { name: "AWS", file: AWS },
//     { name: "Deloitte", file: Deloitte },
//   ];

//   const marksheets = [
//     { name: "First Year (BCS)", file: FYMarksheet },
//     { name: "Second Year (BCS)", file: SYMarksheet },
//     { name: "Third Year (BCS)", file: TYMarksheet },
//   ];

//   return (
//     <>
//       <section
//         name="Home"
//         className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center"
//       >
//         <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 w-full">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
            
//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 order-2 md:order-1"
//             >
//               {/* Small Intro */}
//               <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
//                 Welcome To My Portfolio
//               </span>

//               {/* Heading */}
//               <div className="space-y-3">
//                 <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
//                   Hi, I'm{" "}
//                   <span className="text-purple-600">
//                     Dinesh Mane
//                   </span>
//                 </h2>

//                 <div className="flex flex-wrap items-center text-2xl md:text-4xl font-bold gap-2">
//                   <span className="text-gray-700">
//                     I'm a
//                   </span>

//                   <ReactTyped
//                     strings={[
//                       "Full Stack Developer",
//                       "React Developer",
//                       "Java Developer",
//                     ]}
//                     typeSpeed={50}
//                     backSpeed={40}
//                     loop
//                     className="text-purple-600"
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 leading-7 text-justify">
//                 Passionate Computer Science student with
//                 hands-on experience in modern web
//                 development technologies including React,
//                 Java, Spring Boot, Express.js, and MongoDB.
//                 I enjoy building scalable full-stack
//                 applications with clean UI and efficient
//                 backend systems.
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-wrap gap-4 pt-2">
//                 <button
//                   onClick={() => setShowCertModal(true)}
//                   className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2 cursor-pointer"
//                 >
//                   <FaDownload />
//                   Certifications
//                 </button>

//                 <button
//                   onClick={() => setShowMarkModal(true)}
//                   className="px-6 py-3 rounded-xl border border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer"
//                 >
//                   <FaDownload />
//                   Marksheets
//                 </button>
//               </div>

//               {/* Social + Skills */}
//               <div className="grid sm:grid-cols-2 gap-6 pt-6">
                
//                 {/* Social Links */}
//                 <div className="bg-white rounded-2xl shadow-md p-5">
//                   <h3 className="font-semibold text-gray-800 mb-4">
//                     Connect With Me
//                   </h3>

//                   <div className="flex gap-4 text-2xl">
//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-purple-600 hover:scale-110 transition duration-300"
//                     >
//                       <FaSquareFacebook />
//                     </a>

//                     <a
//                       href="https://www.linkedin.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-purple-600 hover:scale-110 transition duration-300"
//                     >
//                       <FaLinkedin />
//                     </a>

//                     <a
//                       href="https://wa.me/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-purple-600 hover:scale-110 transition duration-300"
//                     >
//                       <FaWhatsapp />
//                     </a>

//                     <a
//                       href="https://t.me/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-purple-600 hover:scale-110 transition duration-300"
//                     >
//                       <FaTelegramPlane />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Skills */}
//                 <div className="bg-white rounded-2xl shadow-md p-5">
//                   <h3 className="font-semibold text-gray-800 mb-4">
//                     Tech Stack
//                   </h3>

//                   <div className="flex gap-4 text-3xl">
//                     <FaHtml5 className="text-orange-500 hover:scale-110 transition duration-300" />

//                     <FaCss3Alt className="text-blue-500 hover:scale-110 transition duration-300" />

//                     <FaReact className="text-cyan-500 hover:scale-110 transition duration-300" />

//                     <FaJava className="text-red-500 hover:scale-110 transition duration-300" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex justify-center order-1 md:order-2"
//             >
//               <div className="relative">
//                 {/* Background Blur */}
//                 <div className="absolute inset-0 bg-purple-400 blur-3xl opacity-20 rounded-full"></div>

//                 {/* Image */}
//                 <motion.img
//                   whileHover={{ scale: 1.03 }}
//                   src={pic}
//                   alt="profile"
//                   className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] object-cover rounded-full border-[8px] border-white shadow-2xl"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CERTIFICATE MODAL */}
//    {/* CERTIFICATE MODAL */}
// <AnimatePresence>
//   {showCertModal && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="
//         fixed inset-0 z-50
//         flex items-center justify-center
//         bg-black/40 backdrop-blur-sm
//         px-3 py-4
//       "
//     >
//       {/* Modal Container */}
//       <motion.div
//         initial={{ scale: 0.8, y: 40 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.8, y: 40 }}
//         transition={{ duration: 0.3 }}
//         className="
//           relative
//           bg-white
//           rounded-3xl
//           shadow-2xl
//           w-full
//           max-w-5xl
//           max-h-[90vh]
//           overflow-y-auto
//           p-4 md:p-6
//         "
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => {
//             setShowCertModal(false);
//             setSelectedCert(null);
//           }}
//           className="
//             absolute top-4 right-4
//             text-2xl text-gray-600
//             hover:text-red-500
//             transition duration-300
//             cursor-pointer
//           "
//         >
//           ✖
//         </button>

//         {/* Heading */}
//         <div className="text-center mb-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             My Certifications
//           </h2>

//           <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-3 rounded-full"></div>
//         </div>

//         {/* Gallery View */}
//         {!selectedCert ? (
//           <div
//             className="
//               grid
//               grid-cols-1
//               sm:grid-cols-2
//               lg:grid-cols-3
//               gap-5
//             "
//           >
//             {certificates.map((cert, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setSelectedCert(cert)}
//                 className="
//                   rounded-2xl
//                   overflow-hidden
//                   bg-white
//                   border border-gray-200
//                   shadow-md
//                   hover:shadow-xl
//                   transition duration-300
//                   cursor-pointer
//                 "
//               >
//                 {/* Certificate Image */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={cert.file}
//                     alt={cert.name}
//                     className="
//                       w-full
//                       h-44 sm:h-48 md:h-52
//                       object-cover
//                       hover:scale-105
//                       transition duration-500
//                     "
//                   />
//                 </div>

//                 {/* Certificate Name */}
//                 <div
//                   className="
//                     p-4
//                     bg-gradient-to-r
//                     from-purple-600
//                     to-blue-500
//                     text-white
//                     text-center
//                     font-semibold
//                     text-sm md:text-base
//                   "
//                 >
//                   {cert.name}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           /* Single Certificate View */
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex flex-col items-center"
//           >
//             {/* Large Certificate */}
//             <img
//               src={selectedCert.file}
//               alt={selectedCert.name}
//               className="
//                 w-full
//                 max-h-[70vh]
//                 object-contain
//                 rounded-2xl
//                 shadow-lg
//               "
//             />

//             {/* Certificate Title */}
//             <h3 className="mt-5 text-xl font-semibold text-gray-800 text-center">
//               {selectedCert.name}
//             </h3>

//             {/* Back Button */}
//             <button
//               onClick={() => setSelectedCert(null)}
//               className="
//                 mt-5
//                 px-6 py-3
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-purple-600
//                 to-blue-500
//                 text-white
//                 font-medium
//                 hover:scale-105
//                 transition duration-300
//                 shadow-md
//                 cursor-pointer
//               "
//             >
//               Back To Gallery
//             </button>
//           </motion.div>
//         )}
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>

//       {/* MARKSHEET MODAL */}
//       <AnimatePresence>
//         {showMarkModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
//           >
//             <motion.div
//               initial={{ y: 40 }}
//               animate={{ y: 0 }}
//               exit={{ y: 40 }}
//               className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-xl relative"
//             >
//               <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//                 My Marksheets
//               </h2>

//               <div className="space-y-4">
//                 {marksheets.map((mark, index) => (
//                   <button
//                     key={index}
//                     onClick={() => window.open(mark.file, "_blank")}
//                     className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-md"
//                   >
//                     {mark.name}
//                   </button>
//                 ))}
//               </div>

//               {/* Close */}
//               <button
//                 onClick={() => setShowMarkModal(false)}
//                 className="absolute top-4 right-5 text-2xl text-gray-600 hover:text-red-500"
//               >
//                 ✖
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";

import {
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDownload,
  FaWhatsapp,
  FaTelegramPlane,
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

import { FaSquareFacebook } from "react-icons/fa6";

const JavaFullstack = "/Fullstack.jpg";
const Cprogramming = "/Cprogramming.jpg";
const Codethon = "/codethon.jpg";
const Accenture = "/accenture.png";
const AWS = "/aws.png";
const Deloitte = "/Deloitte.png";

const FYMarksheet = "/FYBCS.pdf";
const SYMarksheet = "/SY.BCS.pdf";
const TYMarksheet = "/TYBCS.pdf";
const Pic = "/Dinesh.jpg";

function Home() {
  const [showCertModal, setShowCertModal] = useState(false);
  const [showMarkModal, setShowMarkModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // ================= CHATBOT =================

  const [showChatBot, setShowChatBot] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    location: "",
  });

  // Auto Open After 2 Seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Auto Close After 5 Seconds
  useEffect(() => {
    let closeTimer;

    if (showChatBot) {
      closeTimer = setTimeout(() => {
        setShowChatBot(false);
      }, 10000);
    }

    return () => clearTimeout(closeTimer);
  }, [showChatBot]);

  const handleChatInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank You ${formData.firstName} ${formData.lastName} 🎉`
    );

    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      location: "",
    });

    setShowChatBot(false);
  };

  // ===========================================

  const certificates = [
    { name: "Full Stack Development", file: JavaFullstack },
    { name: "C Programming", file: Cprogramming },
    { name: "Codethon", file: Codethon },
    { name: "Accenture", file: Accenture },
    { name: "AWS", file: AWS },
    { name: "Deloitte", file: Deloitte },
  ];

  const marksheets = [
    { name: "First Year (BCS)", file: FYMarksheet },
    { name: "Second Year (BCS)", file: SYMarksheet },
    { name: "Third Year (BCS)", file: TYMarksheet },
  ];

  return (
    <>
      {/* ================= HOME SECTION ================= */}

      <section
        name="Home"
        className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              {/* Intro */}
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                Welcome To My Portfolio
              </span>

              {/* Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-purple-600">
                    Dinesh Mane
                  </span>
                </h2>

                <div className="flex flex-wrap items-center text-2xl md:text-4xl font-bold gap-2">
                  <span className="text-gray-700">
                    I'm a
                  </span>

                  <ReactTyped
                    strings={[
                      "Full Stack Developer",
                      "React Developer",
                      "Java Developer",
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                    className="text-purple-600"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-7 text-justify">
                Passionate Computer Science student with
                hands-on experience in modern web
                development technologies including React,
                Java, Spring Boot, Express.js, and MongoDB.
                I enjoy building scalable full-stack
                applications with clean UI and efficient
                backend systems.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaDownload />
                  Certifications
                </button>

                <button
                  onClick={() => setShowMarkModal(true)}
                  className="px-6 py-3 rounded-xl border border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaDownload />
                  Marksheets
                </button>
              </div>

              {/* Social + Skills */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">

                {/* Social */}
                <div className="bg-white rounded-2xl shadow-md p-5">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Connect With Me
                  </h3>

                  <div className="flex gap-4 text-2xl">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 hover:scale-110 transition duration-300"
                    >
                      <FaSquareFacebook />
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 hover:scale-110 transition duration-300"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 hover:scale-110 transition duration-300"
                    >
                      <FaWhatsapp />
                    </a>

                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 hover:scale-110 transition duration-300"
                    >
                      <FaTelegramPlane />
                    </a>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-2xl shadow-md p-5">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Tech Stack
                  </h3>

                  <div className="flex gap-4 text-3xl">
                    <FaHtml5 className="text-orange-500 hover:scale-110 transition duration-300" />

                    <FaCss3Alt className="text-blue-500 hover:scale-110 transition duration-300" />

                    <FaReact className="text-cyan-500 hover:scale-110 transition duration-300" />

                    <FaJava className="text-red-500 hover:scale-110 transition duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative">

                {/* Blur */}
                <div className="absolute inset-0 bg-purple-400 blur-3xl opacity-20 rounded-full"></div>

                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={pic}
                  alt="profile"
                  className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] object-cover rounded-full border-[8px] border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CHATBOT ================= */}

      {/* Floating Assistant Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChatBot(!showChatBot)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-purple-600
          to-blue-500
          text-white
          shadow-2xl
          flex
          items-center
          justify-center
          text-2xl
          cursor-pointer
        "
      >
        <FaRobot />
      </motion.button>

      {/* Chat Assistant */}
      <AnimatePresence>
        {showChatBot && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              bottom-24
              right-5
              w-[350px]
              max-w-[95%]
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              z-50
              border border-gray-200
            "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 flex justify-between items-center">
              <div>
                <h2 className="text-white font-semibold text-lg">
                  Portfolio Assistant 🤖
                </h2>

                <p className="text-white/80 text-sm">
                  Online Now
                </p>
              </div>

              <button
                onClick={() => setShowChatBot(false)}
                className="text-white text-xl cursor-pointer"
              >
                ✖
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-gray-50 h-[420px] overflow-y-auto">

              {/* Assistant Message */}
              <div className="flex mb-4">
                <div className="bg-white shadow-md rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-gray-700">
                    👋 Hello Welcome To My Portfolio
                  </p>

                  <p className="text-sm text-gray-700 mt-2">
                    Please Enter Your Details Below.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleChatSubmit}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChatInput}
                  required
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-purple-500
                  "
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChatInput}
                  required
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-purple-500
                  "
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChatInput}
                  required
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-purple-500
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChatInput}
                  required
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-purple-500
                  "
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChatInput}
                  required
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-purple-500
                  "
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-blue-500
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:scale-[1.02]
                    transition
                    duration-300
                    shadow-lg
                    cursor-pointer
                  "
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CERTIFICATE MODAL ================= */}

      <AnimatePresence>
        {showCertModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3 py-4">

            <motion.div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-4 md:p-6">

              {/* Close */}
              <button
                onClick={() => {
                  setShowCertModal(false);
                  setSelectedCert(null);
                }}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
              >
                ✖
              </button>

              {/* Heading */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  My Certifications
                </h2>
              </div>

              {!selectedCert ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setSelectedCert(cert)}
                      className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                    >
                      <img
                        src={cert.file}
                        alt={cert.name}
                        className="w-full h-52 object-cover"
                      />

                      <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center font-semibold">
                        {cert.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src={selectedCert.file}
                    alt={selectedCert.name}
                    className="w-full max-h-[70vh] object-contain rounded-2xl shadow-lg"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-gray-800">
                    {selectedCert.name}
                  </h3>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="mt-5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  >
                    Back To Gallery
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MARKSHEET MODAL ================= */}

      <AnimatePresence>
        {showMarkModal && (
          <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">

            <motion.div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-xl relative">

              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                My Marksheets
              </h2>

              <div className="space-y-4">
                {marksheets.map((mark, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(mark.file, "_blank")}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-md"
                  >
                    {mark.name}
                  </button>
                ))}
              </div>

              {/* Close */}
              <button
                onClick={() => setShowMarkModal(false)}
                className="absolute top-4 right-5 text-2xl text-gray-600 hover:text-red-500"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;