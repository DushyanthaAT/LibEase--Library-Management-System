import React, { useEffect, useState } from "react";
import TitleText from "../components/TitleText";
import BookImage from "../assets/book.png";
import BookCard from "../components/BookCard";
import axios from "axios";

interface BookProps {
  title: string;
  author: string;
  bookId: number;
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
    <div className="flex flex-col items-center md:mx-32">
      <TitleText title="Books" />
      <div className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4">
        {data.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
            // image={book.image}
            link={`/book/${book.bookId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
