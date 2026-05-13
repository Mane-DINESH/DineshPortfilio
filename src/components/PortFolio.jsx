// import React, { useState } from "react";
// import java from "../../public/java.png";
// import Css from "../../public/css.jpg";
// import JavaScript from "../../public/javascript.png";
// import reactjs from "../../public/reactjs.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import javascriptvideo from '../../public/javascript1.mp4';
// import javascriptvideo1 from '../../public/javascript2.mp4';
// import cssvideo from '../../public/css1.mp4';
// import cssvideo1 from '../../public/css2.mp4';
// import javavideo from '../../public/java.mp4';
// import reactvideo from '../../public/React1.mp4';

// function PortFolio() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoList, setVideoList] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active video index

//   const cardItem = [
//     {
//       id: 1,
//       logo: JavaScript,
//       name: "JavaScript Project Modules",
//       videos: [javascriptvideo, javascriptvideo1],
//       source: "https://github.com/Mane-DINESH/js-project.git",
//     },
//     {
//       id: 2,
//       logo: Css,
//       name: "CSS Project Modules",
//       videos: [cssvideo, cssvideo1],
//       source: "https://github.com/Mane-DINESH/cssproject",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "React Project Modules",
//       videos: [reactvideo],
//       source: "https://github.com/Mane-DINESH/react-projects.git",
//     },
//     {
//       id: 4,
//       logo: java,
//       name: "Java Project Modules",
//       videos: [javavideo],
//       source: "https://github.com/Mane-DINESH/KalikaFootwearOnlineShoping.git",
//     },
//   ];

//   const openModal = (videos) => {
//     setVideoList(videos);
//     setIsModalOpen(true);
//     setActiveIndex(0); // ✅ Reset to first video
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoList([]);
//     setActiveIndex(0);
//   };

//   return (
//     <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
//       <div className="text-center" style={{marginBottom:"10%"}}>
//         <h1 className="text-3xl md:text-4xl font-bold mb-3">Projects</h1>
//         <span className="text-gray-600 underline font-semibold tracking-wide">
//           Featured Projects & Modules
//         </span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10"  >
//         {cardItem.map(({ id, logo, name, videos, source }) => (
//           <div
//             key={id}
//             className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-5 text-center transform hover:scale-105 transition duration-300 border border-gray-200"
//           >
//             <div className="flex justify-center">
//               <img
//                 src={logo}
//                 alt={name}
//                 className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md object-cover"
//               />
//             </div>

//             <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
//               {name}
//             </h2>

//             <div className="flex justify-center space-x-4 mt-6">
//               <button
//                 onClick={() => openModal(videos)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
//               >
//                 Video
//               </button>
//               <button
//                 onClick={() => window.open(source, "_blank")}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
//               >
//                 Source Code
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Video Modal with Slider */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
//           <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-lg relative">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-semibold">Project Video Modules</h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-red-600 text-2xl"
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="w-full h-[60vh] px-4 py-2">
//               <Swiper
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper h-full"
//                 onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ✅ Track slide change
//               >
//                 {videoList.map((video, index) => (
//                   <SwiperSlide key={index} className="w-full h-full">
//                     {video.endsWith(".mp4") ? (
//                       <video
//                         src={video}
//                         controls
//                         muted
//                         autoPlay={index === activeIndex} // ✅ Only active video plays
//                         className="w-full h-full"
//                       />
//                     ) : (
//                       <iframe
//                         src={video}
//                         title={`Video ${index + 1}`}
//                         className="w-full h-full"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       ></iframe>
//                     )}
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PortFolio;


// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import java from "../../public/java.png";
// import Css from "../../public/css.jpg";
// import JavaScript from "../../public/javascript.png";
// import reactjs from "../../public/reactjs.png";
// import Ai from "../assets/images.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// import javascriptvideo from "../../public/javascript1.mp4";
// import javascriptvideo1 from "../../public/javascript2.mp4";
// import cssvideo from "../../public/css1.mp4";
// import cssvideo1 from "../../public/css2.mp4";
// import javavideo from "../../public/java.mp4";
// import reactvideo from "../../public/React1.mp4";

