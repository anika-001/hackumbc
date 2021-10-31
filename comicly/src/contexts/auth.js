import React, { useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import firebase from "firebase/app";
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ username: "" });
  const [currentUser, setCurrentUser] = useState();

  function setInfo(info) {
    return setUserInfo(info);
  }
  async function signup(email, password) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }
  const login = (email, password) => {
    console.log(auth, email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setCurrentUser(user);
  //       }
  //     });
  //     return unsubscribe;
  //   }, [userInfo.url, userInfo.username]);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    setInfo,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
