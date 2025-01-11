import React from "react";
import TitleText from "../components/TitleText";
import Book from "../assets/book.png";
import BookCard from "../components/BookCard";

interface BookListType {
  title: string;
  author: string;
  image: string;
}

const BooksList: BookListType[] = [
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
    title: "To Kill a Mockingbird  asd asda dasdd",
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

export default function Books() {
  return (
    <div className="flex flex-col items-center md:mx-32">
      <TitleText title="Books" />
      <div className="grid gap-4 grid-auto-fit-xs w-full lg:w-auto lg:grid-cols-4">
        {BooksList.map((book: BookListType, index: number) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}