// function PortFolio() {
//   const [isModalOpen, setIsModalOpen] =
//     useState(false);

//   const [videoList, setVideoList] = useState([]);

//   const [activeIndex, setActiveIndex] =
//     useState(0);

//   // FILTER CATEGORY
//   const [selectedCategory, setSelectedCategory] =
//     useState("All");

//   // SHOW MORE
//   const [showAll, setShowAll] = useState(false);

//   // ================= PROJECT DATA =================

//   const cardItem = [
//     {
//       id: 1,
//       category: "Frontend",
//       technology: "JavaScript",
//       logo: JavaScript,
//       name: "JavaScript Projects",
//       videos: [
//         javascriptvideo,
//         javascriptvideo1,
//       ],
//       source:
//         "https://github.com/Mane-DINESH/js-project.git",
//     },

//     {
//       id: 2,
//       category: "Frontend",
//       technology: "CSS",
//       logo: Css,
//       name: "CSS Animation Projects",
//       videos: [cssvideo, cssvideo1],
//       source:
//         "https://github.com/Mane-DINESH/cssproject",
//     },

//     {
//       id: 3,
//       category: "FullStack",
//       technology: "React + Spring Boot",
//       logo: reactjs,
//       name: "E-Commerce Project",
//       videos: [reactvideo],
//       source:
//         "https://github.com/Mane-DINESH/react-projects.git",
//     },

//     {
//       id: 4,
//       category: "FullStack",
//       technology: "Servlet + JSP",
//       logo: java,
//       name: "E-Commerce Project",
//       videos: [javavideo],
//       source:
//         "https://github.com/Mane-DINESH/KalikaFootwearOnlineShoping.git",
//     },

//     {
//       id: 5,
//       category: "AI API Integration",
//       technology: "React + Ai Intrigation",
//       logo: Ai,
//       name: "MJ ChatBot",
//       videos: [javavideo],
//       source: "https://github.com/",
//     },

//     {
//       id: 6,
//       category: "Frontend",
//       technology: "React",
//       logo: reactjs,
//       name: "React Dashboard",
//       videos: [reactvideo],
//       source: "https://github.com/",
//     },

//     {
//       id: 7,
//       category: "Frontend",
//       technology: "Tailwind CSS",
//       logo: Css,
//       name: "Portfolio Website",
//       videos: [cssvideo],
//       source: "https://github.com/",
//     },

//     {
//       id: 8,
//       category: "Backend",
//       technology: "Spring Boot",
//       logo: java,
//       name: "Banking Management System",
//       videos: [javavideo],
//       source: "https://github.com/",
//     },

//     {
//       id: 9,
//       category: "FullStack",
//       technology: "MERN Stack",
//       logo: reactjs,
//       name: "Food Delivery App",
//       videos: [reactvideo],
//       source: "https://github.com/",
//     },
//   ];

//   // ================= CATEGORY LIST =================

// const categories = useMemo(
//   () => [
//     "All",
//     "Frontend",
//     "AI API Integration",
//     "FullStack",
//   ],
//   []
// );

//   // ================= FILTER PROJECTS =================

//   const filteredProjects = useMemo(() => {
//     return selectedCategory === "All"
//       ? cardItem
//       : cardItem.filter(
//           (item) =>
//             item.category ===
//             selectedCategory
//         );
//   }, [selectedCategory]);

//   // ================= SHOW ONLY 4 INITIALLY =================

//   const displayedProjects = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   // ================= OPEN MODAL =================

//   const openModal = (videos) => {
//     setVideoList(videos);
//     setIsModalOpen(true);
//     setActiveIndex(0);
//   };

//   // ================= CLOSE MODAL =================

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoList([]);
//   };

//   return (
//     <div
//       name="Projects"
//       className="max-w-screen-2xl mx-auto px-4 md:px-10 py-16"
//     >
//       {/* ================= HEADING ================= */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -30,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.5,
//         }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
//           My Projects
//         </h1>

