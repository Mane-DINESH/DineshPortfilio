import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/byvynkya", userInfo);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Contact Me
        </h2>
        <p className="text-gray-500 text-center mb-3">
          Feel free to reach out by filling the form below
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              {...register("subject", { required: true })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter subject"
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">Subject is required</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">Message is required</p>
            )}
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
