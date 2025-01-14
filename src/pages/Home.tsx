import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import homeImage from "../assets/home_image.png";
import homeImageMobile from "../assets/home_image_mobile.png";
import BookCard from "../components/BookCard";
import TitleText from "../components/TitleText";
import Book from "../assets/book.png";
import axios from "axios";

interface BookProps {
  title: string;
  author: string;
  bookId: number;
  imageSrc: string;
}

const containerStyles = {
  "--s": "167px", // Size control
  "--c1": "#b2cbcd", // First gradient color
  "--c2": "#bfd1d2", // Second gradient color
  "--_g":
    "var(--c1) 6.1%, var(--c2) 6.4% 18.6%, var(--c1) 18.9% 31.1%, var(--c2) 31.4% 43.6%, var(--c1) 43.9% 56.1%, var(--c2) 56.4% 68.6%, #0000 68.9%",
  background: `radial-gradient(var(--s) at 100% 0, var(--_g)),
               radial-gradient(var(--s) at 0 0, var(--_g)),
               radial-gradient(var(--s) at 0 100%, var(--_g)),
               radial-gradient(var(--s) at 100% 100%, var(--_g)) var(--c1)`,
  backgroundSize: "var(--s) var(--s)",
};

const Home: React.FC = () => {
  const [data, setData] = useState<BookProps[]>([]);
  const getData = () => {
    axios
      .get("https://localhost:7197/api/Book")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="lg:flex lg:flex-col items-center">
      <div
        className="flex flex-col items-center justify-end w-[screen-10] mx-5 mt-5 bg-sec_green h-[60vh] rounded-lg relative md:h-[25vh] lg:h-[30vh] md:flex-row md:justify-start lg:mx-32 max-w-6xl lg:max-h-60"
        style={{ ...containerStyles }}
      >
        <img
          src={homeImage}
          alt="Home Image"
          className="hidden md:block h-[50vh] absolute md:h-[30vh] lg:h-[35vh] -top-4 -right-4  max-h-72"
        />

        {/* Image for mobile screens */}
        <img
          src={homeImageMobile}
          alt="Home Image Mobile"
          className="md:hidden h-[50vh] absolute -top-4 object-contain"
        />

        <div className="flex flex-col items-center justify-center pb-8 px-6 md:items-start md:w-2/3 z-10">
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
          {data.slice(0, 4).map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              image={book.imageSrc}
              link={`/book/${book.bookId}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
