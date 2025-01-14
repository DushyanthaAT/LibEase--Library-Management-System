import React, { useState } from "react";
import signInImage from "../assets/signInImage.png";
import InputTextBox from "../components/InputTextBox";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import ButtonCom from "../components/ButtonCom";
import TitleText from "../components/TitleText";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import { TbEyeClosed } from "react-icons/tb";
import { TbEye } from "react-icons/tb";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://localhost:7197/api/Auth/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      console.log("Login successful, token:", token);
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError("Invalid email or password"); // Set error message
      console.error("Error during login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sec_green w-full h-screen p-4 flex items-center justify-center">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="bg-white w-full h-full rounded-lg flex flex-col items-center justify-center md:flex-row lg:gap-20">
        <img
          src={signInImage}
          alt=""
          className=" top-0 w-[70vw] md:w-1/2 max-w-xl"
        />
        <div className="flex flex-col md:items-start items-center justify-center">
          <TitleText title="Sign In" />
          <div className="mt-8 flex flex-col gap-4 w-[90vw] px-10 md:w-[40vw] md:px-0 max-w-md">
            <InputTextBox
              placeholder="Email"
              icon={<MdEmail />}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="relative">
              <InputTextBox
                placeholder="Password"
                icon={<RiLockPasswordFill />}
                value={password}
                onChange={handlePasswordChange}
                type={passwordVisible ? "text" : "password"}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text_disable"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <TbEye size={20} />
                ) : (
                  <TbEyeClosed size={20} />
                )}
              </button>
            </div>
            <ButtonCom
              name={loading ? "Signing In..." : "Sign In"}
              onClick={handleLogin}
              disabled={loading}
            />
          </div>
          <div
            className="flex justify-center items-center gap-2 mt-4 w-full"
            onClick={() => navigate("/")}
          >
            <span className="text-center block font-semibold text-text_disable hover:text-pri_green">
              Continue without Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
