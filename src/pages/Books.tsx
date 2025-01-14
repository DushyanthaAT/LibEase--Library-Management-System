import React, { useEffect, useState } from "react";
import TitleText from "../components/TitleText";
import BookCard from "../components/BookCard";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/fmotion.ts";

interface BookProps {
  title: string;
  author: string;
  bookId: number;
  imageSrc: string;
}

const Book: React.FC = () => {
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
    <div className="flex flex-col items-center mx-2 md:mx-32">
      <motion.div
        variants={fadeIn("up", 0.1, 1, 1)}
        initial="hidden40"
        whileInView="show"
      >
        <TitleText title="Books" />
      </motion.div>

      <motion.div
        className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4"
        variants={fadeIn("up", 0.1, 1, 1)}
        initial="hidden20"
        whileInView="show"
      >
        {data.map((book) => (
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
  );
};

export default Book;
