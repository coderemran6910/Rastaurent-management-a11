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
}


useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
    });
    return () => {
        unSubscribe();
    };
},[])



  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    isLoading
  };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
