import React from "react";
import TitleText from "../components/TitleText";
import BookImge from "../assets/book.png";

const BookPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto mt-8 px-8 md:flex-row md:px-32 md:gap-6 md:items-start">
      <div className="w-1/2 items-center md:w-1/3 md:pt-5 max-w-60">
        <img src={BookImge} alt="book name" />
      </div>
      <div className="md:w-2/3 flex flex-col items-center justify-center md:items-start max-w-3xl">
        <TitleText title="Book Name" />
        <h5 className="text-text_disable text-lg -mt-3">Author Name</h5>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum
          eius illo, animi nostrum, nobis tempora est provident, possimus sint
          itaque repellat atque eligendi sunt molestias distinctio perferendis
          placeat consectetur. Perspiciatis ad accusamus laboriosam inventore.
          Magnam temporibus eius inventore dolores deserunt quas. Fuga obcaecati
          consequuntur, quod incidunt fugiat ullam quia itaque molestias quasi
          animi harum odio maxime unde dolorum cupiditate. Recusandae aperiam
          dicta facere qui repellat nam error obcaecati. Assumenda, iusto. Atque
          quae, dolores voluptatibus maiores ducimus saepe, obcaecati aspernatur
          culpa debitis, laudantium dolorem distinctio suscipit eum vero
          laboriosam ab! Fuga nihil soluta, voluptatum veniam illum distinctio
          aperiam velit impedit quaerat voluptate harum dolor aspernatur
          incidunt ipsam expedita dolore sint veritatis ratione nisi. Rerum
          placeat exercitationem adipisci minima impedit vero. Doloremque cumque
          blanditiis distinctio perferendis labore, quasi fugit provident hic
          voluptatum voluptas inventore, nulla beatae! Maiores alias incidunt
          harum molestiae quae non ex. Unde nihil totam quae in! Quisquam,
          accusamus.
        </p>
      </div>
    </div>
  );
};

export default BookPage;
