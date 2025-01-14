import React from "react";
import { Link } from "react-router-dom";
import BookImge from "../assets/book.png";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  link: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, link, image }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center justify-center h-80 w-50 ">
        <div className="h-60 w-44">
          <img
            src={image || BookImge}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold w-48 line-clamp-1 text-center">
          {title}
        </h3>

        <p className="text-sm font-normal text-text_disable ">{author}</p>
      </div>
    </Link>
  );
};

export default BookCard;
