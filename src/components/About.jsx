import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      name="About"
      className="max-w-screen-xl mx-auto px-6 py-16 text-gray-800"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hi, I'm <span className="font-semibold text-green-500">Dinesh</span>, a passionate web developer focused on the
          Full stack. I'm enthusiastic about building beautiful, responsive, and
          user-friendly websites and applications.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Education",
            content: [
              "BCS - Savitribai Phule Pune University (2025)",
              "Full Stack Development - Shree Genius It Hub (2025)",
            ],
          },
          {
            title: "Skills",
            content: [
              "HTML, CSS, Bootstrap, Tailwind-CSS, Java-Script, J-query, React, Angular  ",
              "Java, Spring, Spring Boot, Hibernate",
              "Postgres SQL, MYSQL",
              "Vs code, Eclipse, Git  ",
            ],
          },
          {
            title: "Projects",
            content: [
              "Portfolio Website – Built with React and Tailwind",
              "Kalika Footwear Online Shopping – Full-stack development using technologies like JSP, Java, and SQL.",
            ],
          },
          {
            title: "Training / Internships",
            content: ["Full Stack Development - Shree Genius It Hub (2025)",],
          },
        ].map((section, idx) => (
          <motion.div
            key={section.title}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-3">
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Career Objective */}
      <motion.div
        className="mt-16 bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-green-600 mb-3 text-center">
          Career Objective
        </h3>
        <p className="text-gray-700 text-center">
          To secure a position as a full-stack developer where I can apply my academic knowledge and technical skills to build scalable, user-friendly applications. I aim to grow with a dynamic team, continuously learn new technologies, and contribute meaningfully to real-world software development projects.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