//         <p className="mt-3 text-gray-600 dark:text-gray-300">
//           Frontend, Backend & FullStack
//           Projects
//         </p>
//       </motion.div>

//       {/* ================= FILTER BUTTONS ================= */}

//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {categories.map((category) => (
//           <motion.button
//             key={category}
//             whileHover={{
//               scale: 1.05,
//             }}
//             whileTap={{
//               scale: 0.9,
//             }}
//             onClick={() => {
//               setSelectedCategory(category);
//               setShowAll(false);
//             }}
//             className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              
//               ${
//                 selectedCategory === category
//                   ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
//                   : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white"
//               }`}
//           >
//             {category}
//           </motion.button>
//         ))}
//       </div>

//       {/* ================= PROJECT GRID ================= */}

//       <motion.div
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//       >
//         <AnimatePresence>
//           {displayedProjects.map(
//             ({
//               id,
//               logo,
//               name,
//               videos,
//               source,
//               category,
//               technology,
//             }) => (
//               <motion.div
//                 key={id}
//                 layout
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.8,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.02,
//                 }}
//                 className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-lg border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500"
//               >
//                 {/* HOVER GRADIENT */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                 {/* TOP LINE */}
//                 <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>

//                 {/* CARD BODY */}
//                 <div className="relative z-10 p-4">

//                   {/* IMAGE */}
//                   <div className="flex justify-center">
//                     <div className="relative">

//                       {/* GLOW */}
//                       <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

//                       <img
//                         src={logo}
//                         alt={name}
//                         className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
//                       />
//                     </div>
//                   </div>

//                   {/* TAGS */}
//                   <div className="flex flex-wrap justify-center gap-2 mt-4">

//                     {/* CATEGORY */}
//                     <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium shadow-sm">
//                       {category}
//                     </span>

//                     {/* TECHNOLOGY */}
//                     <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium shadow-sm">
//                       {technology}
//                     </span>
//                   </div>

//                   {/* TITLE */}
//                   <h2 className="mt-4 text-center text-base font-bold text-gray-800 dark:text-white line-clamp-2">
//                     {name}
//                   </h2>

//                   {/* DESCRIPTION */}
//                   <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-2 leading-relaxed">
//                     Explore source code &
//                     implementation videos.
//                   </p>

//                   {/* BUTTONS */}
//                   <div className="flex justify-center gap-3 mt-5">

//                     {/* WATCH BUTTON */}
//                     <motion.button
//                       whileTap={{
//                         scale: 0.9,
//                       }}
//                       whileHover={{
//                         scale: 1.05,
//                       }}
//                       onClick={() =>
//                         openModal(videos)
//                       }
//                       className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg"
//                     >
//                       Watch
//                     </motion.button>

//                     {/* CODE BUTTON */}
//                     <motion.button
//                       whileTap={{
//                         scale: 0.9,
//                       }}
//                       whileHover={{
//                         scale: 1.05,
//                       }}
//                       onClick={() =>
//                         window.open(
//                           source,
//                           "_blank"
//                         )
//                       }
//                       className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-lg"
//                     >
//                       Code
//                     </motion.button>
//                   </div>

//                   {/* BOTTOM ANIMATION LINE */}
//                   <div className="mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-500"></div>
//                 </div>
//               </motion.div>
//             )
//           )}
//         </AnimatePresence>
//       </motion.div>

//       {/* ================= SHOW MORE BUTTON ================= */}

