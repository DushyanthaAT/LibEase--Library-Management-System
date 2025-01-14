import React from "react";
import TitleText from "../components/TitleText";
import logoHQ from "../assets/logo[hq].png";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="flex justify-center">
        <TitleText title="About" />
      </div>
      <div className="flex justify-center mt-2 max-w-xl items-center mx-auto">
        <img src={logoHQ} alt="logo" />
      </div>
      <p className="text-justify text-gray-500 mt-4">
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
      </p>
    </div>
  );
};

export default About;
