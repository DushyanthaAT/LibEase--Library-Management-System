import React from "react";
import TitleText from "../components/TitleText";
import BookImage from "../assets/book.png";
import BookCard from "../components/BookCard";

const BooksList = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: BookImage,
    link: "/bookPage",
  },
  {
    title: "1984",
    author: "George Orwell",
    image: BookImage,
    link: "/bookPage",
  },
  {
    title: "To Kill a Mockingbird  asd asda dasdd",
    author: "Harper Lee",
    image: BookImage,
    link: "/bookPage",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: BookImage,
    link: "/bookPage",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: BookImage,
    link: "/bookPage",
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
            link={book.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;