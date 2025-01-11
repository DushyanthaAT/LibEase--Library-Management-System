import React from "react";
import SideNav from "../../components/SideNav";
import TitleText from "../../components/TitleText";

const AddBook: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2">
        <TitleText title="Add a Book" />
      </div>
    </div>
  );
};
export default AddBook;
