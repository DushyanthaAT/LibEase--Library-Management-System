import React from "react";
import SideNav from "../../components/SideNav";
import TitleText from "../../components/TitleText";
import InputTextBox from "../../components/InputTextBox";
import { FaBook } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FileInput } from "flowbite-react";
import ButtonCom from "../../components/ButtonCom";

const AddBook: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2">
        <TitleText title="Add a Book" />
        <div className="w-full md:w-1/2 lg:w-1/3  px-4">
          <form className="flex flex-col space-y-4">
            <label
              htmlFor="book-title"
              className="block text-sm font-medium text-gray-700"
            >
              Book Title
            </label>
            <InputTextBox
              placeholder="Enter the book title"
              icon={<FaBook />}
            />

            <label
              htmlFor="author-name"
              className="block text-sm font-medium text-gray-700"
            >
              Author Name
            </label>
            <InputTextBox
              placeholder="Enter the author name"
              icon={<IoPerson />}
            />

            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={10}
              placeholder="Type a description here..."
              className="p-3 w-full border bg-[#F6F6F6] border-gray-200 rounded-md resize-none focus:outline-2 focus:ring-1 focus:ring-pri_green"
            />

            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload File
            </label>
            <FileInput
              id="file-upload-helper-text"
              // helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
            />
            <ButtonCom name="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBook;
