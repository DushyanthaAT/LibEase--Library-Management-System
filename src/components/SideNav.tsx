import React from "react";
import { Link, useLocation } from "react-router-dom";

import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

interface MenuItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <TbLayoutDashboard />,
    link: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Add a Book",
    icon: <MdOutlineAddToPhotos />,
    link: "/admin/create-a-post",
  },
  { id: 3, title: "Sign Out", icon: <VscSignOut />, link: "#" },
];

const SideNav: React.FC = () => {
  return (
    <>
      {/* Mobile Screen */}
      <div className="lg:hidden grid grid-auto-fit-xs gap-2 w-full px-4">
        {menuItems.map((item) => (
          <SideNavCom
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>

      {/* Desktop Screen */}
      <div className="hidden lg:flex flex-col w-60 h-screen bg-[#F6F6F6] gap-5 px-3 py-5 fixed">
        {menuItems.map((item) => (
          <SideNavCom
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

function SideNavCom({ id, title, icon, link }: MenuItem) {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <div>
      {/* Mobile Screen */}

      <Link to={link}>
        <div
          className={`flex bg-[#F6F6F6] p-2 items-center gap-3 rounded-lg text-text_disable hover:text-pri_green ${
            isActive ? "lg:bg-white" : "lg:bg-transparent"
          }`}
        >
          <div
            className={` p-2 rounded-lg text-xl ${
              isActive ? "text-white bg-pri_green" : "bg-white"
            }`}
          >
            {icon}
          </div>
          <h3
            className={`text-lg font-semibold ${
              isActive ? "text-pri_green" : ""
            }`}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default SideNav;