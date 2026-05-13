
// import React from "react";
// import { motion } from "framer-motion";

// function About() {
//   const sections = [
//     {
//       title: "Education",
//       content: [
//         "BCS – Savitribai Phule Pune University (2025)",
//         "Full Stack Development – Shree Genius IT Hub (2025)",
//       ],
//       icon: "🎓",
//     },
//     {
//       title: "Technical Skills",
//       content: [
//         "HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Angular",
//         "Java, Spring Boot, Hibernate, PostgreSQL, MySQL",
//         "Developer Tools: Git, GitHub, Postman, VS Code, Eclipse",
//       ],
//       icon: "🛠️",
//     },
//     {
//       title: "Soft Skills",
//       content: [
//         "Effective Communication",
//         "Problem-Solving & Critical Thinking",
//         "Team Collaboration & Leadership",
//         "Adaptability & Time Management",
//         "Continuous Learning & Creativity",
//       ],
//       icon: "🌟",
//     },
//     {
//       title: "Training",
//       content: ["Full Stack Development – Shree Genius IT Hub (2025)"],
//       icon: "🏢",
//     },
//     {
//       title: "Projects",
//       content: [
//         "Portfolio Website – Built with React and Tailwind CSS",
//         "Kalika Footwear Shopping – Full-stack project using Java, JSP, SQL",
//       ],
//       icon: "💻",
//     },
//     {
//       title: "Career Objective",
//       content: [
//         "To secure a position as a Full Stack Developer to build efficient, user-friendly, and impactful applications while continuously improving my skills.",
//       ],
//       icon: "🎯",
//     },
//   ];

//   // Function to split sections into rows of max 4 items
//   const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   };

//   const rows = chunkArray(sections, 4);

//   return (
//     <section name="About" className="bg-gray-50 py-16 px-4 text-gray-800">
//       {/* Header */}
//       <motion.div
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
//           About Me
//         </h2>
//         <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
//         <p className="text-md text-gray-700 max-w-3xl mx-auto leading-relaxed">
//           I’m <span className="text-blue-900 font-semibold">Dinesh</span>, a Full Stack
//           Developer passionate about building scalable, responsive, and user-friendly web
//           applications.
//         </p>
//       </motion.div>

//       {/* Timeline Rows */}
//       {rows.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 relative mb-10"
//         >
//           {row.map((section, idx) => (
//             <motion.div
//               key={section.title}
//               className="flex flex-col items-center text-center md:min-w-[220px] relative"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               viewport={{ once: true }}
//             >
//               {/* Circle Icon */}
//               <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-2 text-xl font-bold z-10">
//                 {section.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-2">
//                 {section.title}
//               </h3>

//               {/* Content */}
//               <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
//                 {section.content.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>

//               {/* Vertical connector for mobile */}
//               {idx !== row.length - 1 && (
//                 <div className="md:hidden w-[2px] h-8 bg-blue-200 mt-4"></div>
//               )}
//             </motion.div>
//           ))}

//           {/* Horizontal connector for desktop */}
//           {rowIndex !== rows.length - 1 && (
//             <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-blue-200 z-0"></div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// }

// export default About;



import React from "react";
import { motion } from "framer-motion";

function About() {
  const sections = [
    {
      title: "Education",
      icon: "🎓",
      content: [
        "BCS – Savitribai Phule Pune University (2025)",
        "Full Stack Development – Shree Genius IT Hub (2025)",
      ],
    },
    {
      title: "Technical Skills",
      icon: "🛠️",
      content: [
        "HTML, CSS, Tailwind CSS, Bootstrap",
        "JavaScript, React.js, Angular",
        "Java, Spring Boot, Hibernate",
        "PostgreSQL, MySQL",
        "Git, GitHub, Postman, VS Code",
      ],
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      content: [
        "Communication Skills",
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Continuous Learning",
      ],
    },
    {
      title: "Training",
      icon: "🏢",
      content: [
        "Full Stack Development – Shree Genius IT Hub",
      ],
    },
    {
      title: "Projects",
      icon: "💻",
      content: [
        "Portfolio Website – React & Tailwind",
        "Kalika Footwear Shopping Website",
        "Java + JSP + SQL Based Application",
      ],
    },
    {
      title: "Career Objective",
      icon: "🎯",
      content: [
        "Seeking a Full Stack Developer role to build modern, scalable, and user-friendly applications while continuously enhancing my technical skills.",
      ],
    },
  ];

  return (
    <section
      name="About"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Know More About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8 text-base md:text-lg">
            I'm a passionate Full Stack Developer who
            enjoys creating responsive, scalable, and
            modern web applications using the latest
            technologies. I love solving problems and
            continuously learning new skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-300"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white text-3xl shadow-lg mb-5">
                {section.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-4">
                {section.title}
              </h3>

              {/* Content */}
              <ul className="relative z-10 space-y-3">
                {section.content.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 leading-7 flex items-start gap-2"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500"></span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "10+", label: "Projects" },
            { number: "6+", label: "Certificates" },
            { number: "2025", label: "Graduate" },
            { number: "100%", label: "Dedication" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;