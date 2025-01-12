import React, { act, useState } from "react";
import SideNav from "../../components/SideNav";
import TitleText from "../../components/TitleText";
import InputTextBox from "../../components/InputTextBox";
import { FaBook } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FileInput } from "flowbite-react";
import ButtonCom from "../../components/ButtonCom";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [genre, setGenre] = useState("a");
  const [publicationYear, setPublicationYear] = useState(0);

  // const getData=()=>{
  //   axios.get("http://localhost:3001/books").then((response)=>{}
  // }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://localhost:7197/api/Book";
    const data = {
      author: author,
      title: title,
      description: description,
      genre: genre,
      publicationYear: publicationYear,
    };
    axios
      .post(url, data)
      .then((results) => {
        console.log(results);
        clearForm();
        toast.success("Book added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add book");
      });
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setGenre("");
    setPublicationYear(0);
  };

  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <div className="flex-1 flex flex-col items-center md:items-start w-full">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2">
        <TitleText title="Add a Book" />
        <div className="w-full md:w-1/2 lg:w-1/3  px-4">
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label
              htmlFor="book-title"
              className="block text-sm font-medium text-gray-700"
            >
              Book Title
            </label>
            <InputTextBox
              placeholder="Enter the book title"
              icon={<FaBook />}
              value={title}
              onChange={handleTitleChange}
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
              value={author}
              onChange={handleAuthorChange}
            />

            {/* <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <InputTextBox placeholder="Enter the genre" icon={<ImBooks />} /> */}

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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
