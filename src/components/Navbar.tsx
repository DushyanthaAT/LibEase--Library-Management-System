import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import ButtonCom from "./ButtonCom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const navigate = useNavigate();

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
      {isLoggedIn ? (
        <Link to="/admin/dashboard">
          <div className=" sm:flex hidden">
            <ButtonCom name="Admin" />
          </div>
        </Link>
      ) : (
        <Link to="/sign-in">
          <div className=" sm:flex hidden">
            <ButtonCom name="Sign In" />
          </div>
        </Link>
      )}

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
          {isLoggedIn ? (
            <li className="w-[90%] text-center py-2 bg-sec_green rounded-lg hover:bg-pri_green hover:text-white">
              <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full">Admin</button>
              </Link>
            </li>
          ) : (
            <li className="w-[90%] text-center py-2 bg-sec_green rounded-lg hover:bg-pri_green hover:text-white">
              <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full">Sign In</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;