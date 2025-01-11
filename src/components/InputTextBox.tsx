import React from "react";

interface InputTextBoxProps {
  placeholder: string;
  icon: React.ReactNode;
}

const InputTextBox: React.FC<InputTextBoxProps> = ({ placeholder, icon }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-10 border bg-[#F6F6F6] border-gray-200 rounded-md pl-10 px-2 pb-3  focus:outline-2 focus:ring-1 focus:ring-pri_green"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {icon}
      </div>
    </div>
  );
};

export default InputTextBox;
