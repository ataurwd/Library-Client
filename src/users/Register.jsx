import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = useContext(UserContext);
  const [password, setPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoURL.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (!upperCase.test(password)) {
      Swal.fire({
        title: "password must contain at last one uppercase letter",
        icon: "error",
        draggable: false,
      });
      return;
    }
    if (!lowerCase.test(password)) {
      Swal.fire({
        title: "Password must contain at least one lowercase letter.",
        icon: "error",
        draggable: false,
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };
        updateProfile(auth.currentUser, profile).then(() => {
          setUser((prev) => {
            return { ...prev, displayName: name, photoURL: photoUrl };
          });
        });

        Swal.fire({
          title: "Registration success",
          icon: "success",
          draggable: false,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `Registration error: ${errorCode}`,
          icon: "error",
          draggable: false,
        });
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full flex">
        {/* Left Side Animation */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://i.ibb.co.com/C1YNZgK/4957136.jpg" // Replace with your animation image or SVG path
            alt="Register Animation"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 px-4 lg:mt-14 md:mt-10 mt-0">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="w-full p-2 border rounded"
                placeholder="Enter photo URL"
              />
            </div>
            <div className="space-y-2 text-sm relative">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
               type={password ? "text" : "password"}
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Enter password"
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

            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded hover:bg-primary transition"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
