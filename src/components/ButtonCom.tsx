import React from "react";

interface ButtonComProps {
  name: string;
  type?: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const ButtonCom: React.FC<ButtonComProps> = ({
  name,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled ? disabled : false}
      //change button color conditionally based on reset and other
      className={`w-full p-3 bg-pri_blue  font-semibold rounded-lg ${
        type === "reset"
          ? "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700"
          : " hover:bg-hover_green bg-pri_green text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default ButtonCom;
