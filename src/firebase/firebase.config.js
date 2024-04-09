// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVyJgVa9YePvMvlOvhqNJWAAD61BsTe2k",
  authDomain: "b9-a9-874df.firebaseapp.com",
  projectId: "b9-a9-874df",
  storageBucket: "b9-a9-874df.appspot.com",
  messagingSenderId: "126858030927",
  appId: "1:126858030927:web:7acda8bc9503d17efe1f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;