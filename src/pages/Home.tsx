import React from "react";
import Navbar from "../components/Navbar";
import homeImage from "../assets/home_image.png";
import homeImageMobile from "../assets/home_image_mobile.png";
import BookCard from "../components/BookCard";
import TitleText from "../components/TitleText";
import Book from "../assets/book.png";

interface BookType {
  title: string;
  author: string;
  image: string;
}

const Books: BookType[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: Book,
  },
  {
    title: "1984",
    author: "George Orwell",
    image: Book,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: Book,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: Book,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: Book,
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-end w-[screen-10] mx-5 mt-5 bg-sec_green h-[60vh]  rounded-lg realtive md:h-[25vh] lg:h-[30vh] md:flex-row md:justify-start lg:mx-32">
        <img
          src={homeImage}
          alt="Home Image"
          className="hidden md:block h-[50vh] top-14 absolute md:h-[30vh] lg:h-[35vh] md:top-16 md:right-3 lg:right-[5vw]"
        />

        {/* Image for mobile screens */}
        <img
          src={homeImageMobile}
          alt="Home Image Mobile"
          className="md:hidden h-[50vh] top-14 absolute"
        />

        <div className="flex flex-col items-center justify-center pb-8 px-6 md:items-start md:w-2/3">
          <h2 className="text-2xl text-center font-bold text-text_green mx-2 mt-2 md:text-left md:text-3xl lg:text-4xl">
            Welcome to Your Library Management System
          </h2>
          <h3 className="text-md font-semibold text-center text-pri_green mx-2 mt-1 md:text-left md:text-lg lg:text-xl">
            Browse, explore, and unlock a world of books at your fingertips.
            Your perfect read is just a search away.
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center mt-1">
        <TitleText title="Recent Books" />
        <div className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4">
          {Books.slice(0, 4).map((book: BookType, index: number) => (
            <BookCard
              title={book.title}
              author={book.author}
              image={book.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;