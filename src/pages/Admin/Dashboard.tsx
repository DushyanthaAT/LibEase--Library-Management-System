import React from "react";
import TitleText from "../../components/TitleText";
import SideNav from "../../components/SideNav";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center w-full">
      <TitleText title="Dashboard" />
      <SideNav />
    </div>
  );
}
