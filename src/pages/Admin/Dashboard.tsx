import React from "react";
import TitleText from "../../components/TitleText";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { Link } from "react-router-dom";


const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2">
        <TitleText title="Dashboard" />
        <div className="w-full px-4 lg:px-10">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;