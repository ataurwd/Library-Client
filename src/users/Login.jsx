import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { googleLogin, setUser, loginUser } = useContext(UserContext);
  const [password, setPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const HandelGoogleLogin = () => {
    googleLogin()
      .then((data) => {
        setUser(data.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Login success",
          icon: "success",
          draggable: false,
        });
      })
      .catch((error) => {
        console.error("Google Login Error", error);
        Swal.fire({
          title: "Failed to login",
          icon: "error",
          draggable: false,
        });
      });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Login success",
          icon: "success",
          draggable: false,
        });
      })
      .catch((error) => {
        console.error("Google Login Error", error);
        Swal.fire({
          title: `Failed to login ${error.message}`,
          icon: "error",
          draggable: false,
        });
      });
  };
  return (
    <div className="md:flex h-screen mx-4 md:mx-0">
      {/* Left Side Animation */}
      <div className="hidden md:flex w-1/2 justify-center text-white">
        <img src="https://i.ibb.co.com/pbmR4tY/6343825.jpg" alt="" />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-md md:w-3/4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Login Now
          </h2>
          <form onSubmit={handelLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2 text-sm relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={password ? "text" : "password"}
                id="password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
                required
              />
              <div onClick={() => setPassword(!password)}>
                {password ? (
                  <p className="absolute top-10 right-5">
                    <FaEye size={18} />
                  </p>
                ) : (
                  <p className="absolute top-10 right-5">
                    <FaEyeSlash size={18} />
                  </p>
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Login
            </button>

            {/* Google Login */}
            <div className="text-center mt-4">
              <p className="text-gray-600">Or login with:</p>
              <button
                onClick={HandelGoogleLogin}
                type="button"
                className="mt-2 flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.2 0 5.6 1.4 6.9 2.6l5.1-5.1C32.7 4.4 28.8 3 24 3 14.5 3 6.6 8.8 3.3 16.5l6.4 5C11.4 14.5 17.1 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.2 24.3c0-1.5-.1-2.5-.3-3.6H24v7.3h12.7c-.5 3.6-3.1 9.6-9.2 12.5l6.2 4.8C41.8 39.1 46.2 32.4 46.2 24.3z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10 28.2c-.7-2.1-1-4.3-1-6.2s.3-4.1 1-6.2L3.3 10c-1.7 3.4-2.7 7.3-2.7 11.5s1 8.1 2.7 11.5l6.7-5.8z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 46c6.5 0 12-2.1 16-5.8l-6.2-4.8c-3.5 2.2-8 3.5-13.5 3.5-6.9 0-12.7-4.5-14.8-10.8L3.3 36.5C6.6 44.2 14.5 46 24 46z"
                    />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                </span>{" "}
                Login with Google
              </button>
            </div>

            {/* Link to Register */}
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
