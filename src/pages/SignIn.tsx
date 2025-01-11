import React from "react";
import signInImage from "../assets/signInImage.png";
import InputTextBox from "../components/InputTextBox";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import ButtonCom from "../components/ButtonCom";
import TitleText from "../components/TitleText";

const SignIn: React.FC = () => {
  return (
    <div className="bg-sec_green w-full h-screen p-4 flex items-center justify-center">
      <div className="bg-white w-full h-full rounded-lg flex flex-col items-center justify-center md:flex-row lg:gap-20">
        <img
          src={signInImage}
          alt=""
          className=" top-0 w-[70vw] md:w-1/2 max-w-xl"
        />
        <div className="flex flex-col md:items-start items-center justify-center">
          <TitleText title="Sign In" />
          <div className="mt-8 flex flex-col gap-4 w-[90vw] px-10 md:w-[40vw] md:px-0 max-w-md">
            <InputTextBox placeholder="Email" icon={<MdEmail />} />
            <InputTextBox
              placeholder="Password"
              icon={<RiLockPasswordFill />}
            />
            <ButtonCom name="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
