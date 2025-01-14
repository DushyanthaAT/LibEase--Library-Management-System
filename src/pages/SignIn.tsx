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
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/fmotion.ts";

const containerStyles = {
  "--s": "167px",
  "--c1": "#f1f9f7",
  "--c2": "#ffffff",
  "--_g":
    "var(--c1) 6.1%, var(--c2) 6.4% 18.6%, var(--c1) 18.9% 31.1%, var(--c2) 31.4% 43.6%, var(--c1) 43.9% 56.1%, var(--c2) 56.4% 68.6%, #0000 68.9%",
  background: `radial-gradient(var(--s) at 100% 0, var(--_g)),
               radial-gradient(var(--s) at 0 0, var(--_g)),
               radial-gradient(var(--s) at 0 100%, var(--_g)),
               radial-gradient(var(--s) at 100% 100%, var(--_g)) var(--c1)`,
  backgroundSize: "var(--s) var(--s)",
};

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
    <div
      className="bg-sec_green w-full h-screen p-4 flex items-center justify-center"
      style={containerStyles}
    >
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
      <motion.div
        className="bg-white w-[90vw] h-[480px] sm:w-[60vw] md:[50vw] max-w-xl flex flex-col items-center justify-end rounded-xl py-6 relative shadow-[0px_0px_20px_rgba(0,0,0,0.06)]"
        variants={fadeIn("up", 0, 1, 1)}
        initial="hidden20"
        whileInView="show"
      >
        <motion.img
          src={signInImage}
          alt=""
          className=" w-full max-w-xl absolute -top-20 max-h-[350px] object-contain"
          variants={fadeIn("up", 0.2, 1, 1)}
          initial="hidden20"
          whileInView="show"
        />
        <div className="flex flex-col items-center justify-center">
          <motion.div
            variants={fadeIn("up", 0.1, 1, 1)}
            initial="hidden40"
            whileInView="show"
          >
            <TitleText title="Sign In" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 w-[90vw] px-10 md:px-0 max-w-md"
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
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
            <motion.div
              variants={fadeIn("up", 0, 1.1, 1)}
              initial="hidden20"
              whileInView="show"
            >
              <ButtonCom
                name={loading ? "Signing In..." : "Sign In"}
                onClick={handleLogin}
                disabled={loading}
              />
            </motion.div>
          </motion.div>
          <div
            className="flex justify-center items-center gap-2 mt-4 w-full"
            onClick={() => navigate("/")}
          >
            <span className="text-center block font-semibold text-text_disable hover:text-pri_green">
              Continue without Sign In
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
