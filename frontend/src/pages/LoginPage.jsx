import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token); // Store token for future requests
        navigate("/Profile");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    setUserName("");
    setPassword("");
  };

  return (
    <div className="h-screen flex p-7 justify-between flex-col w-full bg-white ">
      <div>
        <form
          className="border-gray-400 border-[1px] p-6 mb-[6rem]"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="-mt-[3px] mb-14">
            <img
              className="text-cente"
              src="https://assets.codepen.io/6060109/ig-logo.png"
            ></img>
            <input
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="bg-(#eeeeee) bg-slate-100 -mt-[3px] rounded border-gray-400 px-4 py-1 border w-full text-lg placeholder:text-xs  placeholder:text-stone-500"
              type="Phone number, email or username"
              placeholder="Phone number, email or username"
            />

            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-(#eeeeee) mt-5 bg-slate-100 rounded px-4 py-1 border-gray-400 border w-full text-lg placeholder:text-xs placeholder:text-stone-500"
              type="Password"
              placeholder="Password"
            />

            <button className="bg-blue-400 text-white mb-1 mt-6 rounded px-4 py-1 border w-full text-lg placeholder:text-base">
              Login
            </button>

            <p className="text-center text-xs">
              Forgot your login details?
              <Link to="/ForgotPassword">
                <b>Get help logging in.</b>
              </Link>
            </p>

            <div className="text-center">
              <b>
                <span  className="text-stone-300 text-[21px]">____________</span>
                <span  className="text-stone-500 text-[16px]"> OR </span>
                <span  className="text-stone-300 text-[22px]">____________</span>
              </b>
            </div>

            <div>
              <Link
                to="/LoginWthFaceBook"
                className="text-blue-400 flex mt-6 items-center justify-center rounded px-4 py-2 w-full placeholder:text-base"
              >
                <b>Log in with Facebook</b>
              </Link>
            </div>

            <div className="text-center mt-3">
              <Link
                to="/ForgotPassword"
                className="text-blue-950 items-center "
              >
                Forgot Paswword?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="border-gray-400 border-[1px] p-6 -mt-[5.5rem]">
        <Link
          to="/UserSignup"
          className="text-black flex text-sm items-center justify-center rounded px-4 py-2 w-full placeholder:text-base"
        >
          Dont have an account? <b className="text-blue-400">Sing up.</b>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
