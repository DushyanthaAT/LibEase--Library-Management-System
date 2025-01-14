import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ButtonCom from "./ButtonCom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  const menuItems = [
    { id: 1, title: "Home", link: "/", icon: <GoHomeFill /> },
    { id: 2, title: "Books", link: "/books", icon: <ImBooks /> },
    { id: 3, title: "About", link: "/about", icon: <BsFillInfoCircleFill /> },
  ];

  return (
    <div className="sticky top-0 z-50 flex py-3 px-6 lg:px-16 items-center justify-between bg-white shadow-md">
      <Link to="/">
        <img src={logo} alt="logo" className="w-36 h-auto" />
      </Link>
      {/* Desktop menu */}
      <ul className="hidden sm:flex space-x-10 font-semibold text-text_disable">
        {menuItems.map((item) => (
          <div className="flex items-center gap-1">
            <div
              className={`text-pri_green ${
                location.pathname == item.link ? "block" : "hidden"
              }`}
            >
              {item.icon}
            </div>
            <li
              key={item.id}
              className={`hover:text-pri_green ${
                location.pathname == item.link ? "text-pri_green font-bold" : ""
              }`}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          </div>
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
        } absolute top-14 left-0 w-full bg-gray-100 flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300 py-4`}
      >
        <ul className="flex flex-col gap-3 w-full items-center py-2font-bold">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`w-[90%] text-center py-2 rounded-lg ${
                location.pathname == item.link
                  ? "text-white bg-pri_green"
                  : "bg-sec_green  text-text_green "
              }`}
            >
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
          {isLoggedIn ? (
            <li
              className={`w-[90%] text-center py-2 rounded-lg ${
                location.pathname == "/admin/dashboard"
                  ? "text-white bg-pri_green"
                  : "bg-sec_green  text-text_green "
              }`}
            >
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