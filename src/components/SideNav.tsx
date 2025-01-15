import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "./ConfirmationModal";

interface MenuItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
  onClick?: () => void;
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
  {
    id: 3,
    title: "Sign Out",
    icon: <VscSignOut />,
    link: "#",
    onClick: () => {},
  },
];

const SideNav: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationType, setConfirmationType] = useState<string>("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setConfirmationType("signout");
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const cancelAction = () => {
    setIsModalOpen(false);
  };

  menuItems[2].onClick = handleLogout;
  return (
    <>
      {/* show nav as a top nav in mobile screens */}
      <div className="lg:hidden grid grid-auto-fit-xs gap-2 w-full px-4">
        {menuItems.map((item) => (
          <SideNavCom
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
            onClick={item.onClick}
          />
        ))}
      </div>

      {/* show full side nav in large screens */}
      <div className="hidden lg:flex flex-col w-60 h-screen bg-[#F6F6F6] gap-5 px-3 py-5 fixed">
        {menuItems.map((item) => (
          <SideNavCom
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
            onClick={item.onClick}
          />
        ))}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        confirmationType={confirmationType}
        onConfirm={confirmLogout}
        onCancel={cancelAction}
      />
    </>
  );
};

interface SideNavComProps extends MenuItem {
  onClick?: () => void; // Accept onClick handler as a prop
}

function SideNavCom({ title, icon, link, onClick }: SideNavComProps) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <div>
      {/* Render the "Sign Out" button differently */}
      {title === "Sign Out" ? (
        <div
          onClick={onClick}
          className={`flex bg-[#F6F6F6] p-2 items-center gap-3 rounded-lg text-text_disable hover:text-pri_green cursor-pointer`}
        >
          <div
            className={`p-2 rounded-lg text-xl ${
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
      ) : (
        <Link to={link}>
          <div
            className={`flex bg-[#F6F6F6] p-2 items-center gap-3 rounded-lg text-text_disable hover:text-pri_green ${
              isActive ? "lg:bg-white" : "lg:bg-transparent"
            }`}
          >
            <div
              className={`p-2 rounded-lg text-xl ${
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
      )}
    </div>
  );
}

export default SideNav;
