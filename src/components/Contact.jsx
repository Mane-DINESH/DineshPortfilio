// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function ContactForm() {
//   const formRef = useRef();

//   const formik = useFormik({
//     initialValues: {
//       from_name: '',
//       from_email: '',
//       subject: '',
//       message: '',
//     },
//     validationSchema: Yup.object({
//       from_name: Yup.string().required('Full name is required'),
//       from_email: Yup.string().email('Invalid email').required('Email is required'),
//       subject: Yup.string().required('Subject is required'),
//       message: Yup.string().required('Message is required'),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       emailjs
//         .sendForm('service_jrdvuuy', 'template_1u6fn5n', formRef.current, 'vACF7Tcy9MZcGnTG1')
//         .then(() => {
//           toast.success('Thank You !');
//           resetForm();
//         })
//         .catch((error) => {
//           console.error('EmailJS error:', error);
//           toast.error('Failed to send message.');
//         });
//     },
//   });

//   return (
//     <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4" style={{marginTop:"10%"}} >
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"name="Contact">Let's Connect</h2>
//           <p className="text-lg text-gray-600">Have a question or opportunity? Send me a message.</p>
//         </div>

//         <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
//           <form
//             ref={formRef}
//             onSubmit={formik.handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* Full Name */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-700 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your name"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.from_name}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 "
//               />
//               {formik.touched.from_name && formik.errors.from_name && (
//                 <span className="text-red-500 text-sm mt-1">{formik.errors.from_name}</span>
//               )}
//             </div>

//             {/* Email */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-700 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="your@email.com"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.from_email}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 "
//               />
//               {formik.touched.from_email && formik.errors.from_email && (
//                 <span className="text-red-500 text-sm mt-1">{formik.errors.from_email}</span>
//               )}
//             </div>

//             {/* Subject (full width) */}
//             <div className="flex flex-col md:col-span-2">
//               <label className="text-sm text-gray-700 mb-1">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject of your message"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.subject}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 "
//               />
//               {formik.touched.subject && formik.errors.subject && (
//                 <span className="text-red-500 text-sm mt-1">{formik.errors.subject}</span>
//               )}
//             </div>

//             {/* Message (full width) */}
//             <div className="flex flex-col md:col-span-2">
//               <label className="text-sm text-gray-700 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 placeholder="Write your message here..."
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.message}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1   resize-none"
//               ></textarea>
//               {formik.touched.message && formik.errors.message && (
//                 <span className="text-red-500 text-sm mt-1">{formik.errors.message}</span>
//               )}
//             </div>

//             {/* Hidden Fields */}
//             <input type="hidden" name="to_name" value="Dinesh" />
//             <input type="hidden" name="to_email" value="manedinesh650@gmail.com" />

//             {/* Submit Button */}
//             <div className="md:col-span-2">
//   <button
//     type="submit"
//     className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-green-600 cursor-pointer"
//   >
//     Send Message
//   </button>
// </div>

//           </form>
//           <ToastContainer position="top-right" autoClose={3000} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;




import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import { useFormik } from "formik";

