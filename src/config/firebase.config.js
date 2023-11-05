// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACu9JdnMYIltNLGUqEBn0C1k4beglWVfE",
  authDomain: "rastaurent-management-a-11.firebaseapp.com",
  projectId: "rastaurent-management-a-11",
  storageBucket: "rastaurent-management-a-11.appspot.com",
  messagingSenderId: "437507625754",
  appId: "1:437507625754:web:306e6174236623ee14d2a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);