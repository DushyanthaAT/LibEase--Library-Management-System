import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Books", link: "/books" },
    { id: 3, title: "About", link: "/about" },
  ];

  return (
    <div className="sticky top-0 z-50 flex py-3 px-10 items-center justify-between bg-white shadow-md">
      <h1 className="text-pri_green font-black text-xl">LibEase</h1>

      {/* Desktop menu */}
      <ul className="hidden sm:flex space-x-10 font-semibold text-text_disable">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Sign In Button */}
      <Link to="/sign-in">
        <button className="bg-pri_green px-10 py-2 rounded-lg text-white font-semibold sm:flex hidden">
          Sign In
        </button>
      </Link>

      {/* Mobile Menu */}
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <HiMenuAlt2 className="text-3xl text-pri_green" />
        ) : (
          <HiMenuAlt3 className="text-3xl text-pri_green" />
        )}
      </div>

      {/* Responsive Menu for mobile Screens*/}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-14 left-0 w-full bg-gray-100 flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300`}
      >
        <ul className="flex flex-col gap-3 w-full items-center py-2 text-text_green font-bold">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="w-[90%] text-center py-2 bg-sec_green rounded-lg hover:bg-pri_green hover:text-white"
            >
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
          <li className="w-[90%] text-center py-2 bg-sec_green rounded-lg hover:bg-pri_green hover:text-white">
            <button className="w-full">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;