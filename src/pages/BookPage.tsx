import React, { useEffect, useState } from "react";
import TitleText from "../components/TitleText";
import BookImge from "../assets/book.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { bookId } = useParams<{ bookId: string }>();
  const getData = () => {
    axios
      .get(`https://localhost:7197/api/Book/${bookId}`)
      .then((result) => {
        setTitle(result.data.title);
        setAuthor(result.data.author);
        setDescription(result.data.description);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-auto mt-8 px-8 md:flex-row md:px-32 md:gap-6 md:items-start">
      <div className="w-1/2 items-center md:w-1/3 md:pt-5 max-w-60">
        <img src={BookImge} alt="book name" />
      </div>
      <div className="md:w-2/3 flex flex-col items-center justify-center md:items-start max-w-3xl">
        <TitleText title={title} />
        <h5 className="text-text_disable text-lg -mt-3">{author}</h5>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default BookPage;
