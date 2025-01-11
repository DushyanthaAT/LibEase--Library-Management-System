import React from "react";
import TitleText from "../components/TitleText";
import BookImage from "../assets/book.png";
import BookCard from "../components/BookCard";

const BooksList = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: BookImage,
  },
  {
    title: "1984",
    author: "George Orwell",
    image: BookImage,
  },
  {
    title: "To Kill a Mockingbird  asd asda dasdd",
    author: "Harper Lee",
    image: BookImage,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: BookImage,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: BookImage,
  },
];

const Book: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:mx-32">
      <TitleText title="Books" />
      <div className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4">
        {BooksList.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;