import React from "react";
import Book from "../assets/book.png";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
}

export default function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-80 w-50 ">
      <div className="h-60 w-50 bg-red-200">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <h3 className="text-lg font-bold w-48 line-clamp-1 text-center">
        {title}
      </h3>

      <p className="text-sm font-normal text-text_disable ">{author}</p>
    </div>
  );
}
