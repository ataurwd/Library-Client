import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./../firebase/firebase";
import axios from "axios";
import { myAxios } from "../hooks/useAxios";

export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
  // set and manage user
  const [user, setUser] = useState(null);
  // set loading state
  const [loading, setLoading] = useState(true);

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // to store the login user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        await myAxios.post(
          "/jwt",
          { email: currentUser.email },
          { withCredentials: true }
        );
        setUser(currentUser);
      } else {
        setUser(currentUser);
        await myAxios.post("/logout", { withCredentials: true })     
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const obj = {
    googleLogin,
    user,
    setUser,
    logoutUser,
    createUser,
    loginUser,
    loading,
  };

  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
};

export default AuthContext;
