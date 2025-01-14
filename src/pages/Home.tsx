import React, { useEffect, useState } from "react";
import homeImage from "../assets/home_image.png";
import homeImageMobile from "../assets/home_image_mobile.png";
import BookCard from "../components/BookCard";
import TitleText from "../components/TitleText";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/fmotion.ts";

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
      <motion.div
        className="flex flex-col items-center justify-end w-[screen-10] mx-5 mt-5 bg-sec_green h-[60vh] rounded-lg relative md:h-[25vh] lg:h-[30vh] md:flex-row md:justify-start lg:mx-32 max-w-6xl lg:max-h-60"
        style={{ ...containerStyles }}
        variants={fadeIn("up", 0.1, 1, 1)}
        initial="hidden20"
        whileInView="show"
      >
        <motion.img
          src={homeImage}
          alt="Home Image"
          className="hidden md:block h-[50vh] absolute md:h-[30vh] lg:h-[35vh] -top-4 -right-4  max-h-72"
          variants={fadeIn("left", 0, 1, 1)}
          initial="hidden60"
          whileInView="show"
        />

        {/* Image for mobile screens */}
        <motion.img
          src={homeImageMobile}
          alt="Home Image Mobile"
          className="md:hidden h-[50vh] absolute -top-4 object-contain"
          variants={fadeIn("left", 0, 1, 1)}
          initial="hidden60"
          whileInView="show"
        />

        <div className="flex flex-col items-center justify-center pb-8 px-6 md:items-start md:w-2/3 z-10">
          <motion.h2
            className="text-2xl text-center font-bold text-text_green mx-2 mt-2 md:text-left md:text-3xl lg:text-4xl"
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            Welcome to Your Library Management System
          </motion.h2>
          <motion.h3
            className="text-md font-semibold text-center text-pri_green mx-2 mt-1 md:text-left md:text-lg lg:text-xl"
            variants={fadeIn("up", 0.3, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            Browse, explore, and unlock a world of books at your fingertips.
            Your perfect read is just a search away.
          </motion.h3>
        </div>
      </motion.div>
      <div className="flex flex-col items-center mt-1">
        <motion.div
          variants={fadeIn("up", 0.2, 1, 1)}
          initial="hidden40"
          whileInView="show"
        >
          <TitleText title="Recent Books" />
        </motion.div>

        <motion.div
          className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4"
          variants={fadeIn("up", 0.2, 1, 1)}
          initial="hidden20"
          whileInView="show"
        >
          {data.slice(0, 4).map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              image={book.imageSrc}
              link={`/book/${book.bookId}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
