import React from "react";

interface TitleTextProps {
  title: String;
}

export default function TitleText({ title }: TitleTextProps) {
  return <h2 className="text-2xl font-bold text-pri_green my-2">{title}</h2>;
}
