import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const myAxios = axios.create({
  baseURL: "https://library-server-five.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    myAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          // logout need to login
          logoutUser();
          navigate("/login");
        }
      }
    );
  }, [logoutUser, navigate]);
  return myAxios;
};

export default useAxios;
