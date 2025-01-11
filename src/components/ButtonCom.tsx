import React from "react";

interface ButtonComProps {
  name: string;
}

const ButtonCom: React.FC<ButtonComProps> = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full p-3 bg-pri_blue text-white font-semibold rounded-lg hover:bg-hover_green bg-pri_green"
    >
      {/* {loading ? "Updating..." : "Create Post"} */} {name}
    </button>
  );
};

export default ButtonCom;
