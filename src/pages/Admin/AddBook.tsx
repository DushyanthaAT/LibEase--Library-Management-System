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
import Bookimage from "../../assets/book.png";
import { useNavigate } from "react-router-dom";

const AddBook: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [genre, setGenre] = useState("a");
  const [publicationYear, setPublicationYear] = useState(0);
  const [imageName, setImageName] = useState<string>("sampleTitle");
  const [imageSrc, setImageSrc] = useState<string>(Bookimage);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

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
    if (!title || !author || !description || !genre) {
      toast.error("All fields are required.");
      return;
    }
    const url = "https://localhost:7197/api/Book";
    const data = {
      author: author,
      title: title,
      description: description,
      genre: genre,
      publicationYear: publicationYear,
      imageName: imageName,
      imageFile: imageFile,
      imageSrc: imageSrc,
    };
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((results) => {
        clearForm();
        toast.success("Book added successfully");
        navigate("/admin/dashboard");
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
    setImageName("");
    setImageFile(null);
  };

  const showPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageName(file.name);
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImageSrc(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full lg:flex-row mt-4 lg:mt-0">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="flex-1 flex flex-col items-center md:items-start w-full ">
        <SideNav />
      </div>
      <div className="flex-2 flex flex-col items-center w-full mt-2 lg:ml-60">
        <TitleText title="Add a Book" />
        <div className="w-full md:w-1/2 lg:w-1/2 2xl:w-1/3 px-4">
          <form
            className="flex flex-col space-y-4 mb-5"
            onSubmit={handleSubmit}
          >
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
              rows={10}
              placeholder="Type a description here..."
              className="p-3 w-full border bg-[#F6F6F6] border-gray-200 rounded-md resize-none focus:outline-2 focus:ring-1 focus:ring-pri_green"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex flex-col items-center lg:flex-row gap-4 lg:items-start justify-between bg-[#F6F6F6] border-dashed border-2 border-gray-200 p-4 rounded-md">
              <div className="flex flex-col">
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Upload File
                </label>
                <FileInput
                  id="file-upload-helper-text"
                  onChange={showPreview}
                  // helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                />
              </div>
              <div className="w-28 h-40 min-w-24 min-h-36 bg-slate-300">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <ButtonCom name="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBook;
