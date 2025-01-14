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
      className={`w-full p-3 bg-pri_blue  font-semibold rounded-lg ${
        type === "reset"
          ? "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700"
          : " hover:bg-hover_green bg-pri_green text-white"
      }`}
    >
      {/* {loading ? "Updating..." : "Create Post"} */} {name}
    </button>
  );
};

export default ButtonCom;
