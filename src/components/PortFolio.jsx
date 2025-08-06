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
// function PortFolio() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoList, setVideoList] = useState([]);

//   const cardItem = [
//     {
//       id: 1,
//       logo: JavaScript,
//       name: "JavaScript Project Modules",
//       videos: [
//        javascriptvideo,
//         javascriptvideo1,
//       ],
//       source: "https://github.com/Mane-DINESH/js-project.git",
//     },
//     {
//       id: 2,
//       logo: Css,
//       name: "CSS Project Modules",
//       videos: [
//        cssvideo,
//         cssvideo1,
//       ],
//       source: "https://github.com/Mane-DINESH/cssproject",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "React Project Modules",
//       videos: [
//         "https://www.youtube.com/embed/Ke90Tje7VS0",
//         "https://www.youtube.com/embed/bMknfKXIFA8",
//       ],
//       source: "https://github.com/yourusername/react-project",
//     },
//     {
//       id: 4,
//       logo: java,
//       name: "Java Project Modules",
//       videos: [
//         "https://www.youtube.com/embed/eIrMbAQSU34",
       
//       ],
//       source: "https://github.com/yourusername/java-project",
//     },
//   ];

//   const openModal = (videos) => {
//     setVideoList(videos);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoList([]);
//   };

//   return (
//     <div
//       name="Project"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div className="text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-3">Project</h1>
//         <span className="text-gray-600 underline font-semibold tracking-wide">
//           Featured Projects & Modules
//         </span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">
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
//               >
//                 {videoList.map((video, index) => (
//                   <SwiperSlide key={index} className="w-full h-full">
//                     <iframe
//                       src={video}
//                       title={`Video ${index + 1}`}
//                       className="w-full h-full"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
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




import React, { useState } from "react";
import java from "../../public/java.png";
import Css from "../../public/css.jpg";
import JavaScript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import javascriptvideo from '../../public/javascript1.mp4';
import javascriptvideo1 from '../../public/javascript2.mp4';
import cssvideo from '../../public/css1.mp4';
import cssvideo1 from '../../public/css2.mp4';
import javavideo from '../../public/java.mp4';
import reactvideo from '../../public/React1.mp4';

function PortFolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active video index

  const cardItem = [
    {
      id: 1,
      logo: JavaScript,
      name: "JavaScript Project Modules",
      videos: [javascriptvideo, javascriptvideo1],
      source: "https://github.com/Mane-DINESH/js-project.git",
    },
    {
      id: 2,
      logo: Css,
      name: "CSS Project Modules",
      videos: [cssvideo, cssvideo1],
      source: "https://github.com/Mane-DINESH/cssproject",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React Project Modules",
      videos: [reactvideo],
      source: "https://github.com/Mane-DINESH/react-projects.git",
    },
    {
      id: 4,
      logo: java,
      name: "Java Project Modules",
      videos: [javavideo],
      source: "https://github.com/Mane-DINESH/KalikaFootwearOnlineShoping.git",
    },
  ];

  const openModal = (videos) => {
    setVideoList(videos);
    setIsModalOpen(true);
    setActiveIndex(0); // ✅ Reset to first video
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoList([]);
    setActiveIndex(0);
  };

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Project</h1>
        <span className="text-gray-600 underline font-semibold tracking-wide">
          Featured Projects & Modules
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">
        {cardItem.map(({ id, logo, name, videos, source }) => (
          <div
            key={id}
            className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-5 text-center transform hover:scale-105 transition duration-300 border border-gray-200"
          >
            <div className="flex justify-center">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md object-cover"
              />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
              {name}
            </h2>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => openModal(videos)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                Video
              </button>
              <button
                onClick={() => window.open(source, "_blank")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal with Slider */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-lg relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Project Video Modules</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="w-full h-[60vh] px-4 py-2">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ✅ Track slide change
              >
                {videoList.map((video, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    {video.endsWith(".mp4") ? (
                      <video
                        src={video}
                        controls
                        muted
                        autoPlay={index === activeIndex} // ✅ Only active video plays
                        className="w-full h-full"
                      />
                    ) : (
                      <iframe
                        src={video}
                        title={`Video ${index + 1}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
