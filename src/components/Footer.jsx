// import React from "react";
// import {
//   FaFacebookF,
//   FaTelegramPlane,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import Dinesh from "../../public/D1.png"; // For Next.js, replace with next/image

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-400 text-sm">
//       <div className="max-w-screen-xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
//           {/* Logo and Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <img src={Dinesh} alt="Logo" className="h-12 w-12 object-cover rounded-md shadow-md border border-gray-600" />
//               <h2 className="text-2xl font-bold text-white tracking-wide">Dinesh Mane</h2>
//             </div>
//             <p className="leading-6 text-gray-400">
//               Full Stack Developer passionate about building clean, modern, and responsive web apps.
//             </p>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Contact</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <FaEnvelope className="mt-1 text-white" />
//                 <a href="mailto:manedinesh650@gmail.com" className="hover:text-white transition-colors duration-200">
//                   manedinesh650@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <FaPhoneAlt className="mt-1 text-white" />
//                 <a href="tel:+918010414516" className="hover:text-white transition-colors duration-200">
//                   +91 801 0414 516
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="mt-1 text-white" />
//                 <span>Walki Ahilyanagar, Maharashtra, India</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Follow Me</h3>
//             <div className="flex gap-4">
//               <a href="https://www.facebook.com/dinesh.mane.9803150" className="group bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition">
//                 <FaFacebookF className="text-white group-hover:scale-110 transform transition" />
//               </a>
//               <a href="https://t.me/+8RhHpPNt2rxkMjc1" className="group bg-gray-700 p-3 rounded-full hover:bg-sky-400 transition">
//                 < FaTelegramPlane className="text-white group-hover:scale-110 transform transition" />
//               </a>
//               <a href="https://www.instagram.com/official_dinesh_mane" className="group bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition">
//                 <FaInstagram className="text-white group-hover:scale-110 transform transition" />
//               </a>
//               <a href="https://www.linkedin.com/in/dinesh-mane1" className="group bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
//                 <FaLinkedinIn className="text-white group-hover:scale-110 transform transition" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <hr className="my-10 border-gray-700" />

//         <p className="text-center text-xs text-gray-500 tracking-wide">
//           &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Dinesh Mane</span>. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;






import React from "react";

import {
  motion,
} from "framer-motion";

import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Dinesh from "../../public/D1.png";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#0f172a]
        via-[#111827]
        to-[#1e293b]
        text-gray-300
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0 left-0
          w-72 h-72
          bg-cyan-500/20
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          absolute
          bottom-0 right-0
          w-72 h-72
          bg-purple-500/20
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >
        {/* MAIN GRID */}
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
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
          "
        >
          {/* ================= LEFT SECTION ================= */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="flex items-center gap-4 mb-5">

              {/* LOGO */}
              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                src={Dinesh}
                alt="Logo"
                className="
                  w-16 h-16
                  rounded-2xl
                  object-cover
                  border border-cyan-400/30
                  shadow-xl
                "
              />

              {/* NAME */}
              <div>
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Dinesh Mane
                </h2>

                <p
                  className="
                    text-sm
                    text-cyan-400
                    mt-1
                  "
                >
                 Java Full Stack Developer
                </p>
              </div>
            </div>

            <p
              className="
                leading-7
                text-gray-400
              "
            >
              Passionate Java Full Stack
              Developer focused on
              building modern,
              scalable and responsive
              web applications with
              clean UI & smooth user
              experience.
            </p>
          </motion.div>

          {/* ================= CONTACT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-xl
                font-semibold
                text-white
                mb-6
              "
            >
              Contact Info
            </h3>

            <div className="space-y-5">

              {/* EMAIL */}
              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="mailto:manedinesh650@gmail.com"
                className="
                  flex items-center
                  gap-4
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    group-hover:bg-cyan-500
                    transition duration-300
                  "
                >
                  <FaEnvelope className="text-white" />
                </div>

                <span
                  className="
                    text-gray-300
                    group-hover:text-cyan-400
                    transition duration-300
                  "
                >
                  manedinesh650@gmail.com
                </span>
              </motion.a>

              {/* PHONE */}
              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="tel:+918010414516"
                className="
                  flex items-center
                  gap-4
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    group-hover:bg-purple-500
                    transition duration-300
                  "
                >
                  <FaPhoneAlt className="text-white" />
                </div>

                <span
                  className="
                    text-gray-300
                    group-hover:text-purple-400
                    transition duration-300
                  "
                >
                  +91 8010414516
                </span>
              </motion.a>

              {/* LOCATION */}
              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="
                  flex items-center
                  gap-4
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    group-hover:bg-pink-500
                    transition duration-300
                  "
                >
                  <FaMapMarkerAlt className="text-white" />
                </div>

                <span
                  className="
                    text-gray-300
                    group-hover:text-pink-400
                    transition duration-300
                  "
                >
                  Ahilyanagar,
                  Maharashtra, India
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= SOCIAL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-xl
                font-semibold
                text-white
                mb-6
              "
            >
              Follow Me
            </h3>

            <div className="flex flex-wrap gap-4">

              {/* FACEBOOK */}
              <motion.a
                whileHover={{
                  y: -8,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://www.facebook.com/dinesh.mane.9803150"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-white/5
                  border border-white/10
                  hover:bg-blue-600
                  transition duration-300
                  shadow-lg
                "
              >
                <FaFacebookF className="text-white text-xl" />
              </motion.a>

              {/* TELEGRAM */}
              <motion.a
                whileHover={{
                  y: -8,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://t.me/+8RhHpPNt2rxkMjc1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-white/5
                  border border-white/10
                  hover:bg-cyan-500
                  transition duration-300
                  shadow-lg
                "
              >
                <FaTelegramPlane className="text-white text-xl" />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                whileHover={{
                  y: -8,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://www.instagram.com/official_dinesh_mane"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-white/5
                  border border-white/10
                  hover:bg-pink-500
                  transition duration-300
                  shadow-lg
                "
              >
                <FaInstagram className="text-white text-xl" />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                whileHover={{
                  y: -8,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://www.linkedin.com/in/dinesh-mane1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-white/5
                  border border-white/10
                  hover:bg-blue-500
                  transition duration-300
                  shadow-lg
                "
              >
                <FaLinkedinIn className="text-white text-xl" />
              </motion.a>
            </div>

            {/* SMALL TEXT */}
            <p
              className="
                mt-6
                text-gray-400
                leading-7
              "
            >
              Connect with me on social
              platforms for collaboration,
              projects and opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100%",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-gray-600
            to-transparent
            my-12
          "
        ></motion.div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-sm
              text-gray-500
              text-center
            "
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Dinesh Mane
            </span>
            . All rights reserved.
          </p>

          {/* <p
            className="
              text-sm
              text-cyan-400
              font-medium
            "
          >
            Built with React & Tailwind CSS
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;