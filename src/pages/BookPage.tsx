import React, { useEffect, useState } from "react";
import TitleText from "../components/TitleText";
import BookImge from "../assets/book.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/fmotion.ts";

const BookPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const { bookId } = useParams<{ bookId: string }>();
  const getData = () => {
    axios
      .get(`https://localhost:7197/api/Book/${bookId}`)
      .then((result) => {
        setTitle(result.data.title);
        setAuthor(result.data.author);
        setDescription(result.data.description);
        setImage(result.data.imageSrc);
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
      <div className="w-60 h-80">
        <motion.img
          src={image || BookImge}
          alt="book name"
          className="w-full h-full object-cover"
          variants={fadeIn("up", 0, 1.4, 1)}
          initial="hidden20"
          whileInView="show"
        />
      </div>
      <div className="md:w-2/3 flex flex-col items-center justify-center md:items-start max-w-3xl">
        <motion.div
          variants={fadeIn("up", 0.1, 1, 1)}
          initial="hidden20"
          whileInView="show"
        >
          <TitleText title={title} />
        </motion.div>
        <motion.h5
          className="text-text_disable text-lg -mt-3"
          variants={fadeIn("up", 0.2, 1.1, 1)}
          initial="hidden20"
          whileInView="show"
        >
          {author}
        </motion.h5>
        <motion.p
          className="text-justify mb-10"
          variants={fadeIn("up", 0.3, 1, 1)}
          initial="hidden20"
          whileInView="show"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default BookPage;