import * as Yup from "yup";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  motion,
} from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function ContactForm() {
  const formRef = useRef();

  // ================= FORM VALIDATION =================

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      from_name: Yup.string().required(
        "Full name is required"
      ),

      from_email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      subject: Yup.string().required(
        "Subject is required"
      ),

      message: Yup.string().required(
        "Message is required"
      ),
    }),

    onSubmit: (
      values,
      { resetForm }
    ) => {
      emailjs
        .sendForm(
          "service_jrdvuuy",
          "template_1u6fn5n",
          formRef.current,
          "vACF7Tcy9MZcGnTG1"
        )

        .then(() => {
          toast.success(
            "Message Sent Successfully!"
          );

          resetForm();
        })

        .catch((error) => {
          console.error(error);

          toast.error(
            "Failed to send message."
          );
        });
    },
  });

  return (
    <>
      <section
        name="Contact"
        className="
          relative
          overflow-hidden
          py-20
          bg-gradient-to-br
          from-[#f8fafc]
          via-[#eef2ff]
          to-[#f5f3ff]
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-0 left-0
            w-72 h-72
            bg-cyan-300/20
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            absolute
            bottom-0 right-0
            w-72 h-72
            bg-purple-300/20
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-4
            md:px-10
            lg:px-20
          "
        >
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
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
              Contact Me
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-gray-800
                mt-4
              "
            >
              Let's Work Together
            </h2>

            <div
              className="
                w-24 h-1
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
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
              Have a project idea or
              opportunity? Feel free
              to contact me anytime.
            </p>
          </motion.div>

          {/* ================= MAIN CONTAINER ================= */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              items-start
            "
          >
            {/* ================= LEFT CONTACT INFO ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-xl
                p-8
                border border-white/40
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  text-gray-800
                  mb-6
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  text-gray-600
                  leading-7
                  mb-8
                "
              >
                I’m available for
                freelance projects,
                internships and
                full-time
                opportunities.
              </p>

              <div className="space-y-6">

                {/* EMAIL */}
                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    flex items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-purple-600
                      to-cyan-500
                      flex items-center
                      justify-center
                      text-white
                      shadow-lg
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <div>
                    <h4
                      className="
                        text-gray-800
                        font-semibold
                      "
                    >
                      Email
                    </h4>

                    <p className="text-gray-600">
                      manedinesh650@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* PHONE */}
                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    flex items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-pink-500
                      to-purple-600
                      flex items-center
                      justify-center
                      text-white
                      shadow-lg
                    "
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4
                      className="
                        text-gray-800
                        font-semibold
                      "
                    >
                      Phone
                    </h4>

                    <p className="text-gray-600">
                      +91 8010414516
                    </p>
                  </div>
                </motion.div>

                {/* LOCATION */}
                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    flex items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      flex items-center
                      justify-center
                      text-white
                      shadow-lg
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4
                      className="
                        text-gray-800
                        font-semibold
                      "
                    >
                      Location
                    </h4>

                    <p className="text-gray-600">
                      Ahilyanagar,
                      Maharashtra,
                      India
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ================= CONTACT FORM ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-xl
                p-8
                border border-white/40
              "
            >
              <form
                ref={formRef}
                onSubmit={
                  formik.handleSubmit
                }
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                "
              >
                {/* FULL NAME */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-gray-700
                      font-medium
                      mb-2
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    onChange={
                      formik.handleChange
                    }
                    onBlur={
                      formik.handleBlur
                    }
                    value={
                      formik.values
                        .from_name
                    }
                    className="
                      px-4 py-3
                      rounded-xl
                      border border-gray-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-500
                    "
                  />

                  {formik.touched
                    .from_name &&
                    formik.errors
                      .from_name && (
                      <span
                        className="
                          text-red-500
                          text-sm
                          mt-1
                        "
                      >
                        {
                          formik.errors
                            .from_name
                        }
                      </span>
                    )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-gray-700
                      font-medium
                      mb-2
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    onChange={
                      formik.handleChange
                    }
                    onBlur={
                      formik.handleBlur
                    }
                    value={
                      formik.values
                        .from_email
                    }
                    className="
                      px-4 py-3
                      rounded-xl
                      border border-gray-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                    "
                  />

                  {formik.touched
                    .from_email &&
                    formik.errors
                      .from_email && (
                      <span
                        className="
                          text-red-500
                          text-sm
                          mt-1
                        "
                      >
                        {
                          formik.errors
                            .from_email
                        }
                      </span>
                    )}
                </div>

                {/* SUBJECT */}
                <div className="md:col-span-2 flex flex-col">
                  <label
                    className="
                      text-gray-700
                      font-medium
                      mb-2
                    "
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={
                      formik.handleChange
                    }
                    onBlur={
                      formik.handleBlur
                    }
                    value={
                      formik.values
                        .subject
                    }
                    className="
                      px-4 py-3
                      rounded-xl
                      border border-gray-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-purple-500
                    "
                  />

                  {formik.touched
                    .subject &&
                    formik.errors
                      .subject && (
                      <span
                        className="
                          text-red-500
                          text-sm
                          mt-1
                        "
                      >
                        {
                          formik.errors
                            .subject
                        }
                      </span>
                    )}
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2 flex flex-col">
                  <label
                    className="
                      text-gray-700
                      font-medium
                      mb-2
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    onChange={
                      formik.handleChange
                    }
                    onBlur={
                      formik.handleBlur
                    }
                    value={
                      formik.values
                        .message
                    }
                    className="
                      px-4 py-3
                      rounded-xl
                      border border-gray-300
                      resize-none
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                    "
                  ></textarea>

                  {formik.touched
                    .message &&
                    formik.errors
                      .message && (
                      <span
                        className="
                          text-red-500
                          text-sm
                          mt-1
                        "
                      >
                        {
                          formik.errors
                            .message
                        }
                      </span>
                    )}
                </div>

                {/* HIDDEN INPUTS */}
                <input
                  type="hidden"
                  name="to_name"
                  value="Dinesh"
                />

                <input
                  type="hidden"
                  name="to_email"
                  value="manedinesh650@gmail.com"
                />

                {/* BUTTON */}
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="
                      w-full
                      py-4
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      via-pink-500
                      to-cyan-500
                      text-white
                      font-semibold
                      flex items-center
                      justify-center
                      gap-3
                      shadow-lg
                      hover:shadow-2xl
                      transition duration-300
                      cursor-pointer
                    "
                  >
                    <FaPaperPlane />

                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* TOAST */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
      </section>
    </>
  );
}

export default ContactForm;