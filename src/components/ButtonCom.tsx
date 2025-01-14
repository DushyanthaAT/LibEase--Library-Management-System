import React from "react";

interface ButtonComProps {
  name: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const ButtonCom: React.FC<ButtonComProps> = ({ name, onClick, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled ? disabled : false}
      className="w-full p-3 bg-pri_blue text-white font-semibold rounded-lg hover:bg-hover_green bg-pri_green"
    >
      {/* {loading ? "Updating..." : "Create Post"} */} {name}
    </button>
  );
};

export default ButtonCom;
