import React from "react";
import TitleText from "../components/TitleText";
import logoHQ from "../assets/logo[hq].png";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/fmotion.ts";

const containerStyles = {
  "--s": "167px",
  "--c1": "#b2cbcd",
  "--c2": "#bfd1d2",
  "--_g":
    "var(--c1) 6.1%, var(--c2) 6.4% 18.6%, var(--c1) 18.9% 31.1%, var(--c2) 31.4% 43.6%, var(--c1) 43.9% 56.1%, var(--c2) 56.4% 68.6%, #0000 68.9%",
  background: `radial-gradient(var(--s) at 100% 0, var(--_g)),
               radial-gradient(var(--s) at 0 0, var(--_g)),
               radial-gradient(var(--s) at 0 100%, var(--_g)),
               radial-gradient(var(--s) at 100% 100%, var(--_g)) var(--c1)`,
  backgroundSize: "var(--s) var(--s)",
};

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="flex justify-center">
        <motion.div
          variants={fadeIn("up", 0.1, 1, 1)}
          initial="hidden40"
          whileInView="show"
        >
          <TitleText title="About" />
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-2 items-center mx-auto bg-gray-200 w-full px-20 py-10 rounded-lg"
        style={{ ...containerStyles }}
        variants={fadeIn("up", 0, 1, 1)}
        initial="hidden20"
        whileInView="show"
      >
        <motion.img
          src={logoHQ}
          alt="logo"
          className="max-w-xl w-[50vw]"
          variants={fadeIn("up", 0.1, 1, 1)}
          initial="hidden20"
          whileInView="show"
        />
      </motion.div>
      <motion.p
        className="text-justify text-gray-500 mt-4"
        variants={fadeIn("up", 0.1, 1, 1)}
        initial="hidden20"
        whileInView="show"
      >
        The Library Management System is a simple yet powerful tool designed to
        simplify the management of books. It allows users to create, view,
        update, and delete book records, offering an intuitive interface for
        organizing a library efficiently. The goal of the system is to provide a
        seamless experience for managing books. Whether adding new titles,
        browsing existing books, or making updates, the system is built to be
        user-friendly and efficient, ensuring that tasks are completed with
        minimal effort. This system ensures secure and reliable handling of book
        data, maintaining accuracy and consistency throughout its use. The
        application’s responsive design ensures accessibility on devices of all
        sizes, providing a smooth experience across various platforms. For added
        security, optional user authentication features are available to enhance
        the overall experience. The mission is to make library management more
        accessible and simpler for everyone, allowing individuals to focus on
        the enjoyment of reading and sharing knowledge rather than the
        complexities of managing books.
      </motion.p>
    </div>
  );
};

export default About;