//       {filteredProjects.length > 4 && (
//         <div className="flex justify-center mt-12">
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             onClick={() =>
//               setShowAll(!showAll)
//             }
//             className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg"
//           >
//             {showAll
//               ? "Show Less"
//               : "Show More"}
//           </motion.button>
//         </div>
//       )}

//       {/* ================= VIDEO MODAL ================= */}

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center px-4">

//           <motion.div
//             initial={{
//               scale: 0.8,
//               opacity: 0,
//             }}
//             animate={{
//               scale: 1,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
//           >
//             {/* HEADER */}
//             <div className="flex justify-between items-center p-4 border-b dark:border-slate-700">

//               <h2 className="text-xl font-bold text-gray-800 dark:text-white">
//                 Project Videos
//               </h2>

//               <button
//                 onClick={closeModal}
//                 className="text-3xl text-gray-500 hover:text-red-500"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* VIDEO SLIDER */}
//             <div className="w-full h-[55vh] p-4">
//               <Swiper
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="h-full rounded-xl overflow-hidden"
//                 onSlideChange={(
//                   swiper
//                 ) =>
//                   setActiveIndex(
//                     swiper.activeIndex
//                   )
//                 }
//               >
//                 {videoList.map(
//                   (video, index) => (
//                     <SwiperSlide
//                       key={index}
//                     >
//                       <video
//                         src={video}
//                         controls
//                         muted
//                         autoPlay={
//                           index ===
//                           activeIndex
//                         }
//                         className="w-full h-full object-cover rounded-xl"
//                       />
//                     </SwiperSlide>
//                   )
//                 )}
//               </Swiper>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PortFolio;





import React, { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import {
  FaGithub,
  FaPlay,
  FaCode,
} from "react-icons/fa";

const java = "/java.png";
const Css = "/css.jpg";
const JavaScript = "/javascript.png";
const reactjs = "/reactjs.png";

const javascriptvideo = "/javascript1.mp4";
const javascriptvideo1 = "/javascript2.mp4";

const cssvideo = "/css1.mp4";
const cssvideo1 = "/css2.mp4";

const javavideo = "/java.mp4";

const reactvideo = "/React1.mp4";

const Portfolio = "/Portfolio.mp4";

const KalikaFootwearOnlineShopping =
  "/KalikaFootwearonlineshopping.mp4";

const AiChat = "/AiChatBot.mp4";
function PortFolio() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [videoList, setVideoList] =
    useState([]);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [showAll, setShowAll] =
    useState(false);

  // ================= PROJECTS =================

  const cardItem = [
    {
      id: 1,
      category: "Frontend",
      technology: "JavaScript",
      logo: JavaScript,
      name: "JavaScript Projects",
      description:
        "Interactive JavaScript mini projects with animations and DOM manipulation.",
      videos: [
        javascriptvideo,
        javascriptvideo1,
      ],
      source:
        "https://github.com/Mane-DINESH/js-project.git",
    },

    {
      id: 2,
      category: "Frontend",
      technology: "CSS",
      logo: Css,
      name: "CSS Animation Projects",
      description:
        "Modern CSS animations, transitions and responsive UI designs.",
      videos: [
        cssvideo,
        cssvideo1,
      ],
      source:
        "https://github.com/Mane-DINESH/cssproject",
    },

    {
      id: 3,
      category: "FullStack",
      technology:
        "React + Spring Boot",
      logo: reactjs,
      name: "Kalika Footwear Online Shopping",
      description:
        "Full-stack e-commerce platform with authentication and product management.",
      videos: [KalikaFootwearOnlineShopping],
      source:
"https://github.com/Mane-DINESH/KalikaFootwearonlineshopingFullstackproject"    },

    {
      id: 4,
      category: "FullStack",
      technology: "Servlet + JSP",
      logo: java,
      name: "Kalika Footwear",
      description:
        "Java-based online shopping application using JSP and Servlets.",
      videos: [javavideo],
      source:
        "https://github.com/Mane-DINESH/KalikaFootwearOnlineShoping.git",
    },

    {
      id: 5,
      category:
        "AI API Integration",
      technology:
        "Reactjs + Expressjs + AI Integration",
      logo: Ai,
      name: "MJ ChatBot",
      description:
        "AI chatbot application with API integration and real-time responses.",
      videos: [AiChat],
      source:
        "https://github.com/Mane-DINESH/MJAiChatBot",
    },

    {
      id: 6,
      category: "Frontend",
      technology: "React",
      logo: reactjs,
      name: "React Dashboard",
      description:
        "Responsive admin dashboard with charts and analytics UI.",
      videos: [reactvideo],
      source:
        "https://github.com/",
    },

    {
      id: 7,
      category: "Frontend",
      technology: "React + Tailwind CSS",
      logo: reactjs,
      name: "Portfolio Website",
      description:
        "Modern responsive portfolio built using React and Tailwind CSS.",
      videos: [Portfolio],
      source:
        "https://github.com/",
    },
  ];

  // ================= CATEGORIES =================

  const categories = useMemo(
    () => [
      "All",
      "Frontend",
      "FullStack",
      "AI API Integration",
    ],
    []
  );

  // ================= FILTER =================

  const filteredProjects =
    selectedCategory === "All"
      ? cardItem
      : cardItem.filter(
          (item) =>
            item.category ===
            selectedCategory
        );

  // ================= SHOW MORE =================

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  // ================= MODAL =================

  const openModal = (videos) => {
    setVideoList(videos);
    setIsModalOpen(true);
    setActiveIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoList([]);
  };

  return (
    <>
      <section
        name="Projects"
        className="
          py-20
          bg-gradient-to-br
          from-white
          via-purple-50
          to-blue-50
        "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

          {/* ================= HEADING ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="
                inline-block
                px-4 py-1
                rounded-full
                bg-purple-100
                text-purple-700
                text-sm
                font-medium
              "
            >
              My Work
            </span>

            <h1
              className="
                text-4xl md:text-5xl
                font-bold
                text-gray-800
                mt-4
              "
            >
              Featured Projects
            </h1>

            <div
              className="
                w-24 h-1
                bg-gradient-to-r
                from-purple-600
                to-blue-500
                mx-auto mt-4
                rounded-full
              "
            ></div>

            <p
              className="
                mt-5
                text-gray-600
                max-w-2xl
                mx-auto
                leading-7
              "
            >
              Explore my frontend,
               full-stack and
              AI integration projects
              built using modern
              technologies.
            </p>
          </motion.div>

          {/* ================= FILTER BUTTONS ================= */}

          <div
            className="
              flex flex-wrap
              justify-center
              gap-4
              mb-14
            "
          >
            {categories.map(
              (category) => (
                <motion.button
                  key={category}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    setSelectedCategory(
                      category
                    );

                    setShowAll(false);
                  }}
                  className={`
                    px-6 py-2.5
                    rounded-full
                    text-sm font-semibold
                    transition-all duration-300
                    shadow-md
                    cursor-pointer

                    ${
                      selectedCategory ===
                      category
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-purple-100"
                    }
                  `}
                >
                  {category}
                </motion.button>
              )
            )}
          </div>

          {/* ================= PROJECT GRID ================= */}

          <motion.div
            layout
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >
            <AnimatePresence>
              {displayedProjects.map(
                ({
                  id,
                  logo,
                  name,
                  videos,
                  source,
                  category,
                  technology,
                  description,
                }) => (
                  <motion.div
                    key={id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      group
                      relative
                      bg-white
                      rounded-3xl
                      overflow-hidden
                      shadow-md
                      hover:shadow-2xl
                      transition-all duration-500
                      border border-gray-100
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute
                        top-0 right-0
                        w-32 h-32
                        bg-purple-200
                        rounded-full
                        blur-3xl
                        opacity-30
                        group-hover:opacity-50
                        transition duration-500
                      "
                    ></div>

                    {/* Image */}
                    <div
                      className="
                        relative
                        flex justify-center
                        pt-8
                      "
                    >
                      <div
                        className="
                          relative
                          w-24 h-24
                        "
                      >
                        <div
                          className="
                            absolute inset-0
                            rounded-full
                            bg-purple-400
                            blur-2xl
                            opacity-30
                          "
                        ></div>

                        <img
                          src={logo}
                          alt={name}
                          className="
                            relative
                            w-full h-full
                            rounded-full
                            object-cover
                            border-4 border-white
                            shadow-xl
                          "
                        />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">

                      {/* Tags */}
                      <div
                        className="
                          flex flex-wrap
                          justify-center
                          gap-2
                          mb-4
                        "
                      >
                        <span
                          className="
                            px-3 py-1
                            text-xs
                            rounded-full
                            bg-purple-100
                            text-purple-700
                            font-medium
                          "
                        >
                          {category}
                        </span>

                        <span
                          className="
                            px-3 py-1
                            text-xs
                            rounded-full
                            bg-blue-100
                            text-blue-700
                            font-medium
                          "
                        >
                          {technology}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="
                          text-xl
                          font-bold
                          text-gray-800
                          text-center
                        "
                      >
                        {name}
                      </h2>

                      {/* Description */}
                      <p
                        className="
                          text-gray-600
                          text-sm
                          text-center
                          mt-3
                          leading-6
                        "
                      >
                        {description}
                      </p>

                      {/* Buttons */}
                      <div
                        className="
                          flex justify-center
                          gap-4
                          mt-6
                        "
                      >
                        {/* Watch */}
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          onClick={() =>
                            openModal(videos)
                          }
                          className="
                            flex items-center gap-2
                            px-5 py-2.5
                            rounded-xl
                            bg-gradient-to-r
                            from-purple-600
                            to-blue-500
                            text-white
                            font-medium
                            shadow-lg
                            cursor-pointer
                          "
                        >
                          <FaPlay />
                          Watch
                        </motion.button>

                        {/* Code */}
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          onClick={() =>
                            window.open(
                              source,
                              "_blank"
                            )
                          }
                          className="
                            flex items-center gap-2
                            px-5 py-2.5
                            rounded-xl
                            bg-gradient-to-r
                            from-emerald-500
                            to-green-600
                            text-white
                            font-medium
                            shadow-lg
                            cursor-pointer
                          "
                        >
                          <FaGithub />
                          Code
                        </motion.button>
                      </div>

                      {/* Bottom Line */}
                      <div
                        className="
                          mt-6
                          h-1
                          w-0
                          group-hover:w-full
                          bg-gradient-to-r
                          from-purple-600
                          to-blue-500
                          rounded-full
                          transition-all duration-500
                        "
                      ></div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </motion.div>

          {/* ================= SHOW MORE ================= */}

          {filteredProjects.length >
            6 && (
            <div className="flex justify-center mt-14">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setShowAll(!showAll)
                }
                className="
                  px-8 py-3
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-500
                  text-white
                  font-semibold
                  shadow-xl
                "
              >
                {showAll
                  ? "Show Less"
                  : "Show More"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed inset-0 z-50
              bg-black/50 backdrop-blur-sm
              flex items-center justify-center
              px-4
            "
          >
            <motion.div
              initial={{
                scale: 0.8,
                y: 40,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                y: 40,
              }}
              className="
                bg-white
                rounded-3xl
                shadow-2xl
                w-full
                max-w-5xl
                overflow-hidden
              "
            >
              {/* Header */}
              <div
                className="
                  flex justify-between items-center
                  p-5
                  border-b
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-gray-800
                  "
                >
                  Project Videos
                </h2>

                <button
                  onClick={closeModal}
                  className="
                    text-3xl
                    text-gray-500
                    hover:text-red-500
                    transition duration-300
                  "
                >
                  &times;
                </button>
              </div>

              {/* Videos */}
              <div className="p-4 md:p-6">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="
                    rounded-2xl
                    overflow-hidden
                  "
                  onSlideChange={(
                    swiper
                  ) =>
                    setActiveIndex(
                      swiper.activeIndex
                    )
                  }
                >
                  {videoList.map(
                    (video, index) => (
                      <SwiperSlide
                        key={index}
                      >
                        <video
                          src={video}
                          controls
                          muted
                          autoPlay={
                            activeIndex ===
                            index
                          }
                          className="
                            w-full
                            h-[250px]
                            sm:h-[400px]
                            md:h-[500px]
                            object-cover
                            rounded-2xl
                          "
                        />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PortFolio;