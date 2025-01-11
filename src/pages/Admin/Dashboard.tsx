import React from "react";
import TitleText from "../../components/TitleText";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

const tableData = [
  {
    date: "12/12/2021",
    bookId: 1,
    bookName: "The Great Gatsby",
    link: "/book/1",
  },
  { date: "12/12/2021", bookId: 2, bookName: "1984", link: "/book/2" },
  {
    date: "12/12/2021",
    bookId: 3,
    bookName: "To Kill a Mockingbird",
    link: "/book/3",
  },
  {
    date: "12/12/2021",
    bookId: 4,
    bookName: "Pride and Prejudice",
    link: "/book/4",
  },
  {
    date: "12/12/2021",
    bookId: 5,
    bookName: "The Catcher in the Rye",
    link: "/book/5",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2">
        <TitleText title="Dashboard" />
        <div className="w-full px-4 lg:px-10">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;