import React from "react";

interface TitleTextProps {
  title: String;
}

const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  return <h2 className="text-2xl font-bold text-pri_green my-2">{title}</h2>;
};

export default TitleText;