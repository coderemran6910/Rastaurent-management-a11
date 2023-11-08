import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //create User
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign In user
  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  //   Google Sign In
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loogedEmail = currentUser?.email || user?.email;
      const loggedUser = { user: loogedEmail };

      setUser(currentUser);
      setIsLoading(false);

      // Token related code

      if (currentUser) {
        axios
          .post("https://restaurent-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } else {
        axios
          .post("https://restaurent-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }

    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    isLoading,
  };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
