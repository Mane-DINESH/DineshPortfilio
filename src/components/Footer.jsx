import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Dinesh from "../../public/D1.png"; // For Next.js, replace with next/image

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-400 text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
          {/* Logo and Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={Dinesh} alt="Logo" className="h-12 w-12 object-cover rounded-md shadow-md border border-gray-600" />
              <h2 className="text-2xl font-bold text-white tracking-wide">Dinesh Mane</h2>
            </div>
            <p className="leading-6 text-gray-400">
              Full Stack Developer passionate about building clean, modern, and responsive web apps.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-white" />
                <a href="mailto:manedinesh650@gmail.com" className="hover:text-white transition-colors duration-200">
                  manedinesh650@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-white" />
                <a href="tel:+918010414516" className="hover:text-white transition-colors duration-200">
                  +91 801 0414 516
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <span>Walki Ahilyanagar, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/dinesh.mane.9803150" className="group bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF className="text-white group-hover:scale-110 transform transition" />
              </a>
              <a href="https://t.me/+8RhHpPNt2rxkMjc1" className="group bg-gray-700 p-3 rounded-full hover:bg-sky-400 transition">
                < FaTelegramPlane className="text-white group-hover:scale-110 transform transition" />
              </a>
              <a href="https://www.instagram.com/official_dinesh_mane" className="group bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition">
                <FaInstagram className="text-white group-hover:scale-110 transform transition" />
              </a>
              <a href="https://www.linkedin.com/in/dinesh-mane1" className="group bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
                <FaLinkedinIn className="text-white group-hover:scale-110 transform transition" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-xs text-gray-500 tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Dinesh Mane</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
