import React from "react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 shadow-inner flex flex-col items-center gap-4 pb-4">
      <div className="w-32 h-auto mt-4">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex space-x-4 text-gray-500 cursor-pointer">
          <li>Terms and Conditions</li>
          <li>Privacy and Policies </li>
        </ul>
      </div>
      <p className="text-gray-400">© 2025 LibEase. All rights reserved.</p>
    </div>
  );
};

export default Footer;
